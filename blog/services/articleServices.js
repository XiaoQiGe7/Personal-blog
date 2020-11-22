const article = require("../models/article")


// 更新
exports.upArticle = async function (obj) {
    const ins = await article.create(obj);
    return ins.toJSON()
}

// 添加一条文章数据
exports.addArticle = async function (title,content) {
    const ins = article.build({
        title,
        content,
    })
    ins.save()
}

// 根据id查找数据
exports.getArticle = async function (id) {
    const result = await article.findByPk(id)
    return result
}

// 拿取第一条数据
exports.oneArticle = async function (data) {
    const result = await article.findOne({title:data})
    return result
}