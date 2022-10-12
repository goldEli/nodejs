var express = require('express');
var router = express.Router();
var db = require('../model/index')

/* 查询所有学生 */
router.get('/getstudent', function(req, res, next) {
    let mysql = `SELECT student.*,dormlist.dormId,dormlist.dormName,dormlist.type,dormlist.balance 
    FROM student JOIN dormlist ON student.stuDormId = dormlist.id`
    db(mysql, null, function(err, data) {
        if (err) {
            return res.json({
                code: 500,
                msg: '查询学生失败，请稍后重试'
            })
        }
        res.json({
            code: 200,
            msg: '查询学生成功',
            data: data
        })

    })
});

/* 查询学生缴费记录 */
router.get('/getstudentpayment', function(req, res, next) {
    let mysql = `SELECT *,DATE_FORMAT(time, '%Y-%c-%d %H:%i:%s') AS mytime FROM payment WHERE stuId = ?`
    db(mysql, [req.query.id], function(err, data) {
        if (err) {
            return res.json({
                code: 500,
                msg: '查询学生缴费记录失败，请稍后重试'
            })
        }
        res.json({
            code: 200,
            msg: '查询学生缴费记录成功',
            data: data
        })

    })
});

/* 模糊查询学生 */
router.get('/getsinglestudent', function(req, res, next) {
    let mysql = `SELECT student.*,dormlist.dormId,dormlist.dormName,dormlist.type,dormlist.balance 
    FROM student JOIN dormlist ON student.stuDormId = dormlist.id
    WHERE stuName LIKE ?`
        // console.log('req.query.dormName', req.query.stuName);
    let stuName = '%' + req.query.stuName + '%'
    db(mysql, [stuName], function(err, data) {
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

/* 删除某个学生 */
router.post('/delstudent', function(req, res, next) {
    let mysql = `DELETE FROM student WHERE id = ?`
        // console.log('req', req.body)
    db(mysql, [req.body.id], function(err, data) {
        // console.log('err', err);
        if (err) {
            return res.json({
                code: 500,
                msg: '删除学生失败，请稍后重试'
            })
        }
        res.json({
            code: 200,
            msg: '删除学生成功',
            data: data
        })

    })
});

/* 修改某个学生信息 */
router.post('/updatestudent', function(req, res, next) {
    let mysql = `UPDATE student SET stuName = ?,stuPas = ?,stuDormId = ? WHERE id = ?`
        // console.log('req', req.body)
    db(mysql, [req.body.stuName, req.body.stuPas, req.body.stuDormId, req.body.id], function(err, data) {
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

/* 增加学生 */
router.post('/addstudent', function(req, res, next) {
    let mysql = `INSERT INTO student VALUE (NULL,?,?,?,?,?)`
        // console.log('req', req.body)
    db(mysql, [req.body.stuId, req.body.stuName, req.body.stuUserId, req.body.stuDormId, req.body.stuPas], function(err, data) {
        // console.log('err', err);
        if (err) {
            return res.json({
                code: 500,
                msg: '增加学生失败，请稍后重试'
            })
        }
        res.json({
            code: 200,
            msg: '添加学生成功',
            data: data
        })

    })
});

/* 学生充值 */
router.post('/topup', function(req, res, next) {
    let mysql1 = `INSERT INTO payment VALUE (NULL,?,?,NOW())`
    let mysql2 = `SELECT * FROM student WHERE id = ?`
    let mysql3 = `UPDATE  dormlist  SET  balance = balance + ?  WHERE  id = ? `
        // console.log('req', req.body)
    new Promise((resolve, reject) => {
        //先向缴费记录里添加数据
        db(mysql1, [req.body.money, req.body.stuId], function(err, data) {
            // console.log('err', err);
            if (err) {
                return res.json({
                    code: 500,
                    msg: '充值失败，请稍后重试'
                })
            }
            resolve()
        })
    }).then(() => {
        return new Promise((resolve, reject) => {
            db(mysql2, [req.body.stuId], function(err, data) {
                // console.log('err', err);
                if (err) {
                    return res.json({
                        code: 500,
                        msg: '充值失败，请稍后重试'
                    })
                }
                resolve(data)
            })
        })
    }).then((data) => {
        console.log('data', data[0].stuDormId);
        db(mysql3, [req.body.money, data[0].stuDormId], function(err, data) {
            // console.log('err', err);
            if (err) {
                return res.json({
                    code: 500,
                    msg: '充值失败，请稍后重试'
                })
            }
            res.json({
                code: 200,
                msg: '充值成功',
                data: data
            })
        })
    })

});


module.exports = router;