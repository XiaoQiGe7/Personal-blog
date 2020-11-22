<template>
<!-- 注册 -->
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
                    <input type="text" placeholder="昵称" v-model="account">
                    <i class="icon"></i>
                    <i class="icon"></i>
                </div>
                <div class="sign-input">
                    <input type="text" placeholder="密码" v-model="password">
                    <i class="icon"></i>
                    <i class="icon"></i>
                </div>
                <div class="sign-input">
                    <input type="text" placeholder="确认密码" v-model="ispassword">
                    <i class="icon"></i>
                    <i class="icon"></i>
                </div>
                <div class="sign-input">
                    <input type="text" placeholder="邮箱地址" v-model="mail">
                    <i class="icon"></i>
                    <i class="icon"></i>
                </div>
                <div class="sign-input">
                    <input type="text" placeholder="请输入验证码">
                </div>
                
                <div>
                    <button class="sign-btn" @click="sign">注册</button>

                    <div class="flex-between">
                        <router-link to="/">返回首页</router-link>
                        <router-link to="/sign">前往登录</router-link>
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
            account:'',
            password:'',
            ispassword:'',
            mail:''
        }
    },
    methods:{
        sign() {
            console.log(this.username)
            console.log(this.account)
            console.log(this.password)
            console.log(this.ispassword)
            console.log(this.mail)
        }
    }
}
</script>


<style>

</style>