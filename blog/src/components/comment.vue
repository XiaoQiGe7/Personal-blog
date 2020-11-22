<template>
    <div class="comments radius-bg-fff">
        <h4 class="title">留言</h4>
        <div class="comment-content">
            <div class="comment-item" v-for="item in items" :key="item.id">
                <div class="flex-between">
                    <img class="username-img" :src="item.userimg" alt=""> <!-- 头像 -->
                    <div class="flex-between-column comment-username">
                        <p>{{item.username}}</p> <!-- 用户名 -->
                        <p class="comment-date ">{{item.createdAt}}</p> <!-- 留言时间 -->
                    </div>

                </div>
                <p class="comment-usercomment">{{item.usercomment}}</p> <!-- 留言 -->
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data () {
        return {
            items:null,
        }
    },
    aaa(e){
        console.log(e.scrollHeight,e.offsetHeight,e.scrollTop)
    },
    methods:{
        async ajax(){
            await this.$api({
                method:'get',
                baseURL:"http://localhost:3000",
                url:"/comment"
            }).then(res => {
                this.items = res.data
            })
        },
    },
    created () {
        this.ajax()
    }
}
</script>


<style>
.comments{
    margin-top: 20px;
    width: 250px;
    height: 400px;
}
.comment-content::-webkit-scrollbar{
    width: 5px;
}
.comment-content::-webkit-scrollbar-track{
    border-radius: 5px;
    background: #ECAD9E;
}
.comment-content::-webkit-scrollbar-thumb{
    border-radius: 5px;
    background: #A0EEE1;
}
.comment-content{
    height: calc(100% - 42px);
    overflow-x: hidden;
    overflow-y: scroll;
}
.comment-item{
    padding: 10px;
    border-bottom: 1px solid #c8c8cc;
}
.comment-usercomment{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-top: 10px;
}
.username-img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.comment-date{
    width: 70px;
    white-space: nowrap;
    overflow: hidden;
    font-size: 14px;
}
.comment-username{
    width: 75%;
    /* line-height: 40px; */
}
</style>