<template>
    <div class="goodsinfo-container">
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swipe :imageList="imageList" :isfull="false"></swipe>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">{{goodsInfo.title}}</div>
                <div class="mui-card-content">
                <div class="mui-card-content-inner">
                <p class="price">
                    市场价：<del>￥{{goodsInfo.sell_price}}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{goodsInfo.market_price}}</span>
                </p>
                <p>购买数量：<number-box @getcount="getSelectedCount" :max="goodsInfo.stock_quantity"></number-box></p>
                <p>
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="addShopcar">加入购物车</mt-button>
                </p>
                </div>
            </div>
        </div>
       <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{goodsInfo.goods_no}}</p>
                    <p>库存情况：{{goodsInfo.stock_quantity}}</p>
                    <p>上架时间：{{goodsInfo.add_time | dataFormat}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="godec(goodsInfo.id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="gocom(goodsInfo.id)">商品评论</mt-button>
            </div>
        </div>
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @after-leave="afterLeave"
        >
            <div class="ball" v-show="isShow" ref="ball"></div>
        </transition>
    </div>
</template>

<script>
import swipe from './swipe';
import numberBox from './number-box';
export default {
    data () {
        return {
            imageList: [],
            id: this.$route.params.id,
            goodsInfo: [],
            isShow: false,
            switchKey: true,
            selectedCount: 1
        }
    },
    created() {
        this.getImages();
        this.getGoodsInfo();
    },
    methods: {
        getImages () {
            this.$http.get("api/getthumimages/" + this.id).then(result => {
                if (result.body.status === 0) {
                    result.body.message.forEach(element => {
                        element.img = element.src;
                    });
                    this.imageList = result.body.message;
                }
            })
        },
        getGoodsInfo () {
            this.$http.get('api/goods/getinfo/' + this.id).then(result => {
                if (result.body.status === 0) {
                    this.goodsInfo = result.body.message[0];
                }
            })
        },
        godec (id) {
            this.$router.push({name: 'goodsdescribe', params: {id: id}})
        },
        gocom (id) {
            this.$router.push({name: 'goodscomment', params: {id: id}})
        },
        addShopcar () {
            if (this.switchKey) {
                this.isShow = !this.isShow;
                this.switchKey = false
            }
            var goodsInfo2 = {
                id: this.id,
                count: this.selectedCount,
                price: this.goodsInfo.sell_price,
                selected:true
            }
            this.$store.commit('addToShopcar', goodsInfo2);
        },
        beforeEnter (el) {
            el.style.opacity = 1;
            el.style.transform = "translate(0, 0)";
        },
        enter (el,done) {
            const badgePosition = document.getElementById('badge').getBoundingClientRect();
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top;
            el.style.offsteWidth;
            el.style.transform = `translate(${xDist}px,${yDist}px)`;
            el.style.transition = "all 0.6s cubic-bezier(.4,-0.3,1,.68)";
            done()
        },
        afterEnter (el) {
            this.isShow = !this.isShow;
        },
        afterLeave (el) {
            this.switchKey = true;
        },
        getSelectedCount (count) {
            this.selectedCount = count;
        }
    },
    components: {
        swipe,
        'number-box': numberBox,
    }
}
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }
  .ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 99;
  top: 490px;
  left: 146px;
}
}
</style>
