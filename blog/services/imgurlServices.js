const Imgurl = require("../models/imgs")


// 添加一个数据
exports.addImgurl = async function (imgurl) {
    const ins = await Imgurl.build({
        imgurl,
    })
    ins.save()
}

// 根据id查询一个数据
exports.getImgurlone = async function (id) {
    const ing = await Imgurl.findByPk(id)
    return ing
}

// 分页查询
exports.getImgurl = async function (page = 1,limit = 5) {
    const result = await Imgurl.findAll({
        offset:(page - 1) * limit,
        limit: +limit
    })
    
    return JSON.stringify(result)
}


// let img_blog = [
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img1.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img11.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img21.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img31.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img41.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img2.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img12.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img22.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img32.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img42.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img3.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img13.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img23.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img33.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img43.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img4.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img14.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img24.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img34.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img44.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img5.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img15.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img25.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img35.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img45.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img51.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img52.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img53.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img54.jpg"},
//     {imgurl:"https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/imgtu/img55.jpg"},
// ]