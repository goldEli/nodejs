const express = require("express");
const router = express.Router();
const controllersUsers = require("../controllers/users");

// 登录
router.post("/login", function (req, res) {
  const name = req.body.name;
  const pwd = req.body.pwd;

  controllersUsers.login([name, pwd], function (data) {
    if (data.code === 1) {
      //设置cookie ,其中maxAge是为cookie设置一个生命周期60000000ms后会失效，即需要重新登录
      res.cookie("user", name, {
        maxAge: 60000000,
        httpOnly: false,
        // signed: true,
      });
    }
    res.json(data);
  });
});

// 注册
router.post("/register", function (req, res) {
  const name = req.body.name;
  const pwd = req.body.pwd;

  controllersUsers.register([name, pwd], function (data) {
    res.json(data);
  });
});

// 退出登录

router.get("/logout", function (req, res) {
  //删除Cookie
  res.clearCookie("user");
  //回到/login路由
  res.redirect("/login.html");
});

module.exports = router;
