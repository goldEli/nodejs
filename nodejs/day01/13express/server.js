// 安装后 引入 express
const express = require("express");
// nodejs 自带的库 不用安装
const path = require("path");
const app = express();

const usersRouter = require("./routers/users")

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

app.use("/users", usersRouter)

// 获取用户列表
// app.get("/users", function (req, res) {
//   res.json({
//     message: "查询成功",
//     data: [
//       { id: 1, name: "张三", pwd: "123" },
//       { id: 2, name: "李四", pwd: "123" },
//     ],
//   });
// });
// 增加一个新用户
// app.get("/users/new", function (req, res) {
//   const name = req.query.name;
//   const pwd = req.query.pwd;
//   console.log(name, pwd);

//   // 存入数据库，让后告诉前端同学 成功了

//   res.json({
//     message: "添加成功",
//   });
// });

// 监听8888端口
app.listen(8888);
