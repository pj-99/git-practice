# Week 02

## W2 - hw checklist

- [x] A. 環境準備
  - [week-02/README.md](README.md)
  - note: npm run script 部分是繳交期限後才補上的，重看之後覺得寫得太省略想再寫詳細一點點
- [x] B. 程式題:fib
  - [week-02/fib.js](fib.js)
  - 基本的 recursion 寫法 + closure
  - note: closure 是繳交期限後才補上的
- [x] C. 程式題: sum
  - [week-02/sum.js](sum.js)
  - [x] (optional) 挑戰題: 有幾種寫法？
    - 寫了 `reduce` 和遞迴的兩種寫法
  - [x] (optional) 挑戰題: 如果 sum 函式的 input 是 n，然後要回傳 1 + 2 + 3 + … + n 的話，一樣不能用 for, while 寫，要怎麼做？
    - 寫了用 Array.keys() 和公式解的兩種寫法
- [x] D. 程式題: Stack
  - [week-02/stack.js](stack.js)
  - [week-02/main.js](main.js)
    - note: 測試部分與 stack 的註解是繳交期限後才補上的

---

### Node.js 版本

`v22.5.1`

### nvm

[nvm (Node Version Manager)](https://github.com/nvm-sh/nvm#install--update-script) 是 node.js 本身的版本管理器，讓電腦可以更方便的安裝與使用不同版本的 node.js。

### npm

[npm (Node package manager)](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager) 是 node.js 的套件管理器，可以用來下載與管理專案使用的套件，管理專案的版本，也可以用來執行 `package.json` 中的 `scripts` 等等。

#### [npm run script](https://docs.npmjs.com/cli/v10/commands/npm-run-script)

`npm run [script]` 可以用來執行 `package.json` 中所定義 `scripts`，

例如這是現在 week-02 `package.json` 中所定義的 `scripts`：

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "hello": "echo this is triggered by npm run"
  },
```

當輸入 `npm run hello` ，就會執行 hello 所對應的 script ：

```shell
> npm run hello

> week-02@1.0.0 hello
> echo this is triggered by npm run

this is triggered by npm run
```

這個功能的好處是能將專案常用指令設定起來，讓團隊成員或是自動化流程都能用 `npm run` 方便地執行這些指令。

- 例如：可以寫一段會執行單元測試的指令，將它命名為 `unit_test`，之後就能用 `npm run unit_test` 跑單元測試。

```json
  "scripts": {
    "unit_test": "// do unit test here"
  },
```
