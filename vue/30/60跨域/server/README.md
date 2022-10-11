# server

```
npm install body-parser cookie-parser express morgan
```

```
const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");

app.use(morgan("dev"));

// 设置cookie session
app.use(
  cookieSession({
    secret: "123",
    maxAge: 24 * 60 * 60 * 1000, //有效时间为24小时
  })
);

// 为post 解析参数
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

// 文件服务器, 浏览器可以访问该文件夹内容
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.send("hello world");
});

// 监听8888端口
app.listen(8888, () => {
  console.log("服务启动！")
});

```