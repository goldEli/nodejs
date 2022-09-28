// 安装后 引入 express
const express = require("express");
// nodejs 自带的库 不用安装
const path = require("path");
const app = express();
const favicon = require("serve-favicon");

const usersRouter = require("./routers/users");

/* 
    req 请求对象
    res 响应对象
*/
app.get("/", function (req, res) {
  // 响应浏览器一个字符串
  //   res.send("hello world");
  // 发送前端的html文件

  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// 下载
// 不同的路由接口 访问不同的接口
app.get("/download", function (req, res) {
  // 下载文件
  const dir = path.join(__dirname, "/public/123.excel");
  console.log(__dirname, dir);
  res.sendFile(dir);
});

// 增加中间件, 扩充express能力

app.use("/users", usersRouter);
// tab页增加小图标
app.use(favicon(path.join(__dirname, "/public/favicon.ico"))); // __dirname 指当前文件夹的根目录


// 监听8888端口
app.listen(8888);
