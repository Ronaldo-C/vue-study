<template>
  <div>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item, index) in imageList" :key="index">
            <img :src="item.img" alt="">
        </mt-swipe-item>
    </mt-swipe>
    <div class="mui-content">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newList">
                    <img src="../assets/image/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/picShow">
                    <img src="../assets/image/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodList">
                    <img src="../assets/image/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../assets/image/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../assets/image/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../assets/image/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul> 
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      imageList: []
    };
  },
  created() {
    this.getlunbo();
  },
  methods: {
    getlunbo() {
      this.$http.get("api/getlunbo").then(result => {
        if (result.body.status === 0) {
          this.imageList = result.body.message;
        } else {
          Toast("图片加载失败！");
        }
      });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.mint-swipe {
  height: 300px;
  .mint-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mui-content {
    img {
        width: 60px;
        height: 60px;
    }
    font-size: 14px;
    .mui-grid-9 {
        border: none;
        margin-top: 0;
        background-color: #fff;
        .mui-media {
            border: none;
        }
    }
}
</style>

