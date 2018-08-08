<template>
    <div>
        <p>{{Error}}</p>
    </div>
</template>

<script>
    export default {
        name: "error",
        data(){
          return{
            Error:'这是错误页面 404'
          }
        }
    }
</script>

<style scoped>
p{font-size: 50px; text-align: center;line-height: 200px;color:red;}
</style>
