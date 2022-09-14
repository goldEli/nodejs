var express = require("express");
var router = express.Router();

/**
四种请求方式
get    获取信息 获取列表
post   提交信息 新增
delete 删除信息
update 更新信息
*/

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

/**
用户登录
http://localhost:8888/users/login?user=zhangxin&password=123
*/
// router.get("/login", function (req, res, next) {
//   // 接收数据 在与数据库中的数据进行对比
//   console.log(req.query);
//   // 返回数据
//   res.send({ data: "登录成功" });
// });

router.post("/login", function (req, res, next) {
  // 接收数据 在与数据库中的数据进行对比
  console.log(req.body);
  // 返回数据
  res.send({ data: "登录成功" });
});
module.exports = router;
