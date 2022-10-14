var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var db = require('./model/index')

var adminRouter = require('./routes/admin');
var dormRouter = require('./routes/dorm');
var noticeRouter = require('./routes/notice');
var studentRouter = require('./routes/student');
var loginRouter = require('./routes/login');
var cors = require('./util/cors');
var jwt = require('./util/jwt');

var app = express();

/* CORS  解决跨域问题 */
app.use(cors);
/*jwt */
app.use(jwt);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use('/dorm', dormRouter);
app.use('/notice', noticeRouter);
app.use('/student', studentRouter);
app.use('/login', loginRouter);

// app.get('/test1', function (req, res) {
//     res.send({ msg: 111 });
// })
// app.get('/test2', function (req, res) {
//     res.send({ msg: 222 });
// })
// app.get('/test3', function (req, res) {
//     res.send({ msg: 333 });
// })
// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;