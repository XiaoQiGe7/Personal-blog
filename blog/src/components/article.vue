<template>
<!-- 下面是整体文章结构 -->
<!-- 
    {
        title:文章主标题,
        content:[文章内容
            {
                title:章节标题,
                content:[章节内容
                    {
                        title:章节分支,
                        content:章节段落
                    }
                ]
            }
        ]
    }
 -->
    <div class="article radius-bg-fff">
        <!-- <div class="article-title-img" :style="{backgroundImage:'url(' + items.img + ')'}"></div> -->
        <h1 class="article-title">{{title}}</h1>
        <div class="article-item" v-for="item in content" :key="item.id">
            <h3 class="article-item-title">{{item.title}}</h3>
            <div v-for="(i,index) in item.content" :key="index">
                <p class="padding-tb">{{i.content}}</p>
                <img v-if="i.imgurl" :src="i.imgurl" alt="">
            </div>
        </div>
    </div>
</template>


<script>
export default {
    // 接受content组件传递过来的参数
    props:{title:{type:[String]},id:{type:[String,Number]}},
    data () {
        return {
            items:null,
            content:null,
            msg:null,
        }
    },
    created() {
        // 发送网络请求 获取数据
        this.$api({
            method:'get',
            baseURL:"http://localhost:3000",
            url:"/article?id=" + this.id
        }).then(res => {
            this.items = res.data
            this.content = JSON.parse(this.items.content)
        })
    }
}
</script>


<style>
.article{
    max-width: 960px;
    height: 100%;
    padding: 0px 15px;
    overflow-x: hidden;
    overflow-y: scroll;
}
.article::-webkit-scrollbar{
    width: 5px;
}
.article::-webkit-scrollbar-track{
    border-radius: 5px;
    background: #fff;
}
.article::-webkit-scrollbar-thumb{
    border-radius: 5px;
    background: #c8c8c8;
}
.article-title{
    text-align: center;
}
.article-item-title{
    padding: 10px 0px;
    border-bottom: 1px solid #c8c8c8;
}
.article-title-img{
    width: 100%;
    height: 50px;
}
</style>