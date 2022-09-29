const modelsUsers = require("../models/users");
const md = {};

md.login = function (params, callback) {
  modelsUsers.getUsersByNameAndPwd(params, function (err, data) {
    if (data.length === 1) {
      callback({
        code: 200,
        message: "登录成功",
      });
      return;
    }
    callback({
      code: 400,
      message: "账号密码错误",
    });
  });
};

md.register = function (params, callback) {
  modelsUsers.add(params, function (err, data) {
    if (err && err.errno === 1062) {
      callback({
        code: 400,
        message: "账号已存在",
      });
      return;
    }
    if (err) {
      callback({
        code: 500,
        message: "注册失败",
      });

      return;
    }
    callback({
      code: 500,
      data,
      message: "注册成功",
    });
  });
};

module.exports = md;
