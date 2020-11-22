<template>
<div class="Usercomments radius-bg-fff">
    <h4 class="title">留下你的建议</h4>
    <!-- 获取用户输入 -->
    <div class="Usercomments-input">
        <div class="flex-between">
            <input v-model="username" class="username-input" type="text" placeholder="昵称(非必填)">
            <!-- <input v-model="userimg" class="userimg-input" type="text" placeholder="头像上传暂未开放" disabled :style="{backgroundColor:'#c8c8c8'}"> -->
            <select name="" id="" class="userimg-input" v-model="userimg" >
                <option value="" selected>头像(非必须)</option>
                <option value="https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/img1.jpg">系统头像1</option>
                <option value="https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/img2.jpg">系统头像2</option>
                <option value="https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/img3.jpg">系统头像3</option>
                <option value="https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/img4.jpg">系统头像4</option>
            </select>
        </div>
        <!-- <input v-model="usercomment" class="useropinion-input" type="text" placeholder="你的意见对我至关重要！"> -->
        <textarea v-model="usercomment" class="useropinion-input" placeholder="你的意见对我至关重要！(必须,只有输入此文本框才可以提交)" @click="text"></textarea>
        <p class="error" :class="{iserror:iserror}">你想说的就这些？起码得来一句“真滴不戳”吧</p>
    <button class="Usercomments-btn" @click="ajax">提交</button>
    </div>

</div>
</template>



<script>
export default {
    data() {
        return {
            username:'',
            userimg:"",
            usercomment:'',
            iserror:false
        }
    },
    methods:{
        text(){
            this.iserror = false
        },
        // 将用户输入发给后端进行存储
        async ajax(){
            if(this.usercomment.length < 1) {
                this.iserror = true
                return
            }else{
                this.iserror = false
            }
            if(this.username.length < 1) {
                this.username = '不知道哪来的路人'
            }
            this.$api({
                method:'get',
                baseURL:"http://localhost:3000",
                url:"/publish?username=" + this.username + "&usercomment=" + this.usercomment + "&userimg=" + this.userimg
            })
            location.reload()
        },
    }
}
</script>



<style>
.Usercomments{
    margin-top: 20px;
}
.Usercomments-input{
    margin: 20px 10px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
}
.Usercomments input{
    border: 1px solid #c8c8c8;
    border-radius: 5px;
}
.username-input,.userimg-input{
    width: 100px;
    padding: 5px 2px;
}
.useropinion-input{
    width: 90%;
    margin: 10px;
    height: 100px;
    text-indent: 1em;
    outline-color: skyblue;
    border: 1px solid #c8c8c8;
    border-radius: 5px;
}
.userimg-input{
    outline: none;
    border: 1px solid #c8c8c8;
    border-radius: 5px;
}
.Usercomments-btn{
    width: 90%;
    border: none;
    outline: none;
    color: #fff;
    padding: 10px 0px;
    border-radius: 5px;
    background-color: #409eff;
    position: relative;
    bottom: 5px;
}
.error{
    position: absolute;
    z-index: -100;
    top: -20px;
    background-color: #fff;
    box-shadow: 0px 0px 4px 3px #EB7347;
    padding: 5px;
    transition: 0.4s;
    opacity: 0;
}
.error::after{
    content: "";
    border-width: 15px;
    border-color: #EB7347 transparent transparent transparent;
    border-style: solid;
    position: absolute;
    bottom: -30px;
}
.iserror{
    opacity: 1;
    z-index: 9999;
}
</style>