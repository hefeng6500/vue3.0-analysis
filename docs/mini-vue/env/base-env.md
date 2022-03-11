# Rollup基础环境搭建

搭建 mini-vue3 基础开发环境全部按照 Vue-next 配置进行操作，删繁就简为实现一个简洁、可用、高效的环境！

创建完成后目录如下


```
build-your-own-vue3
├─ .gitignore
├─ doc
│  └─ init.md
├─ examples
│  └─ index.html
├─ package.json
├─ packages
│  ├─ reactivity
│  │  ├─ package.json
│  │  └─ src
│  │     └─ index.ts
│  ├─ size-check
│  │  └─ package.json
│  └─ vue
│     ├─ index.js
│     ├─ package.json
│     └─ src
│        ├─ index.ts
│        └─ runtime.ts
├─ README.md
├─ rollup.config.js
├─ scripts
│  ├─ dev.js
│  └─ utils.js
├─ tsconfig.json
└─ yarn.lock
```

## 1、创建基础配置

### 1、项目初始化

```shell
yarn init
```

```json
{
  "private": true, // 私有属性，打包时忽略该包
  "version": "0.1.0",
  "workspaces": [
    // npm 多包管理，使用 packages 下的工作目录
    "packages/*"
  ],
  "description": "vue",
  "repository": "https://github.com/hefeng6500/build-your-own-vue3",
  "author": "hefeng6500 <2443992009@qq.com>",
  "license": "MIT"
}
```

### 2、安装依赖包

```shell
yarn add @babel/core @babel/preset-env @rollup/plugin-babel @rollup/plugin-json chalk execa minimist rollup rollup-plugin-typescript2 -D -W
```

**配置 babel**

```js
module.exports = {
  input: {},
  output: {},
  plugins: [
    tsPlugin,
    getBabelOutputPlugin({
      allowAllFormats: true,
      presets: ["@babel/preset-env"],
    }),
  ],
};
```

**初始化 ts 配置**
根目录下生成 `tsconfig.json`

```shell
yarn global add typescript

tsc --init
```

修改 `tsconfig.json`

```json
{
  "target": "esnext",
  "module": "esnext"
}
```

```js
const tsPlugin = ts({
  tsconfig: path.resolve(__dirname, "tsconfig.json"),
  cacheRoot: path.resolve(__dirname, "node_modules/.rts2_cache"),
});

module.exports = {
  plugins: [tsPlugin],
};
```

**添加 .gitignore**

```
dist
.DS_Store
node_modules
coverage
temp
explorations
TODOs.md
*.log
```

## 2、构建开发环境脚本

创建 `scripts/dev.js`, `scripts/utils.js` 

```js
// utils.js
const fs = require("fs");
const chalk = require('chalk');

// 读取 packages 目录下需要打包的目录
const targets = (exports.targets = fs.readdirSync('packages').filter(f => {
  if (!fs.statSync(`packages/${f}`).isDirectory()) {
    return false
  }
  const pkg = require(`../packages/${f}/package.json`)
  if (pkg.private && !pkg.buildOptions) {
    return false
  }
  return true
}))

// 模糊匹配需要打包的 package name
exports.fuzzyMatchTarget = (partialTargets, includeAllMatching) => {
  const matched = []
  partialTargets.forEach(partialTarget => {
    for (const target of targets) {
      if (target.match(partialTarget)) {
        matched.push(target)
        if (!includeAllMatching) {
          break
        }
      }
    }
  })
  if (matched.length) {
    return matched
  } else {
    console.log()
    console.error(
      `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
        `Target ${chalk.underline(partialTargets)} not found!`
      )}`
    )
    console.log()

    process.exit(1)
  }
}
```

导出的 `targets` 为 packages 目录下的包名，是一个数组例如: `vue`、`reactivity`;

`fuzzyMatchTarget` 模糊匹配需要打包的目标包名，返回匹配的包名。如果未匹配到包将使用 chalk 插件高亮提示错误信息

```js
// dev.js
const fs = require("fs")
const execa = require('execa');
const { fuzzyMatchTarget } = require('./utils')

const args = require('minimist')(process.argv.slice(2))
const target = args._.length ? fuzzyMatchTarget(args._)[0] : 'reactivity'
const formats = args.formats || args.f
const sourceMap = args.sourcemap || args.s
// const commit = execa.sync('git', ['rev-parse', 'HEAD']).stdout.slice(0, 7)

execa(
  'rollup',
  [
    '-wc',
    '--environment',
    [
      // `COMMIT:${commit}`,
      `TARGET:${target}`,
      `FORMATS:${formats || 'global'}`,
      sourceMap ? `SOURCE_MAP:true` : ``
    ]
      .filter(Boolean)
      .join(',')
  ],
  {
    stdio: 'inherit'
  }
)
```

execa 是一个管理 node 命令行执行的插件，minimist 是一个格式化命令参数选项的插件。
`dev.js` 使用了 execa 管理 rollup 进行打包，`-w` 实时监听文件进行热更新

## 3、配置 rollup 

```js
import path from "path";
import ts from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";

const masterVersion = require("./package.json").version;
const packagesDir = path.resolve(__dirname, "packages");
const packageDir = path.resolve(packagesDir, process.env.TARGET);
const resolve = (p) => path.resolve(packageDir, p);
const pkg = require(resolve(`package.json`));
const packageOptions = pkg.buildOptions || {};
const name = packageOptions.filename || path.basename(packageDir);

const outputConfigs = {
  "esm-bundler": {
    file: resolve(`dist/${name}.esm-bundler.js`),
    format: `es`,
  },
  "esm-browser": {
    file: resolve(`dist/${name}.esm-browser.js`),
    format: `es`,
  },
  cjs: {
    file: resolve(`dist/${name}.cjs.js`),
    format: `cjs`,
  },
  global: {
    file: resolve(`dist/${name}.global.js`),
    format: `iife`,
  },

  // runtime-only builds, for main "vue" package only
  "esm-bundler-runtime": {
    file: resolve(`dist/${name}.runtime.esm-bundler.js`),
    format: `es`,
  },
  "esm-browser-runtime": {
    file: resolve(`dist/${name}.runtime.esm-browser.js`),
    format: "es",
  },
  "global-runtime": {
    file: resolve(`dist/${name}.runtime.global.js`),
    format: "iife",
  },
};
// const defaultFormats = ["esm-bundler", "cjs"];
// const inlineFormats = process.env.FORMATS && process.env.FORMATS.split(",");

const packageFormats = packageOptions.formats;

const tsPlugin = ts({
  tsconfig: path.resolve(__dirname, "tsconfig.json"),
  cacheRoot: path.resolve(__dirname, "node_modules/.rts2_cache"),
});

const packageConfigs = packageFormats.map((format) =>
  createConfig(format, outputConfigs[format])
);

export default packageConfigs;

function createConfig(format, output, plugins = []) {
  let entryFile = /runtime$/.test(format) ? `src/runtime.ts` : `src/index.ts`;

  const isGlobalBuild = /global/.test(format)
  
  if (isGlobalBuild) {
    output.name = packageOptions.name
  }

  return {
    input: resolve(entryFile),
    output,
    plugins: [
      json({
        namedExports: false,
      }),
      tsPlugin,
      getBabelOutputPlugin({
        allowAllFormats: true,
        presets: ["@babel/preset-env"],
      }),
    ],
  };
}
```

`outputConfigs` 对象存储了 rollup 导出对象的 **名称** 和 **文件导出模块规范**；更多前端模块规范基础知识请进: [前端模块化：CommonJS,AMD,CMD,ES6](https://juejin.cn/post/6844903576309858318)

format 格式分为：
- **es**: es module，是 ES 模块规范，使用 import 和 export 关键字对模块进行导入导出
- **cjs**: commonjs 规范， 使用 module.exports 和 require 关键字对模块进行导入导出
- **iife**: 立即调用函数表达式。是一个自执行函数，这里打包后会将结果赋值给一个全局变量,形如：

```js
var VueReactivity = function () {
  'use strict';

  function effect() {
    console.log(123);
  }

  return effect;
}();
```

这里 `export default packageConfigs;` 
packageFormats 是单个 npm 包配置文件需要输出的文件格式，像 package/vue 下的 package.json 如下：
```json
{
  "name": "vue",
  "version": "0.1.0",
  "main": "index.js",
  "buildOptions": {
    "name": "Vue",
    "formats": [
      "esm-bundler",
      "esm-bundler-runtime",
      "cjs",
      "global",
      "global-runtime",
      "esm-browser",
      "esm-browser-runtime"
    ]
  }
}

```

packageConfigs 会对 formats 下定义的各种模块几个进行打包，最后输出多个打包文件

注意：rollup.config.js ，**当前的配置是对一个 npm 包下的多个导出格式进行打包，而不是对多个npm包进行打包**
