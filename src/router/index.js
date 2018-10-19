import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import member from '@/components/member.vue'
import shopcar from '@/components/shopcar.vue'
import search from '@/components/search.vue'
import newList from '@/components/newList.vue'
import newListInfo from '@/components/newListInfo.vue'

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
      path: '/',
      redirect: '/home'
    },
  ],
  linkActiveClass: 'mui-active'
})
