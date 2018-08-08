<template>
    <div>
      <h1>{{msg}}</h1>
      <!--增加子页面 跳转的地方-->
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "hi",
        data(){
          return {
            msg:'这是父元素的内容，模版  js  css 组成2'
          }
        }
    }
</script>

<style scoped>

</style>

<!--

模版  js  css 组成

-->
