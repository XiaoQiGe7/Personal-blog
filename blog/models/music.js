// 音乐盒
const sequelize = require("./db")
const { DataTypes } = require("sequelize")
// const { model } = require("./db")

module.exports = sequelize.define("music",{
    musicurl:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    musicname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    singer:{
        type:DataTypes.STRING,
        allowNull:false
    }
})



// [
//     {
//         musicurl:"",
//         musicname:"",
//         singer:""
//     }
// ]