<template>
    <div>
      {{msg}}
    </div>
</template>

<script>
    export default {
        name: "gou-zi",
        data(){
          return {
            msg:'钩子函数的调用'
          }
        },
        beforeRouteEnter:(to,form,next)=>{
          console.log('准备进入');
          console.log(to,form);
          next()
        },
        beforeRouteLeave:(to,form,next)=>{
          console.log('准备离开');
          console.log(to,form);
          next()
        }
    }
</script>

<style scoped>

</style>
