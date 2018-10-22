<template>
  <div id="app">
    <mt-header fixed title="前端学习"></mt-header>
    <transition>
      <router-view>
      </router-view>
    </transition>
      <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item-llb" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item-llb" to="/member">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link class="mui-tab-item-llb" to="/shopcar">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item-llb" to="/search">
          <span class="mui-icon mui-icon-gear"></span>
          <span class="mui-tab-label">搜索</span>
        </router-link>
      </nav>
  </div>
</template>

<script>
  
</script>

<style>
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
  position: absolute;
}
body {
  background-color: #fff;
}
.mui-bar-tab .mui-tab-item-llb.mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item-llb {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mint-header.is-fixed {
  z-index: 99;
}
</style>
