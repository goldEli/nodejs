// 安装后 引入 express
const express = require("express");
// nodejs 自带的库 不用安装
const path = require("path");
const app = express();
const favicon = require("serve-favicon");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");


const usersRouter = require("./routers/users");
const studentsRouter = require("./routers/students");

/**
为 express 添加中间件
为框架添加能力
*/
app.use(morgan("dev"));

// 设置cookie session
app.use(
  cookieSession({
    secret: "123",
    maxAge: 24 * 60 * 60 * 1000, //有效时间为24小时
  })
);

// 路由拦截
app.use(function (req, res, next) {
  var url = req.url;
  console.log(req.session.username);
  // 登录注册不拦截的路由
  if (
    !url.includes("login") &&
    !url.includes("register") &&
    !req.session.username
  ) {
    res.redirect("/login.html");
    return;
  }
  //如果登录过，我们就执行下一个中间件
  next();
});

//使用图标模块
app.use(favicon(path.join(__dirname, "/public/favicon.ico"))); // __dirname 指当前文件夹的根目录

// 为post 解析参数
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

// 路由
app.use("/users", usersRouter);
app.use("/students", studentsRouter);
// 文件服务器, 浏览器可以访问该文件夹内容
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

// 监听8888端口
app.listen(8888, () => {
  console.log("服务启动！")
});
