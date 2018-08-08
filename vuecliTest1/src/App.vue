<template>
  <div id="app">
    <!-- in-out先进入后退出  我们常用 out-in先退出后进入 -->
    <transition name="fade" mode="out-in">
        <router-view />
    </transition>


    <!-- 单页面 多路由 -->
    <router-view name="left" style="display: inline-block;width:49%;background-color:#ccc;height:300px;"></router-view>
    <router-view name="right" style="display: inline-block;width:49%;background-color:#c0c;height:300px;"></router-view>

    <!--路由-->
    <div class="router">
      <router-link class="luYou" to="/">首页，页面路由学习</router-link>
      <router-link class="luYou" to="/Hi">hi页面，是hi1和hi2的父页面</router-link>
      <router-link class="luYou" :to="{name:'hi1',params:{userName:'这是app.vue传递的参数'}}">hi的子页面1,获取父元素参数</router-link>
      <router-link class="luYou" to="/Hi/hi2">hi的子页面2，通过路由中的name获取参数</router-link>
      <router-link class="luYou" to="/Many">单页面多路由</router-link>
      <router-link class="luYou" to="/Canshu">通过url传递参数，传递参数的父页面</router-link>
      <router-link class="luYou" to="/Canshu/Can1/178/这是新闻标题">获取参数的子页面</router-link>
      <router-link class="luYou" to="/ChongDingXiang">点击ChongDingXiang页面，页面重定向到首页</router-link>
      <router-link class="luYou" to="/ChongDingXiang/666/重定向带参数">页面重定向加参数</router-link>
      <router-link class="luYou" to="/BieMing">别名alias的应用,BieMing</router-link>
      <router-link class="luYou" to="/home">给首页起别名，跳转到首页</router-link>
      <router-link class="luYou" to="/65432">这是一个乱写的路径，目的404</router-link>
      <router-link class="luYou" to="/GouZi">钩子函数的应用</router-link>
      <router-link to="/Count" class="vuex">vuex 绑定内容写法1</router-link>
      <router-link to="/Count1" class="vuex">vuex 赋值，传参数，和删除</router-link>
      <router-link to="/Count3" class="vuex">利用vuex的mapState实现绑定数据 写法3</router-link>
      <router-link to="/Count2" class="vuex">利用vuex的mapGetters实现数据过滤</router-link>
      <router-link to="/Count4" class="vuex">利用vuex的mapAction 异步加载数据</router-link>
      <router-link to="/pos" class="vuex">vue快餐项目</router-link>
    </div>

    <div>
      <button @click="goBack">前进</button>
      <button @click="goGo">后退</button>
      <button @click="goHome">返回首页</button>
    </div>

    <!-- 获取参数 -->
    <div >
      <p>{{$route.name }}</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'App',
  methods:{
    goBack(){ //后退
      this.$router.go(-1);
    },
    goGo(){ //后退
      this.$router.go(1);
    },
    goHome(){ //跳转到首页， 一般用于页面的跳转登陆
      this.$router.push('/')
    }
  }
}
</script>

<!--<style scoped> 只对当前页面起作用 -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router{border: 1px solid #ccc; width: 360px;}
  .router a{
    display: block;
    height: 36px;
    line-height: 36px;
    border-bottom: 1px solid #ccc;

  }
  .htmlIn{float: left;}

/*过度动画*/
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .3s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .3s;
}
  .vuex{color: blue;}
  .luYou{color: red}
</style>
