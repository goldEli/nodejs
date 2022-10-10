# 10vue-cli

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### NOTE

> https://v2.cn.vuejs.org/v2/guide/components.html

#### 开发环境为什么要启动一个服务器？

1. 实时编译 实时更新页面

#### 开发完成后

```
npm run build
```

生成 dist 文件 放到服务器

#### 组件化

1. 把页面由一个一个由组件的

2. 每个 xxx.vue 文件表示一个组件

- template html 模板
- script js
- style 样式

3. style 中 scoped 什么意思
   当前组件的样式只会作用于此组件，不会与其他的组件冲突

#### data 为什么是函数？

```
Vue.component('my-component', {
  template: '<div>OK</div>',
  data() {
    return {} // 返回一个唯一的对象，不要和其他组件共用一个对象进行返回
  },
})
```

组件复用时，避免数据污染

A
B
c => data: {a:1}

A 组件调用了 c
B 组件调用了 c

此时 A 中 C 组件 修改 data.a = 2, B 中 C 组件 a 会被修改吗？

所以组件调用时需要保证数据是独立的
每次调用组件，执行函数返回 data
