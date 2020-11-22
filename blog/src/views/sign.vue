<template>
<!-- 登录 -->
<div class="bg">
    <div class="sign center">
        <h6>欢迎来到我的个人博客</h6>

        <form action="" class="">
            <div class="sign-input">
                <input type="text" placeholder="账号" v-model="username">
                <i class="icon"></i>
                <i class="icon"></i>
            </div>
            <div class="sign-input">
                <input type="text" placeholder="密码" v-model="password">
                <i class="icon"></i>
                <i class="icon"></i>
            </div>
            
            <div class="">
                <input type="checkbox" id="gg">
                <label for="gg">记住我的登录信息</label>
                <button class="sign-btn" @click="sign">登录</button>
                <div class="flex-between">
                    <router-link to="/">返回首页</router-link>
                    <router-link to="/register">前往注册</router-link>
                </div>
            </div>
        </form>
    </div>
</div>
</template>



<script>
export default {
    data() {
        return {
            username:'',
            password:''
        }
    },
    methods:{
        sign(){
            console.log(this.username)
            console.log(this.password)
        }
    }
}
</script>


<style>

</style>