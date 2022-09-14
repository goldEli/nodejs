var express = require('express');
var router = express.Router();

/**
四种请求方式
get    获取信息 获取列表
post   添加信息 新增
delete 删除信息
update 更新信息
*/

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
