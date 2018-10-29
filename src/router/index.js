import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import member from '@/components/member.vue'
import shopcar from '@/components/shopcar.vue'
import search from '@/components/search.vue'
import newList from '@/components/newList.vue'
import newListInfo from '@/components/newListInfo.vue'
import picShow from '@/components/picShow.vue'
import picinfo from '@/components/photoinfo.vue'
import goodList from '@/components/goodList.vue'
import goodsInfo from '@/components/goodsInfo.vue' 
import goodsdescribe from '@/components/describe.vue' 
import goodscomment from '@/components/goodscomment.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/member',
      name: 'member',
      component: member
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: shopcar
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/home/newList',
      component: newList
    },
    {
      path: '/home/newListInfo/:id',
      component: newListInfo
    },
    {
      path: '/home/picShow',
      component: picShow
    },
    {
      path: '/home/photoinfo/:id',
      component: picinfo
    },
    {
      path: '/home/goodList',
      component: goodList
    },
    {
      path: '/home/goodsInfo/:id',
      name: 'goodsInfo',
      component: goodsInfo
    },
    {
      path: '/home/describe/:id',
      name: 'goodsdescribe',
      component: goodsdescribe
    },
    {
      path: '/home/comment/:id',
      name: 'goodscomment',
      component: goodscomment
    },
    {
      path: '/',
      redirect: '/home'
    },
  ],
  linkActiveClass: 'mui-active'
})
