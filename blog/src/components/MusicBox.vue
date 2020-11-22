<template>
<!-- 帖子 -->
    <div class="MusicBox radius-bg-fff">
        <h4 class="title">音乐盒</h4>
        <!-- 正在播放的音乐 -->
        <div class="MusicPlay flex-between">
            <div class="MusicPlay-img MusicPlay-wrap">
                <div class="MusicPlay-bg"></div>
                <img class="MusicPlay-img"  :style="{transform:'rotate(' + deg +'deg)'}" src="https://p4.music.126.net/ClQyajrD09sGC8Or13I3FA==/109951163649593576.jpg" alt="">
                <a class="MusicPlay-btn center" :class="[play?'pause':'play']" @click="playMusic"></a>
            </div>
            <div>
                <p class="title">{{name}}</p>
                <p class="play-singer">{{singer}}</p>
            </div>
        </div>


        <!-- 音乐列表 -->
        <ol class="Musiclist">
            <li class="Musiclist-item flex-between"
            :class="{acti:playindex  == index}"
            v-for="(item,index) in items"
            :key="item.id"
            @click="Music(index,item.musicname,item.singer)">
                <audio :src="item.musicurl" @ended="end(index)" @playing="playin(index)"></audio>
                    <span class="">{{index + 1}}</span>
                    <span class="Musicname">{{item.musicname}}</span>
                    <span>{{item.singer}}</span>
            </li>
        </ol>
    </div>
</template>


<script>
export default {
    data () {
        return {
            items:null,
            playindex:'0',
            name:null,
            singer:null,
            play:false,
            deg:0,
            time:null
        }
    },
    methods:{
        // 开始播放时添加class
        playin(index){
            this.playindex = index
        },
        // 列表循环，播放结束时自动播放下一首音乐
        end(index){
            const audio = document.getElementsByTagName("audio")
            audio[index + 1].play()
        },
        // 播放时音乐图标旋转
        turn(){
            clearInterval(this.time)
            this.time = setInterval(() => {
                this.deg++
            },100)
        },
        // 正在播放
        playMusic(){
            // 正在播放,点击暂停
            const audio = document.getElementsByTagName("audio")
            if(this.play == true){
                clearInterval(this.time)
                this.play = false
                audio[this.playindex].pause()
            }else{
                this.play = true
                audio[this.playindex].play()
            }
        },
        // 切换正在播放的音乐
        Music(index,name,singer){
            const audio = document.getElementsByTagName("audio")
            if(this.playindex != index) {
                // clearInterval(this.time)
                // audio[index].pause()
                // 与上次点击不同则播放此歌曲，并且暂停上次播放
                this.turn()
                audio[index].play()
                audio[this.playindex].pause()
                this.name = name
                this.singer = singer
            }
            this.playindex = index
        },
        // 音乐列表的数据请求
        async ajax(){
            await this.$api({
                method:'get',
                baseURL:"http://localhost:3000",
                url:"/Music"
            }).then(res => {
                this.items = res.data
                this.name = this.items[0].musicname;
                this.singer = this.items[0].singer;
            })
        },
    },
    created () {
        this.ajax()
    }
}
</script>


<style>
.Musiclist{
    height: 350px;
    overflow-x: hidden;
    overflow-y: scroll;
}
.Musiclist::-webkit-scrollbar{
    width: 5px;
}
.Musiclist::-webkit-scrollbar-track{
    border-radius: 5px;
    background: #c8c8c8;
}
.Musiclist::-webkit-scrollbar-thumb{
    border-radius: 5px;
    background: #FF8008;
}
.MusicBox{
    margin-top: 20px;
}
.MusicPlay{
    display: flex;
    padding: 5px;
}
.MusicPlay-img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
}
.MusicPlay-bg{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: absolute;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.2);
}
.MusicPlay p{
    width: 100%;
}
.play-singer{
    text-align: center;
}
.Musiclist-item{
    padding: 10px 10px;
    font-size: 12px;
    cursor: pointer;
    border-bottom: 1px solid #c8c8c8;
}
.Musiclist-item:hover{
    background-color: #c8c8c8;
}
.Musicname{
    text-align: left;
    flex: 1 0 auto;
    padding-left: 10px;
}
.MusicPlay-wrap{
    position: relative;
}
.acti{
    color: #fff;
    background-color: #3A6073 !important;
}

.MusicPlay-btn{
    display: block;
    width: 32px;
    height: 32px;
    position: absolute;
    z-index: 9999;
    cursor: pointer;
}
.play{
    background-image: url(https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/blog/imgtu/play.png);
}
.pause{
    background-image: url(https://bili-2g982zb6adedefdd-1302778069.tcloudbaseapp.com/blog/imgtu/pause.png);
}
</style>