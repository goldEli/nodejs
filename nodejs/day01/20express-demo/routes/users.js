var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  const reqStr = JSON.stringify([
    {name:"张三", age: "32"},
    {name:"李四", age: "55"},
  ])
  res.send(reqStr);
});

module.exports = router;
