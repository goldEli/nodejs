let mysql = require('mysql') /* 引入模块 */

function db(sql, options, callback) {
    let myserver = mysql.createConnection({
        host: 'localhost',
        /* 数据库地址 */
        user: 'root',
        password: '123456',
        database: 'dorm',
        /* 连接的数据库名 */
        port: 3306 /* 端口号 */
    })

    myserver.connect() /* 打开数据库连接 */

    myserver.query(sql, options, callback);

    myserver.end(); /* 关闭数据库连接 */
}

module.exports = db