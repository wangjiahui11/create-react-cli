## react脚手架的工程化配置

### 一.创建Create React App

```
npx create-react-app create-react-cli
cd create-react-cli
// eject 命令执行后会将封装在 create-react-app 中的配置全部反编译到当前项目，这样用户就能完全取得 webpack 文件的控制权。
npm run eject 
npm install
```

二.初始化Eslint

```
npx eslint --init // 创建.eslintrc.js
```

- rules的配置

```
 rules: {
        quotes: [1, 'single'], //单引号
        'no-console': 0, //不禁用console
        'no-debugger': 2, //禁用debugger
        semi: 0, //不强制使用分号
        camelcase: 0, //强制驼峰法命名
        radix: [1, 'as-needed'],
        'no-unused-vars': 0,
    },
```

- 创建Eslint忽略文件

  ```
  echo > .eslintignore
  ```

### 三.代码风格工具perttier的配置

```
npm install --save-dev --save-exact prettier
或
yarn add --dev --exact prettier
```

- 创建 .prettierrc.js配置文件

```
module.exports = {
  // 一行最多 100 字符
  printWidth: 100,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 使用 2 个空格缩进
  tabWidth: 2,
  tabSize: 2,
  // 行尾需要有分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 末尾不需要逗号 'es5'  none
  trailingComma: 'es5',
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'always',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // 换行符使用 lf 结尾是 \n \r \n\r auto
  endOfLine: 'auto',
};
```

[prettier的Option配置参数](https://prettier.io/docs/en/options.html)

- **创建 .prettierignore的忽略文件**

  ```
  **/*.md
  **/*.svg
  **/*.ejs
  **/*.html
  package.json
  ```

### 四.代码提交规范

- **husky**

  操作 git 钩子的工具

- **lint-staged**

  本地暂存代码检查工具

- **commitizen**

  代码提交规范

  

- **安装husky及配置**

```
npm i husky -D
npm set-script prepare "husky install" # 在package.json中添加脚本
npx husky add .husky/pre-commit "npx lint-staged"
```



- **安装list-staged，并创建 .lintstagedrc.json 文件控制检查和操作方式**

```
npm lint-staged husky -D
```

 **.lintstagedrc.json**

```
 {
   	"./src/*.{js,jsx,tsx,ts,less,md}": ["prettier --write", "git add"],
    "*.md": ["prettier --write"]
  },
```

```
npm run prepare # 初始化husky,将 git hooks 钩子交由,husky执行
```



- **commitizen安装**

```
npm i commitizen cz-conventional-changelog -D
# package.json 中添加 commit 指令, 执行 `git-cz` 指令
npm set-script commit "git-cz" 
```

