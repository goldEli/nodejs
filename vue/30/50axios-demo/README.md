# axios-demo

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Note

##### error Delete ⏎ 报错

```
npm run lint --list
```

##### axios

只用 jquery 的ajax请求太浪费了 

> https://www.axios-http.cn/docs/intro

```
npm install axios
```

#### 跨域问题

开发时，前端开发服务器 与 后台服务器域名不一致 导致跨域问题

- vite 配置 反向代理

- jsonp
    - script 等标签 src 不会收到跨域影响
    - 全局定义一个 getData(data) {window.data = data}
    - 后端返回 getData(123)，此时 getData 会被执行，数据就会存入 window.data
    - 通过 window.data 就可以获取跨域返回的数据