const query = require("../config/db");
const md = {};

md.getUsersByNameAndPwd = function (params, callback) {
  const sql = `SELECT * FROM users WHERE name=? AND pwd=?`;
  query(sql, params, function (err, data) {
    callback(err, data);
  });
};


md.add = function (params, callback) {
  const sql = `INSERT INTO users (name, pwd) VALUES (?, ?)`;
  query(sql, params, function (err, data) {
    callback(err, data);
  });
};


module.exports = md;
