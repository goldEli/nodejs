## 聊天室

### websocket

> https://www.ruanyifeng.com/blog/2017/05/websocket.html

与服务器通信有两种方式
* http
* websocket

http 有个缺陷，只能由客户端发起，对实时数据很不友好，比如页面展示今天多少度（定时每秒请求数据）

websocket好处就是，服务器也可以主动向浏览器发信息

### Setup

初始化项目

```
npm init -y
```

安装依赖

```
npm install express socket.io
```

### note

#### socket.emit

socket.emit 信息传输对象为当前 socket 对应的 client ，各个client socket 相互不影响。

#### socket.broadcast.emit
socket.broadcast.emit 信息传输对象为所有 client ，排除当前socket 对应的 client 。
#### io.sockets.emit
信息传输对象为所有 client 。




