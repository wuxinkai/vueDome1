<template>
  <div>
      <h3>{{msgs}}</h3>
      <p>接收参数：<span>{{$route.params.newsId}}</span></p>
      <p>接收参数：<span>{{$route.params.newsTitle}}</span></p>
  </div>
</template>

<script>
    export default {
        name: "can1",
        data(){
           return {
             msgs:'接收url参数11111111'
           }
        }
    }
</script>

<style scoped>
span{color: red}
</style>
