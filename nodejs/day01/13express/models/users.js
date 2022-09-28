const query = require("../config/db");
const md = {};

md.getUsers = function (params, callback) {
  const sql = `SELECT * FROM users WHERE name=? AND pwd=?`;

  query(sql, params, function (err, data) {
    callback(err, data);
    // if (err) {
    //   res.json({
    //     code: 0,
    //     message: "数据库错误",
    //   });
    //   return;
    // }
    // if (data.length === 1) {
    //   // ajax 不能直接跳转
    //   // res.redirect("/index.html");
    //   res.json(responseData.onSuccess());
    //   return;
    // }
    // res.json(responseData.onError("账号密码错误"));
  });
};

module.exports = md;
