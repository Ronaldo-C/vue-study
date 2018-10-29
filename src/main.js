// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://027xin.com:8899';
Vue.http.options.emulateJSON = true;

import moment from 'moment';
Vue.filter('dataFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern);
})

import VuePreview from 'vue-preview';
Vue.use(VuePreview);

import Vuex from 'vuex'
Vue.use(Vuex)
var car = JSON.parse(localStorage.getItem('car') || '[]');
var store = new Vuex.Store({
  state: {
    car:car
  },
  mutations: {
    addToShopcar (state, goodsInfo) {
      var flag = false;
      state.car.some(item => {
        if (item.id === goodsInfo.id) {
          item.count += goodsInfo.count;
          flag = true;
          return true;
        }
      })
      if (!flag) {
        state.car.push(goodsInfo);
      }
      localStorage.setItem('car',JSON.stringify(state.car));
    },
    updateShopcar (state, goodsInfo) {
      state.car.some(item => {
        if (item.id === goodsInfo.id) {
          item.count = parseInt(goodsInfo.count);
          return true;
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car));
    },
    removeFormatCar (state, id) {
      state.car.forEach((item,i) => {
        if (item.id === id) {
          state.car.splice(i, 1);
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car));
    },
    updateSelected (state, info) {
      state.car.forEach(item => {
        if (item.id === info.id) {
          item.selected = info.selected;
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car));
    }
  },
  getters: {
    getAllCount(state) {
      var c = 0;
      state.car.forEach(item => {
        c += item.count;
      })
      return c;
    },
    getGoodsCount(state) {
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.count
      })
      return o
    },
    getGoodsSelected (state) {
      var o = {};
      state.car.some(item => {
        o[item.id] = item.selected
      })
      return o;
    },
    shopcarGoodsCount (state) {
      var o = {
        allCount: 0,
        allPrice: 0
      };
      state.car.forEach(item => {
        if (item.selected) {
          o.allCount += item.count;
          o.allPrice += item.count * item.price;
        }
      })
      return o;
    }
  }
})

import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra(1).css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
