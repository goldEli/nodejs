# 后台管理系统

### 流程

* 创建服务器
* 开发前端页面
  * 登录
  * 注册
  * 学生管理页面
* 开发后台接口
  * 登录注册
  * 登录状态保持
  * 页面数据增删改查

### 目录

```
$ treer -i "node_modules"
```

```
├─package-lock.json   // 版本锁定
├─package.json        // 项目配置（第三方模块管理）
├─README.md           // 项目介绍 
├─server.js           // 服务器入口文件
├─sql                
|  └index.sql
├─routers            // 路由
|    ├─students.js
|    └users.js
├─public             // 静态文件
|   ├─123.excel
|   ├─favicon.ico
|   ├─index.html
|   ├─login.html
|   ├─register.html
|   ├─js
|   | └index.js
|   ├─css
|   |  └index.css
├─models            // 处理数据 
|   ├─students.js
|   └users.js
├─lib
├─controllers       // 处理业务逻辑
|      ├─students.js
|      └users.js
├─config            // 配置
|   └db.js          // 数据库配置
```

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

>> https://www.runoob.com/http/http-status-codes.html

* 2xx 成功状态码
* 3xx 页面跳转（重定向）
* 4xx 浏览器请求报错 404
* 5xx 服务器报错

### 保持登录状态
http 是无状态的，每次请求是完全独立的，服务器接收了5次请求，无法知道这五次是哪些用户发的，所以维护一个会话（即登录状态），让服务器知道是谁的请求

* session + cookie 
* jwt 

#### session + cookie 
* 用户登录后服务器，将数据存入session中，并创建 sessionId
* sessionId将存入cookie
* 浏览器每次接口访问服务器，都会带上cookie
* 服务器检测 sessionId 鉴别这个接口是哪个用户发的

缺点
* 用户登录信息存在服务器中，如果登录人数过多导致磁盘占满


#### jwt 
* 用户登录后服务器，将数据加密成一串token
* token将存入cookie，或者localStorage中
* 浏览器每次接口访问服务器，都会带上token
* 服务器解析token，得到用户信息 鉴别这个接口是哪个用户发的
