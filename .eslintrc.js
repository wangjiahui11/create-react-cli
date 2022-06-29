module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        quotes: [1, 'single'], //单引号
        'no-console': 0, //不禁用console
        'no-debugger': 2, //禁用debugger
        semi: 0, //不强制使用分号
        camelcase: 0, //强制驼峰法命名
        radix: [1, 'as-needed'],
        'no-unused-vars': 0,
    }
}
