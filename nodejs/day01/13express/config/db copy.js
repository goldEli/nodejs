let mysql = require("mysql")

let config = {
  connectionLimit: 10, // 最大连接数，默认为10
  host: "localhost", // 数据库地址
  port: 3306, // 数据库端口号
  user: "root", // 账号
  password: "123456", // 密码
  database: "w274", // 要连接的数据库名字
}

// 创建连接池
let pool = mysql.createPool(config)

// 数据库操作是异步
const query = (sql, param = null) => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        return reject({
          msg: "数据库连接失败：",
          err,
        })
      }

      // 操作数据库
      connection.query(sql, param, function (error, doc) {
        connection.release() // 释放连接池
        if (error) {
          return reject({
            msg: "操作数据库失败处理：",
            err: error,
          })
        }
        // 操作成功
        resolve(doc)
      })
    })
  })
}

module.exports = query
