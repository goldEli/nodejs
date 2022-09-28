const express = require("express");
const router = express.Router();

// 获取用户列表
router.get("/", function (req, res) {
  res.json({
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
    message: "添加成功",
  });
});

module.exports = router;
