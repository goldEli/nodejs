// 安装后 引入 express
const express = require("express");

const app = express();

/* 
    req 请求对象
    res 响应对象
*/
app.get("/", function (req, res) {
  // 响应浏览器一个字符串
  res.send("hello world");
});
app.get("/download", function (req, res) {
  // 下载文件 
  res.sendFile("/public/123.txt");
});

// 监听8888端口
app.listen(8888);
