const query = require("../config/db");
const md = {};

md.getAll = function (callback) {
  const sql = `SELECT * FROM students`;
  query(sql, null, function (err, data) {
    callback(err, data);
  });
};

md.getAllBySearchName = function (params, callback) {
  const sql = `SELECT * FROM students WHERE name like ?`;
  query(sql, [`%${params.searchName}%`], function (err, data) {
    console.log(data)
    callback(err, data);
  });
};

md.add = function (params, callback) {
  const sql = `INSERT INTO students (name, age) VALUES (?, ?)`;
  query(sql, [params.name, params.age], function (err, data) {
    callback(err, data);
  });
};

md.delete = function (params, callback) {
  const sql = `DELETE FROM students WHERE id=?`;
  query(sql, [params.id], function (err, data) {
    callback(err, data);
  });
};

md.update = function (params, callback) {
  const sql = `UPDATE students SET name=?, age=? WHERE id=?`;
  query(sql, [params.name, params.age, params.id], function (err, data) {
    callback(err, data);
  });
};

module.exports = md;
