const Acticles = require("../models/article")
const Comment = require("../models/comment")


// 查询文章，日记，留言总数
exports.count = async function () {
    const acticles = await Acticles.count()
    const comments = await Comment.count()

    return {
        acticles,
        comments
    }
}