const modelsUsers = require("../models/users");
const responseData = require("../lib/responseData");
const md = {};

md.login = function (params, callback) {
  modelsUsers.getUsersByNameAndPwd(params, function (err, data) {
    if (data.length === 1) {
      callback(responseData.onSuccess());
      return;
    }
    callback(responseData.onError("账号密码错误"));
  });
};

md.register = function (params, callback) {
  modelsUsers.addUsers(params, function (err, data) {
    if (err && err.errno === 1062) {
      callback(responseData.onError("用户名已存在"));
      return;
    }
    if (err) {
      callback(responseData.onError("注册失败"));
      return;
    }
    callback(responseData.onSuccess(data, "注册成功"));
  });
};

module.exports = md;
