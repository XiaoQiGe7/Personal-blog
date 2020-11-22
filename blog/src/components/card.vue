<template>
<div class="record">
    <!-- 导航标签 -->
    <div class="tags flex-between radius-bg-fff">
        <div class="tag-item" v-for="item in tags" :key="item.id">
            <a>{{item.title}}</a>
            <span>{{item.number}}</span>
        </div>
    </div>



    <div class="card" @scroll="scroll">
        <!-- 记录卡片,生活内容 -->
            <div
            @click="params(item.title,item.id)"
            class="card-item"
            v-for="item in items"
            :key="item.id"
            :style="{backgroundImage:'url(' + item.imgurl + ')'}"
            >
                <div class="card-item-content">
                    <h4 class="card-item-title">{{item.title}}</h4> <!-- 标题 -->
                    <!-- <p class="card-item-text">{{item.content}}</p>    简介 -->
                    <div class="flex-between padding-lr">
                        <span class="date">{{item.createdAt}}</span>
                        <span class="comment">{{item.comment}}条评论</span>
                        <span class="read">{{item.read}}次阅读</span>
                        <span class="Fabulous">{{item.Fabulous}}人点赞</span>
                    </div>
                </div>
            </div>
    </div>
</div>
</template>


<script>
export default {
    data () {
        return {
            items:null,
            tags:[
                {
                    title:"前端技术",
                    number:0
                },
                {
                    title:"后端技术",
                    number:0
                },
                {
                    title:"数据库相关",
                    number:0
                },
                {
                    title:"网络",
                    number:0
                },
                {
                    title:"BUG交流协会",
                    number:0
                },
                {
                    title:"世间风景收录其中",
                    number:0
                },
                {
                    title:"好吃的!",
                    number:0
                },
                {
                    title:"看番咯!",
                    number:0
                }
            ],
            page:1,
            limit:4,
        }
    },
    methods:{
        // 更新阅读记录
        up(id){
            this.$api(({
                method:'get',
                baseURL:"http://localhost:3000",
                url:"/Read" + "?id=" + id
            }))
        },
        async params(title,id) {
            this.up(id)
                // 跳转文章页面时向目标传递参数
            this.$router.push({
                name:'article',
                params:{title,id}
            })
        },

        
        // 发送网络请求 获取数据
        async ajax(){
            await this.$api({
                method:'get',
                baseURL:"http://localhost:3000",
                url:"/Content" + "?page=" + this.page + "&limit=" + this.limit
            }).then(res => {
                this.items = res.data
            })
        },
        // 滚动加载
        scroll(e){
            // 提取源对象属性
            const {scrollHeight,offsetHeight,scrollTop} = e.target
            // 判断滚动是否到达容器底部
            if(scrollHeight < offsetHeight + scrollTop + 50){
                this.ajax()
            }
        }
    },
    created() {
        this.ajax()
    }
}
</script>


<style>
.record{
    height: 100%;
}
.tags{
    max-width: 960px;
    padding: 10px 20px;
    flex-wrap: wrap;
}
.tag-item a{
    padding: 0px 3px;
}
.tag-item span{
    background-color: skyblue;
    color: #fff;
    padding: 0px 5px;
    border-radius: 2px;
}

.card{
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    margin-right: -17px;
}
.card-item{
    color: #fff;
    height: 400px;
    display: block;
    border-radius: 10px;
    position: relative;
    margin-top: 10px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 50% 50%;
    transition: all 0.9s;
}
.card-item:hover{
    background-size: 120%;
}
.card-item-content{
    border-radius: 10px;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
}
.card-item-title{
    font-size: 2em;
    text-align: center;
}
.card-item-text{
    padding: 10px 20px;
}
</style>