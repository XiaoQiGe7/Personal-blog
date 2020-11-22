<template>
<div>

    <!-- 头部组件，置顶在页面 -->
    <hhead />
    <div class="body-bg"></div>
    <div class="body">
        <!-- 左侧栏 -->
        <div class="body-left sm-no">
            <!-- 个人中心 -->
            <Personal />


            <!-- 音乐盒 -->
            <MusicBox />
        </div>


        <!-- 主体内容区 -->
        <div class="content">
            <router-view></router-view>
            <router-view name="article"></router-view>
        </div>


        <!-- 右侧栏 -->
        <div class="body-right sm-no">
            <!-- 公告栏 -->
            <div class="Notice radius-bg-fff">
                <h4 class="title">公告栏</h4>
                <p>来都来了，下方留个言呗</p>
            </div>

            <!-- 评论 -->
            <comment />

            <!-- 发表言论 -->
            <publish />
        </div>

    </div>
</div>
    
</template>


<script>
// import axios from 'axios'
import hhead from '../components/head'
import Personal from '../components/Personal'
import MusicBox from '../components/MusicBox'
import comment from '../components/comment'
import publish from '../components/publish'

export default {
    components: {
        hhead,
        Personal,
        MusicBox,
        comment,
        publish
    },
}
</script>


<style>
.body{
    height: 80vh;
    margin: auto;
    margin-top: 20px;
}
.body-left,.body-right{
    flex: 0 0 250px;
}
.body-bg{
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background-image: url(https://blog.api.xiaoyou66.com/assets/images/background/img306.jpg);
}


.Notice p{
    padding: 10px 5px;
}
.content{
    flex: 2 0 auto;
    height: 80vh;
    overflow: hidden;
    margin: 0px 10px;
}
</style>