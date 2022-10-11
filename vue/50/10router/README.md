# 10router

有了 Ajax 之后 就不用 每次都刷新页面

之前我们用 iframe 的方式嵌套，但是有个问题当我切换到非首页时， 页面刷新，又会跳到首页

所以有了前端路由
不同的路由对应不同的页面

在一个页面内跳转,用户在同一页面操作，更好的用户体验,和 cs 架构一样的体验,我们称之为单页应用

> https://v3.router.vuejs.org/zh/

手动来配置路由

手动安装 vue-router v3

```
npm install vue-router@v3
```

## 两种模式

history 模式 /about

hash 模式 /#/about

hash 本来是拿来做页面定位的，如果拿来做路由的话，原来的锚点功能就不能用了。

## router-link 和 a 标签的区别

- a 标签，每次跳转都得重渲染

## 工作原理

1. 用户点击了页面上的路由链接
2. 导致 url 地址栏中的 hash 值发生变化
3. 前端路由监听 hash/pathname 地址的变化
4. 前端路由把 hash/pathname 地址对应的组件加载进去

## 前端路由特点

- 用户体验好，在同一页面操作（单页应用），媲美 CS 架构
- 不利于 seo（服务端渲染解决）

## router-link 和 router-view

router-link: 用来路由跳转

router-view: 路由加载的组件

## 动态路由

将代码分割，减少首屏加载时间
