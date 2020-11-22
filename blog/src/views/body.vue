<template>
    <div class="body">
        <!-- 左侧栏 -->
        <div class="body-left">
            <!-- 个人中心 -->
            <div class="Personal"></div>


            <!-- 音乐盒 -->
            <div class="music-box"></div>
        </div>


        <!-- 右侧栏 -->
        <div class="body-right">
            <!-- 公告栏 -->
            <div class="Notice"></div>


            <!-- 其他模块 -->
            <div class="other"></div>

            <!-- 评论 -->
            <div class="comment"></div>
        </div>


        <!-- 主体内容区 -->
        <div class="content">
            <router-view name="Post"></router-view>
            <router-view name="card"></router-view>
        </div>
    </div>
</template>



<script>
export default {
    
}
</script>


<style>

</style>