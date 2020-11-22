<template>
  <div id="app">
    <!-- 头部组件，置顶在页面 -->
    <!-- <hhead /> -->


    <!-- 主体内容区 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.sign{
  width: 260px;
  padding: 20px 15px;
  background-color: #fff;
}
.sign-input{
  height: 60px;
}
.sign-input input{
  width: 70%;
  height: 30px;
  padding: 0px 15%;
  color: #c8c8c8;
  border:1px solid #c8c8c8;
  margin-top: 10px;
}
.sign-btn{
  width: 100%;
  border: none;
  outline: none;
  color: #fff;
  padding: 10px 0px;
  background-color: #409eff;
}

@media (min-width:1040px) {
  .body{
    max-width: 1480px;
    min-width: 1040px;
    display: flex;
    justify-content: space-between;
  }
  .head-input{
    width: 350px;
  }
  .tag-item{
    flex: 0 0 170px;
    padding: 0px 10px 0px;
    text-align: center;
  }
  .tag-item{
    flex: 0 0 170px;
    padding: 0px 10px 0px;
    text-align: center;
  }
  .card-item-title{
    line-height: 1000%;
  }
  .Navigation a{
    display: flex;
  }
}

@media (max-width:640px) {
    .Navigation{
        position: fixed;
        bottom: 0px;
        left: 0px;
        width: 100vw !important;
        padding: 10px 0px;
        z-index: 99;
        background-color: #2C3E50;
    }
    .head-form{
      width: 60vw !important;
    }
    .sm-no{
        display: none;
    }
    .body{
      width: 90vw;
      padding: 0px 10px 0px;
    }
    .head-input{
      width: 50vw;
    }
    .tag-item{
      flex: 0 0 120px;
    }
    .card-item{
      height: 20vh !important;
    }
    .tag-item{
      font-size: 12px;
      flex: 0 0 120px !important;
    }
}
</style>
