var express = require('express');
var router = express.Router();
var db = require('../model/index')
var jwt = require('jsonwebtoken');
/* 查询所有管理员 */
router.get('/getuser', function (req, res, next) {
    // console.log('req.query', req.query);
    let mysql = ''
    if (req.query.type === '学生') {
        mysql = `SELECT student.*,dormlist.type as dormType FROM student 
        JOIN dormlist ON student.stuDormId = dormlist.id
        WHERE stuUserId = ? AND stuPas = ?`
    } else if (req.query.type === '管理员') {
        mysql = `SELECT * FROM user WHERE userId = ? AND password = ?`
    }
    db(mysql, [req.query.username, req.query.password], function (err, data) {

        console.log('err', err);
        if (err) {
            return res.json({
                code: 500,
                msg: '服务器报错，请稍后重试'
            })
        }
        console.log('data', data);
        let power = [];
        let msg = '';
        if (data.length === 0) {
            return res.json({
                code: 500,
                msg: '账号密码错误'
            })
        }
        if (data[0].stuId) {
            //学生
            msg = '查询学生成功';
            power = [
                {
                    title: '公告主页',
                    link: '/home/noticehome'
                },
                {
                    title: '宿舍管理',
                    link: '/home/dorm'
                }
            ]
        } else {
            //管理员
            msg = '查询管理员成功';
            power = [
                {
                    title: '公告主页',
                    link: '/home/noticehome'
                },
                {
                    title: '宿舍管理',
                    link: '/home/dorm'
                },
                {
                    title: '学生管理',
                    link: '/home/student'
                },
                {
                    title: '公告管理',
                    link: '/home/notice'
                }
            ]
            if (data[0].type == 2) {
                //超级管理员
                power.push({
                    title: '管理员管理',
                    link: '/home/admin'
                })
            }
        }
        res.json({
            code: 200,
            msg,
            power,
            data,
            token: jwt.sign({ data: data[0] }, 'web281', { expiresIn: '2min' })
        })
        //jwt.sign(签名的内容,秘钥,有效时间) 
        //签名的内容 必须是json对象，第二必须只有一个键值对
        //签名的内容：加密的内容，一定要和登录的人有关系
    })
});

module.exports = router;