const express = require("express");
const router = express.Router();
const controllersUsers = require("../controllers/users");

// 登录
router.post("/login", function (req, res) {
  const name = req.body.name;
  const pwd = req.body.pwd;

  controllersUsers.login([name, pwd], function (data) {
    if (data.code === 200) {
      req.session.username = name;
    }
    res.send(data);
  });
});

// 注册
router.post("/register", function (req, res) {
  const name = req.body.name;
  const pwd = req.body.pwd;

  controllersUsers.register([name, pwd], function (data) {
    res.send(data);
  });
});

// 退出登录

router.get("/logout", function (req, res) {
  //删除Cookie
  req.session.username = null;
  //回到/login路由
  res.redirect("/login.html");
});

router.get("/username", function (req, res) {
  res.send({
    code: 200,
    data: req.session.username,
  });
});

module.exports = router;
