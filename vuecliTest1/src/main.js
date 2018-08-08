// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' // 引入vue
import App from './App' //这是同一级的目录
import router from './router' //同一级的文件夹
import ElementUi from 'element-ui' //同一级的文件夹
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  //使用路由组件
  components: { App }, //index的模版
  template: '<App/>'
})
