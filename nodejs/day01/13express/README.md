# create server using express js

### 初始化

我们用 npm 来管理我们项目

```
npm init -y
```

自动生成 package.json 文件，此文件包含我们项目所有配置信息

```
{
  "scripts": {
    "start": "nodemon server.js"
  },
}
```

配置命令

```
npm run start
```

项目安装的信息

```
"dependencies": {
    "express": "^4.18.1"
}
```

### 常见状态码

* 2xx 成功状态码
* 3xx 页面跳转（重定向）
* 4xx 浏览器请求报错 404
* 5xx 服务器报错

### 登录
http 是无状态的，每次请求是完全独立的，服务器接收了5次请求，无法知道这五次是哪些用户发的，所以维护一个会话（即登录状态），让服务器知道是谁的请求

* session & cookie 
* jwt 

#### cookie
* 用户登录后服务器将用户信息存入cookie
* 浏览器每次接口访问服务器，都会带上cookie
* 服务器检测cookie内容鉴别这个接口是哪个用户发的


#### jwt
