// 1. express 创建服务
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);


// 2. 静态文件夹，用于访问
app.use("/", express.static(__dirname + "/public"));


server.listen(3000, () => {
  console.log("listening on *:3000");
});
