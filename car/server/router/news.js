const express = require('express')
const pool = require('../pool')
// 创建路由
let router = express.Router()

//新闻资讯列表
// http://localhost:3001/news/list
router.get("/list", (req, res, next) => {
    var obj = req.query;
    //判断各项是否为空
    if (!obj.pno) {
        obj.pno = 1;
    }
    if (!obj.count) {
        obj.count = 5;
    }
    //计算每页开始查询的值
    var start = (obj.pno - 1) * obj.count;
    //将每页数据量转为数字
    var size = parseInt(obj.count);
    // console.log(obj, start, size);
    //执行sql命令，分页查询   查询总数据量
    let sql = `select * from car_news limit ${start},${size};select count(*) as sum from car_news`
    pool.query(sql, (err, r) => {
        if (err) {
            return next(err);
        }
        // console.log(sql);
        //总数据量
        var t = r[1][0].sum;
        var pno = parseInt(obj.pno);
        // console.log(t);
        //计算总页数=总数据量/每页显示数据量,结果向上取整
        var p = Math.ceil(t / obj.count);
        res.send({
            code: 200,
            msg: "新闻资讯列表",
            data: r[0], //查询到的数据
            total: t, //总数据量
            pages: p, //总页数
            pno: pno, //第几页
            pagisize: size,//每页多少条
        });
    }
    );
});


//新闻资讯详情
// http://localhost:3001/news/deta
router.get('/deta', (req, res, next) => {
    var obj = req.query
    pool.query('select * from car_news where nid=?', [obj.nid], (err, r) => {
        if (err) {
            return next(err)
        }
        res.send({ code: 200, msg: "新闻咨询详情", data: r });
    })
})

//  新闻咨询主页展示
// http://localhost:3001/news/home
router.get('/home', (req, res, next) => {
    // var obj = req.query
    pool.query('select nid,title,ntime,text from car_news ', (err, r) => {
        if (err) {
            return next(err)
        }
        res.send({ code: 200, msg: "新闻咨询主页", data: r });
    })
})
// 新闻搜索
//  http://localhost:3001/news/search
router.get('/search', (req, res, next) => {
    var obj = req.query
    pool.query('select * from car_news where title like ?', [`%${obj.keyword}%`], (err, r) => {
        if (err) {
            return next(err)
        }
        res.send({ code: 200, msg: "模糊查询结果", data: r });
    })
})
module.exports = router