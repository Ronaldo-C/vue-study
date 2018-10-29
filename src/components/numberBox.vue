<template>
  <div class="mui-numbox" data-numbox-min='1' style="height:25px">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countChange" readonly ref="number"/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../assets/mui/js/mui.min";

export default {
  mounted() {
    // 初始化数字选择框组件
    mui(".mui-numbox").numbox();
  },
  methods: {
    countChange () {
        this.$store.commit('updateShopcar', {id:this.goodsid,count:this.$refs.number.value});
    }
  },
  watch: {
  
},
props:['initcount',"goodsid"]
};
</script>

<style lang="scss" scoped>

</style>