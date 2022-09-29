const modelsStudents = require("../models/students");
const md = {};

md.getAll = function (callback) {
  modelsStudents.getAll(function (err, data) {
    if (err) {
      callback({
        code: 500,
        message: "数据库错误",
      });
      return;
    }
    callback({
      code: 200,
      message: "查询成功",
      data,
    });
  });
};

md.add = function (params, callback) {
  modelsStudents.add(params, function (err, data) {
    if (err) {
      console.log(err);
      callback({
        code: 500,
        message: "数据库错误",
      });
      return;
    }
    callback({
      code: 200,
      message: "添加成功",
    });
  });
};

md.delete = function (params, callback) {
  modelsStudents.delete(params, function (err, data) {
    if (err) {
      console.log(err);
      callback({
        code: 500,
        message: "数据库错误",
      });
      return;
    }
    callback({
      code: 200,
      message: "删除成功",
    });
  });
};

md.searchByName = function (params, callback) {
  modelsStudents.getAllBySearchName(params, function (err, data) {
    if (err) {
      console.log(err);
      callback({
        code: 500,
        message: "数据库错误",
      });
      return;
    }
    callback({
      code: 200,
      message: "搜索成功",
      data,
    });
  });
};

md.update = function (params, callback) {
  modelsStudents.update(params, function (err, data) {
    if (err) {
      console.log(err);
      callback({
        code: 500,
        message: "数据库错误",
      });
      return;
    }
    callback({
      code: 200,
      message: "更新成功",
    });
  });
};

module.exports = md;
