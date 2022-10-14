var express = require('express');
var router = express.Router();
var db = require('../model/index')

/* 查询所有公告 */
router.get('/getnotice', function(req, res, next) {
    let mysql = `SELECT notice.*,user.name,DATE_FORMAT(time, '%Y-%c-%d %H:%i:%s') AS mytime FROM notice
    JOIN USER ON notice.userId = user.id`
    db(mysql, null, function(err, data) {
        if (err) {
            return res.json({
                code: 500,
                msg: '查询公告失败，请稍后重试'
            })
        }
        res.json({
            code: 200,
            msg: '查询公告成功',
            data: data
        })

    })
});

/* 模糊查询公告 */
router.get('/getsinglenotice', function(req, res, next) {
    let mysql = `SELECT notice.*,user.name,DATE_FORMAT(time, '%Y-%c-%d %H:%i:%s') AS mytime FROM notice
    JOIN USER ON notice.userId = user.id
    WHERE title LIKE ?`
        // console.log('req.query.dormName', req.query.title);
    let title = '%' + req.query.title + '%'
    db(mysql, [title], function(err, data) {
        // console.log('err', err);
        if (err) {
            return res.json({
                code: 500,
                msg: '模糊查询学生失败，请稍后重试'
            })
        }
        res.json({
            code: 200,
            msg: '模糊查询学生成功',
            data: data
        })

    })
});

/* 删除某条公告 */
router.post('/delnotice', function(req, res, next) {
    let mysql = `DELETE FROM notice WHERE id = ?`
        // console.log('req', req.body)
    db(mysql, [req.body.id], function(err, data) {
        // console.log('err', err);
        if (err) {
            return res.json({
                code: 500,
                msg: '删除公告失败，请稍后重试'
            })
        }
        res.json({
            code: 200,
            msg: '删除公告成功',
            data: data
        })

    })
});

/* 修改公告 */
router.post('/updatenotice', function(req, res, next) {
    let mysql = `UPDATE notice SET title = ?,content = ? WHERE id = ?`
        // console.log('req', req.body)
    db(mysql, [req.body.title, req.body.content, req.body.id], function(err, data) {
        // console.log('err', err);
        if (err) {
            return res.json({
                code: 500,
                msg: '修改公告失败，请稍后重试'
            })
        }
        res.json({
            code: 200,
            msg: '修改公告成功',
            data: data
        })

    })
});

/* 增加公告 */
router.post('/addnotice', function(req, res, next) {
    let mysql = `INSERT INTO notice VALUE (NULL,?,NOW(),?,?)`
        // console.log('req', req.body)
    db(mysql, [req.body.title, req.body.userId, req.body.content], function(err, data) {
         console.log('添加公告', err);
        if (err) {
            return res.json({
                code: 500,
                msg: '添加公告失败，请稍后重试'
            })
        }
        res.json({
            code: 200,
            msg: '添加公告成功',
            data: data
        })

    })
});




module.exports = router;