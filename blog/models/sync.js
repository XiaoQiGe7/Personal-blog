require("./comment")
require("./content")
require("./music")
require("./imgs")
require("./article")
const sequelize = require("./db");
sequelize.sync({alter:true}).then(() => {
    console.log("同步完成")
})