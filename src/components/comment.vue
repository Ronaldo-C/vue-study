<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" v-model="msg"></textarea>

        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, index) in commentInfo" :key="index">
                <div class="cmt-title">
                第{{index+1}}楼 &nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dataFormat}}
                </div>
                <div class="cmt-body">
                    {{item.content === ''? '该用户很懒，什么也没说': item.content}}
                </div>
            </div>

        </div>

            <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>


<script>
import {Toast} from 'mint-ui';
export default {
    data () {
        return {
            commentInfo:[],
            pageIndex: 1,
            msg:''
        }
    },
    created() {
        this.getComment();
    },
    methods: {
        getComment () {
            this.$http.get('api/getcomments/' + this.id + '?pageindex=' + this.pageIndex).then(result => {
                if (result.body.status === 0) {
                    this.commentInfo = this.commentInfo.concat(result.body.message);
                }else {
                    Toast('获取评论失败!');
                }
            })
        },
        getMore () {
            this.pageIndex++;
            this.getComment();
        },
        postComment () {
            if (!this.msg.trim()) {
                return Toast('评论内容不能为空!');
            }
            this.$http.post('api/postcomment/' + this.id, {content: this.msg}).then(result => {
                if (result.body.status === 0) {
                    var cmt = {
                        add_time: Date.now(),
                        content: this.msg,
                        user_name: '武汉金融港前端19最帅的人'
                    }
                    this.commentInfo.unshift(cmt);
                    this.msg = '';
                }else {
                    Toast('发表评论失败');
                }
            })
        }
    },
    props: ['id']
}
</script>


<style lang="scss" scoped>
    .cmt-container {
        h3 {
            font-size: 18px;
        }
        textarea {
            font-size: 14px;
            height: 85px;
            margin: 0;
        }

        .cmt-list {
            margin: 5px 0;
            .cmt-item {
            font-size: 10px;
            .cmt-title {
                line-height: 30px;
                background-color: #ccc;
            }
            .cmt-body {
                line-height: 35px;
                text-indent: 2em;
            }
            }
        }
    }
</style>
