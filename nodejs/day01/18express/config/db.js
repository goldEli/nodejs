/**
配置数据库
*/
const mysql = require("mysql");

// 与数据库创建链接
const db = mysql.createConnection({
  host: "localhost", // 地址
  port: "3306", // 数据库端口
  user: "root",
  password: "123456",
  database: "w310",
});

function query(sql, callback, params = []) {
  db.connect(); //打开连接
  db.query(sql, params, (err, data) => {
    //err 错误信息
    //data 查询结果，返回[]
    callback(err, data);
  });
  db.end();
}

module.exports = query;
