const express = require("express");
const router = express.Router();
const query = require("../config/db");

// 获取用户列表
router.get("/", function (req, res) {
  res.json({
    code: 0,
    message: "查询成功",
    data: [
      { id: 1, name: "张三", pwd: "123" },
      { id: 2, name: "李四", pwd: "123" },
    ],
  });
});
// 增加一个新用户
router.get("/new", function (req, res) {
  const name = req.query.name;
  const pwd = req.query.pwd;
  console.log(name, pwd);

  // 存入数据库，让后告诉前端同学 成功了

  res.json({
    code: 1,
    message: "添加成功",
  });
});

// 登录
router.get("/login", function (req, res) {
  const name = req.query.name;
  const pwd = req.query.pwd;
  const sql = `SELECT * FROM users WHERE name=? AND pwd=?`;

  query(sql, [name, pwd], function (err, data) {
    if (err) {
      res.json({
        code: 0,
        message: "数据库错误",
      });
      return;
    }
    if (data.length === 1) {
      res.redirect("/index.html");
    } else {
      res.json({
        code: 0,
        message: "账号密码错误",
      });
    }
  });
});

module.exports = router;
