// 文章内容
const sequelize = require("./db")
const { DataTypes } = require("sequelize")
// const { model } = require("./db")

module.exports = sequelize.define("article",{
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    content:{
        type:DataTypes.TEXT,
        allowNull:false,
        // get(){
        //     return this.getDataValue('content').split(',');
        // },
        // set(value){
        //     console.log(value)
        //     return this.setDataValue('content',value.join(','))
        // }
    }
})

