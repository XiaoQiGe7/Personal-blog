// 内容
const sequelize = require("./db")
const { DataTypes } = require("sequelize")

module.exports = sequelize.define("contents",{
    // 列
    title:{
        // 数据类型
        type:DataTypes.STRING,
        // 是否为空
        allowNull:false
    },
    content:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    comment:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    read:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    Fabulous:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    imgurl:{
        type:DataTypes.STRING,
        allowNull:false
    }
})