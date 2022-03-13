# 搭建测试环境

根据 vuejs/core，采用了 jest 测试工具。https://jestjs.io/zh-Hans/

## 安装依赖

```
pnpm install jest ts-jest ts-node -D -W
```

## 初始化 jest 配置

会在根目录下生成 jest.config.ts

```shell
node_modules/.bin/jest --init
```

jest 配置如下

```ts
export default {
  // Automatically clear mock calls, instances and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ["packages/*/src/**/*.ts"],

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // An array of file extensions your modules use
  moduleFileExtensions: ["js", "ts", "tsx", "json"],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    "^@vue/(.*?)$": "<rootDir>/packages/$1/src",
  },

  // A preset that is used as a base for Jest's configuration
  preset: "ts-jest",

  // The root directory that Jest should scan for tests and modules within
  rootDir: __dirname,

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // The glob patterns Jest uses to detect test files
  testMatch: ["<rootDir>/packages/**/__tests__/**/*spec.[jt]s?(x)"],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
};
```

在对应的 packages 目录下新建 \_\_tests\_\_ 文件夹,里面新建 \*.spec.ts 测试用例文件。

### 新建 test 命令行

```json
"scripts": {
  "test": "jest"
}
```
