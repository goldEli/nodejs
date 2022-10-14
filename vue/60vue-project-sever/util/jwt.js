var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var db = require('../model/index')

router.all('*', function (req, res, next) {
    console.log('进来开始验证了')
    //看是不是登录页面过来的
    if (req.url.startsWith('/login/getuser')) {
        console.log('登录接口')
        next();
        return;
    }
    //
    const token = req.headers.token;
    //判断前端有没有传token
    if (!token) {
        console.log('没有传token')
        res.status(401).send({ error: '请发送token' }).end();
        return;
    }
    //解密token
    jwt.verify(token, 'web281', (err, decoded) => {
        if (err) {
            console.log('解密失效')
            res.status(401).send({ msg: 'token无效' }).end()
            return;
        }
        console.log(decoded)
        //判断是否过期
        let total = new Date(decoded.exp * 1000) - Date.now();//还有多少毫秒
        if (total < 0) {
            //已经过期
            console.log('过期了')
            res.status(401).send({ msg: 'token过期' }).end();
            return;
        }
        let sql;
        if (decoded.data.stuId) {
            //学生
            sql = 'select * from student where id=' + decoded.data.stuId + ';';
        } else {
            //管理员
            sql = 'select * from user where id=' + decoded.data.id + ';';
        }
        db(sql, {}, (err, data) => {
            if (err) {
                console.log('数据库错误', err)
                //秘钥已经过期了
                res.status(401).send({ msg: 'token无效' }).end()
            } else {
                if (data.length) {
                    console.log('有用户')
                    //有这个用户
                    if (total < 1000 * 60) {
                        console.log('快过期了')
                        res.locals.tok = '快过期了';
                    }
                    next();
                } else {
                    console.log('没用户')
                    //没有这个用户
                    res.status(401).send({ msg: 'token无效' }).end()
                }

            }
        })
    });
})
module.exports = router;