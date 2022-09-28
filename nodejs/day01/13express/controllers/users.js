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
  const name = [params[0]];
  modelsUsers.getUsersByName([name], function (err, data) {
    if (data.length === 1) {
      callback(responseData.onError("账号已存在"));
      return;
    }

    modelsUsers.addUsers(params, function (err, data) {
      callback(responseData.onSuccess(data, "注册成功"));
    });
  });
};

module.exports = md;
