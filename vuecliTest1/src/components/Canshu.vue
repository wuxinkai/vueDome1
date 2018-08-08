<template>
  <div>
    <h3>{{msg}}</h3>
    <!-- 必须添加跳转路由 -->
    <router-view></router-view>
  </div>

</template>

<script>
    export default {
        name: "canshu",
        data(){
          return {
            msg:'获取url的参数 这是父元素的内容'
          }
        }
    }
</script>

<style scoped>

</style>
