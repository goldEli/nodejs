const modelsUsers = require("../models/users");
const responseData = require("../lib/responseData");
const md = {};

md.login = function (params, callback) {
  modelsUsers.getUsers(params, function (err, data) {
    if (err) {
      callback(responseData.onError("数据库错误"));
      return;
    }
    if (data.length === 1) {
      callback(responseData.onSuccess());
      return;
    }
    callback(responseData.onError("账号密码错误"));
  });
};

module.exports = md;
