# 使用 esbuild 重构 dev 打包环境

## 初衷

**之前使用的 rollup 打包，为什么改用 esbuild？**

因为 esbuild 的打包速度更快！具体可以查看 esbuild 官网提供同类工具打包对比 https://esbuild.github.io/

build 时还是采用的 rollup，因为 rollup 构建的产物更小



## dev 环境重构

### 1.安装依赖包

**esbuild: An extremely fast JavaScript bundler**

```
pnpm install esbuild -D -W
```

### 2.尝试将 package/vue 进行打包

```js
const { build } = require("esbuild");
const { resolve, relative } = require("path");

const outfile = resolve(
  __dirname,
  `../packages/vue/dist/vue.js`
);

build({
  entryPoints: [resolve(__dirname, `../packages/vue/src/index.ts`)],
  outfile,
  bundle: true
})
```

完成！dist 目录下会输出 vue.js

### 3.添加对打包参数的可配置化

  - 可通过 `pnpm dev [packagename]` 动态化打包指定的包，默认打包 `vue`
  - 可通过 `node scripts/dev.js -f [format]` 动态化指定打包输出格式，默认 `global`
  - 支持修改代码自动打包
```js
// esbuild 在 dev 环境更快

const { build } = require("esbuild");
const { resolve, relative } = require("path");
// 格式化命令行参数
const args = require("minimist")(process.argv.slice(2));
// 控制台高亮插件
const chalk = require("chalk");

// 打包的目标包名
const target = args._[0] || "vue";
// 打包的格式，默认使用 global
const format = args.f || "global";
// 目标包的 package.json
const pkg = require(resolve(__dirname, `../packages/${target}/package.json`));

// 打包输出的格式
const outputFormat = format.startsWith("global")
  ? "iife"
  : format === "cjs"
  ? "cjs"
  : "esm";

// 打包输出包名的后缀
const postfix = format.endsWith("-runtime")
  ? `runtime.${format.replace(/-runtime$/, "")}`
  : format;

// 打包输出的文件路径
const outfile = resolve(
  __dirname,
  `../packages/${target}/dist/${target}.${postfix}.js`
);
// 获取输出文件的相对路径
const relativeOutfile = relative(process.cwd(), outfile);

// 使用 esbuild 进行打包
// 为什么 pnpm build 使用 rollup，而 pnpm dev 使用 esbuild？
// 因为 esbuild 更快。rollup 打包产物更小

build({
  entryPoints: [resolve(__dirname, `../packages/${target}/src/index.ts`)],
  outfile,
  bundle: true,

  sourcemap: true,
  format: outputFormat,
  globalName: pkg.buildOptions?.name,
  platform: format === "cjs" ? "node" : "browser",

  define: {
    __VERSION__: `"${pkg.version}"`,
    __DEV__: `true`,
  },
  watch: {
    onRebuild(error) {
      if (!error) console.log(`rebuilt: ${relativeOutfile}`);
    },
  },
}).then(() => {
  console.log(chalk.green(`watching: ${relativeOutfile}`));
});

```




