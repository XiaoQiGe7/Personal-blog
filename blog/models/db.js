const { Sequelize } = require("sequelize")

// 建立数据库链接
const sequelize = new Sequelize('new_blog',"root","hugg1867780",{
    // 数据库地址
    host:'localhost',
    // mysql数据库
    dialect:'mysql'
})


module.exports = sequelize