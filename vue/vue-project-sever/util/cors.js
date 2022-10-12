var express = require('express');
var router = express.Router();

router.all('*', function (req, res, next) {
    /* 设置响应头，允许所有网站都可以请求 */
    res.header('Access-Control-Allow-Origin', '*');
    /* 设置我们的请求方式可以有以下这些 */
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,OPTIONS');
    /* 设置响应头可以有以下这些 */
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With,token');
    /* 放行 */
    req.method === 'OPTIONS' ? res.status(204).end() : next();
});

module.exports = router;