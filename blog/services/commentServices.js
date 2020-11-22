const Comment = require("../models/comment");




// 添加一条用户留言
exports.addComment = async function (username,usercomment,userimg = "") {
    if(userimg.length < 5) {
        userimg = "https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/blog/newblog/bug1.jpg"
    }
    // const ins = await Comment.build(obj);
    const ins = Comment.build({
        username,
        usercomment,
        userimg
    })
    ins.save().then(() => {
        console.log("haole")
    })
}

// 查询部分用户留言
exports.getComment = async function () {
    // const result = await Comment.findAll({
    //     offset:(page - 1) * limit,
    //     limit:+limit,
    // })
    const result = await Comment.findAll()
    return JSON.stringify(result)
}

// 查询所有用户留言
exports.AllComment = async function () {
    const result = await Comment.findAll()
    return JSON.stringify(result)
}



// let comments_blog = [
//     {
//         userimg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605676395575&di=137b5b1e5e135b50a372ddf20dbc96f4&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F14%2F20181214195858_VrcEZ.thumb.700_0.jpeg",
//         username:"饕餮少女",
//         usercomment:"let声明的变量不会挂载到全局对象"
//     },
//     {
//         userimg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605676428985&di=1fe635c5f06dff3d960eed70ccbf1de8&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201509%2F21%2F20150921223719_TwhBx.jpeg",
//         username:"一夜奈良山",
//         usercomment:"剩余参数专门用于收集末尾的所有参数，将其放置到一个形参数组中"
//     },
//     {
//         userimg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605676446224&di=1a6188f11b6f13a9edf6debdb330d213&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201510%2F22%2F20151022113247_sE3Px.jpeg",
//         username:"独留清风醉",
//         usercomment:"箭头函数没有原型,不能作为构造函数使用"
//     },
//     {
//         userimg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605676460171&di=869d5cbd765b4632e87cab6bc3d46acc&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F16%2F20160916140216_8wndc.png",
//         username:"醉酒鞭名马",
//         usercomment:"Promise并没有消除回调，只是让回调变得可控"
//     },
//     {
//         userimg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605676479525&di=34a2fd4b8c2f210bd478d4a84e6a326b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F23%2F20170823102305_WeA2y.thumb.700_0.jpeg",
//         username:"被风吹过灼思",
//         usercomment:"如果await的表达式不是Promise，则会将其使用Promise.resolve包装后按照规则运行"
//     },
    
// ]