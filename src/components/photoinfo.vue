<template>
    <div class="photoinfo-container">
        <h3>{{ photoinfo.title }}</h3>
        <p class="subtitle">
        <span>发表时间：{{ photoinfo.add_time | dataFormat }}</span>
        <span>点击：{{ photoinfo.click }}次</span>
        </p>
        <hr>
        <!-- 缩略图区域 -->
        <div class="thumbs">
            <template>
                <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
            </template>     
        </div>
        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.content"></div>
        <!-- 放置一个现成的 评论子组件 -->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>


<script>
import comment from './comment.vue'
import {Toast} from 'mint-ui'
export default {
    data () {
        return {
            id: this.$route.params.id,
            photoinfo:[],
            slide1:[]
        }
    },
    created() {
        this.getinfo();
        this.getThumbs();
    },
    methods: {
        getinfo () {
            this.$http.get('api/getimageInfo/' + this.id).then(result => {
                if (result.body.status === 0) {
                    this.photoinfo = result.body.message[0];
                }else {
                    Toast('获取图片信息失败!');
                }
            })
        },
        getThumbs () {
            this.$http.get('api/getthumimages/' + this.id).then(result => {
                console.log(result.body.message);
                if (result.body.status === 0) {
                    result.body.message.forEach(item => {
                        item.h = 400;
                        item.w = 600;
                        item.msrc = item.src;
                    })
                    this.slide1 = result.body.message;
                }else {
                    Toast('获取图片失败');
                }
            })
        },
        handleClose () {
            console.log('close event')
      }
    },
    components: {
        'cmt-box': comment,
    }
}
</script>


<style lang="scss" scoped>
    .photoinfo-container {
        padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content {
    font-size: 13px;
    line-height: 30px;
  }
.thumbs {
    /deep/ img {
    height: 94px;
    width: 94px;
    margin: 10px;
    box-shadow: 0 0 8px #999;
  }
    /deep/ figure {
        margin: 0;
        display: inline-block;
    }
}
}
</style>
