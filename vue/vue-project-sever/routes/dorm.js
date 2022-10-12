var express = require('express');
var router = express.Router();
var db = require('../model/index')

/* 查询所有寝室 */
router.get('/getdorm', function(req, res, next) {
    let mysql = `SELECT dormlist.*,(SELECT COUNT(*) FROM student  WHERE student.stuDormId = dormlist.id ) AS num FROM dormlist AS dormlist`
    db(mysql, null, function(err, data) {
        if (err) {
            return res.json({
                code: 500,
                msg: '数据库操作失败，请稍后重试'
            })
        }
        res.json({
            code: 200,
            msg: '查询寝室及寝室人数成功',
            data: data
        })

    })
});

/* 模糊查询寝室 */
router.get('/getsingledorm', function(req, res, next) {
    let mysql = `SELECT dormlist.*,(SELECT COUNT(*) FROM student 
    WHERE student.stuDormId = dormlist.id ) AS num FROM dormlist AS dormlist
    WHERE dormName LIKE ?`
        // console.log('req.query.dormName', req.query.dormName);
    let dormName = '%' + req.query.dormName + '%'
    db(mysql, [dormName], function(err, data) {
        // console.log('err', err);
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

/* 删除某个寝室 */
router.post('/deldorm', function(req, res, next) {
    let mysql = `DELETE FROM dormlist WHERE id = ?`
        // console.log('req', req.body)
    db(mysql, [req.body.dormId], function(err, data) {
        // console.log('err', err);
        if (err) {
            return res.json({
                code: 500,
                msg: '数据库操作失败，请稍后重试'
            })
        }
        res.json({
            code: 200,
            msg: '删除该寝室成功',
            data: data
        })

    })
});

/* 修改某个寝室信息 */
router.post('/updatedorm', function(req, res, next) {
    let mysql = `UPDATE  dormlist SET dormName = ?,balance = ? WHERE id = ?`
        // console.log('req', req.body)
    db(mysql, [req.body.dormName, req.body.balance, req.body.id], function(err, data) {
        // console.log('err', err);
        if (err) {
            return res.json({
                code: 500,
                msg: '数据库操作失败，请稍后重试'
            })
        }
        res.json({
            code: 200,
            msg: '修改该寝室成功',
            data: data
        })

    })
});

/* 增加寝室 */
router.post('/adddorm', function(req, res, next) {
    let mysql = `INSERT INTO dormlist VALUE (NULL,?,?,?,1)`
        // console.log('req', req.body)
    db(mysql, [req.body.dormId, req.body.dormName, req.body.balance], function(err, data) {
        // console.log('err', err);
        if (err) {
            return res.json({
                code: 500,
                msg: '数据库操作失败，请稍后重试'
            })
        }
        res.json({
            code: 200,
            msg: '添加该寝室成功',
            data: data
        })

    })
});

/* 催款寝室或修改为正常状态 */
router.post('/deptdorm', function(req, res, next) {
    let mysql = `UPDATE  dormlist SET type = ? WHERE id = ?`
        // console.log('req', req.body)
    db(mysql, [req.body.type, req.body.id], function(err, data) {
        // console.log('err', err);
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