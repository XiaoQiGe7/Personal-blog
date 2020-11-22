const express= require("express");
const app = express()
const Content = require("./services/contentServices")
const Comment = require("./services/commentServices")
const Muisc = require("./services/musicServices")
const Article = require("./services/articleServices")
const Count = require("./services/countServices")

// require("./models/sync")     //同步模块
app.use(express.static("./dist"))   //挂载

// 跨域设置
app.all("*", function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

    res.header("X-Powered-By", " 3.2.1")

    res.header("Content-Type", "application/json;charset=utf-8");

    next();

});
// 接口
app.get("/Count",(req,res) => {
    Count.count().then((r) => {
        res.send(r)
    })
}) 
app.get("/article",(req,res) => {
    let id = req.query.id
    Article.getArticle(id).then((r) => {
            res.send(r)
    })
})
app.get("/comment",(req,res) => {
    // 返回留言
    Comment.AllComment().then((r) => {
        res.send(r)
    })
})
app.get("/publish",(req,res) => {
    Comment.addComment(req.query.username,req.query.usercomment,req.query.userimg)
})
app.get("/Content",(req,res) => {
    // 主页内容
    Content.getContent(req.query.page,req.query.limit).then((r) => {
        res.send(r)
    })
})
app.get("/Read",(req,res) => {
    Content.upContentRead(req.query.id)
})
app.get("/Fabulous",(req,res) => {
    Content.upContentFabulous(req.query.id)
})
app.get("/Music",(req,res) => {
    Muisc.getMusic().then((r) => {
        res.send(r)
    })
})

// 启动服务器
app.listen(3000)

// 插入多条数据
// const con = require("./models/imgs")
// con.count()

// con.bulkCreate(imgs)

// 插入单条数据
// const ins = con.build({
//     title,
//     content
// })
// ins.save().then(() => {
//     console.log("haole")
// })