// 留言模块
const sequelize = require("./db")
const { DateTypes, DataTypes } = require("sequelize")

module.exports = sequelize.define("comment",{
    userimg:{
        type:DataTypes.STRING,
        allowNull:false
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    usercomment:{
        type:DataTypes.STRING,
        allowNull:false
    }
})