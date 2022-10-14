var express = require('express');
var router = express.Router();
var db = require('../model/index')

/* 查询所有管理员 */
router.get('/getadmin', function (req, res, next) {
    console.log(res.locals)
    let mysql = `SELECT * FROM USER ORDER BY TYPE DESC`
    db(mysql, null, function (err, data) {
        if (err) {
            return res.json({
                code: 500,
                msg: '查询管理员失败，请稍后重试'
            })
        }
        res.json({
            code: 200,
            msg: '查询管理员成功',
            data: data
        })

    })
});

/* 模糊查询寝室 */
router.get('/getsingleadmin', function (req, res, next) {
    let mysql = `SELECT * FROM USER WHERE NAME LIKE ? ORDER BY TYPE DESC`
    console.log('req.query.name', req.query.name);
    let name = '%' + req.query.name + '%'
    db(mysql, [name], function (err, data) {
        console.log('err', err);
        if (err) {
            return res.json({
                code: 500,
                msg: '模糊查询寝室失败，请稍后重试'
            })
        }
        res.json({
            code: 200,
            msg: '模糊查询寝室成功',
            data: data
        })

    })
});

/* 删除某个管理员 */
router.post('/deladmin', function (req, res, next) {
    let mysql = `DELETE FROM user WHERE id = ?`
    console.log('req', req.body)
    db(mysql, [req.body.id], function (err, data) {
        console.log('err', err);
        if (err) {
            return res.json({
                code: 500,
                msg: '删除管理员失败，请稍后重试'
            })
        }
        res.json({
            code: 200,
            msg: '删除该管理员成功',
            data: data
        })

    })
});

/* 修改某个管理员信息 */
router.post('/updateadmin', function (req, res, next) {
    let mysql = `UPDATE  user SET name = ?,password = ?,type = ? WHERE id = ?`
    console.log('req', req.body)
    db(mysql, [req.body.name, req.body.password, req.body.type, req.body.id], function (err, data) {
        console.log('err', err);
        if (err) {
            return res.json({
                code: 500,
                msg: '修改管理员信息失败，请稍后重试'
            })
        }
        res.json({
            code: 200,
            msg: '修改管理员信息成功',
            data: data
        })

    })
});

/* 增加寝室 */
router.post('/addadmin', function (req, res, next) {
    let mysql = `INSERT INTO user VALUE (NULL,?,?,?,?)`
    console.log('req', req.body)
    db(mysql, [req.body.name, req.body.userId, req.body.password, req.body.type], function (err, data) {
        console.log('err', err);
        if (err) {
            return res.json({
                code: 500,
                msg: '添加管理员失败，请稍后重试'
            })
        }
        res.json({
            code: 200,
            msg: '添加管理员成功',
            data: data
        })

    })
});

/* 催款寝室或修改为正常状态 */
router.post('/deptdorm', function (req, res, next) {
    let mysql = `UPDATE  dormlist SET type = ? WHERE id = ?`
    console.log('req', req.body)
    db(mysql, [req.body.type, req.body.id], function (err, data) {
        console.log('err', err);
        if (err) {
            return res.json({
                code: 500,
                msg: '数据库操作失败，请稍后重试'
            })
        }
        res.json({
            code: 200,
            msg: '催款该寝室成功',
            data: data
        })

    })
});



module.exports = router;