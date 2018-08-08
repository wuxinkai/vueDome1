<template>
  <div>
    <h2>{{msg1}}---{{$route.params.userName}}</h2>
  </div>
</template>

<script>
    export default {
        name: "hi1",
      data(){
        return {
          msg1:'这个是hi1的内容,$route.params.userName 传递参数'
        }
      }
    }
</script>

<style scoped>

</style>
