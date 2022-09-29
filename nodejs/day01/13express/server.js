// 安装后 引入 express
const express = require("express");
// nodejs 自带的库 不用安装
const path = require("path");
const app = express();
const favicon = require("serve-favicon");
// log
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const usersRouter = require("./routers/users");

// 增加中间件, 扩充express能力
app.use(morgan("dev"));
app.use(cookieParser());

//  检测是否登录
app.use(function (req, res, next) {
  var url = req.url;
  console.log(req)
  // 登录注册不拦截的路由
  if (
    !url.includes("login") &&
    !url.includes("register") &&
    // !req.signedCookies.user
    !req.cookies.user
  ) {
    res.redirect("/login.html");
    return;
  }
  //如果登录过，我们就执行下一个中间件
  next();
});
// app.use(cookieParser("123"))
// tab页增加小图标
app.use(favicon(path.join(__dirname, "/public/favicon.ico"))); // __dirname 指当前文件夹的根目录
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);
app.use("/users", usersRouter);
// 文件服务器
app.use(express.static("public"));

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
// app.get("/download", function (req, res) {
//   // 下载文件
//   const dir = path.join(__dirname, "/public/123.excel");
//   console.log(__dirname, dir);
//   res.sendFile(dir);
// });

// 监听8888端口
app.listen(8888);
