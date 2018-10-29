<template>
  <div class="mui-numbox" data-numbox-min='1'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1"  @change="countChanged" ref="numbox"/>
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
    countChanged() {
      // 每当 文本框的数据被修改的时候，立即把 最新的数据，通过事件调用，传递给父组件
      // console.log(this.$refs.numbox.value);
      if (parseInt(this.$refs.numbox.value) >= this.max) {
        this.$emit("getcount", parseInt(this.max));
        return;
      };
      this.$emit("getcount", parseInt(this.$refs.numbox.value));
    }
  },
  watch: {
  // 属性监听
  max: function(newVal, oldVal) {
    // 使用 JS API 设置 numbox 的最大值
    mui(".mui-numbox")
      .numbox()
      .setOption("max", newVal);
  }
},
  props:['max']
};
</script>

<style lang="scss" scoped>

</style>