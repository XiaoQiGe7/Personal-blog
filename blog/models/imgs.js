// 图库
const sequelize = require("./db")
const { DataTypes } = require("sequelize")

module.exports = sequelize.define("imgs",{
    imgurl:{
        type:DataTypes.STRING,
        allowNull:false,
    }
},{
    createdAt: false,
    updatedAt:false
})