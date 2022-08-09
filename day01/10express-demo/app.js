var express = require('express');
// 处理路径
var path = require('path');
// 解析cookie
var cookieParser = require('cookie-parser');
// 日志
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 创建静态服务器，比如一些静态文件 图片
app.use(express.static(path.join(__dirname, 'public')));

// 路由控制，不同的url，调用不同的路由处理
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
