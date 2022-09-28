const express = require("express");
const router = express.Router();
const query = require("../config/db");
const responseData = require("../lib/responseData");
const controllersUsers = require("../controllers/users");

// 登录
router.post("/login", function (req, res) {
  const name = req.body.name;
  const pwd = req.body.pwd;

  controllersUsers.login([name, pwd], function (data) {
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

module.exports = router;
