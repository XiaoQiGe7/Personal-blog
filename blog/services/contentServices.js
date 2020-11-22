const Content = require("../models/content")
const Imgs = require("../models/imgs")

// 修改数据
exports.upContentRead = async function (id) {
    const ins = await Content.findByPk(id)
    ins.read++
    ins.save()
}
exports.upContentFabulous = async function (id) {
    const ins = await Content.findByPk(id)
    ins.Fabulous++
    ins.save()
}

// 添加数据
exports.addContent = async function (obj) {
    const { title,content,comment,read,Fabulous} = obj
    const ins = Content.build({
        title,
        content,
        comment,
        read,
        Fabulous,
        imgurl:""
    })
}

// 查询所有
exports.getContent = async function () {
    
    // const result = await Content.findAll({
    //     offset:(page - 1) * limit,
    //     limit: +limit
    // })
    const result = await Content.findAll()
    const data = JSON.parse(JSON.stringify(result));

    // 往卡片里每一项加入随机的背景图片
    for(let i = 0;i < data.length;i ++) {
        let id = Math.floor(Math.random() * 100) + 103
        let img = await Imgs.findByPk(id)
        let item = JSON.parse(JSON.stringify(img))
        data[i].imgurl = item.imgurl
    }
    return data

}

