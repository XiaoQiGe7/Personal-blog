const Music = require("../models/music");

// 添加
exports.addMusic = async function (obj) {
    const ins = await Music.create(obj);
    return ins.toJSON()
}

// 查询所有的数据
exports.getMusic = async function () {
    const result = await Music.findAll()
    return JSON.stringify(result)
}

