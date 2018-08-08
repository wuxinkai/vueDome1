<template>
    
</template>

<script>
    export default {
        name: "28【属性集合】", //
        /*(1)数据  */
        data(){return {}},//实例的数据对象
        components:{}, //Vue实例配置局部注册组件

        /*(2)类方法  */
        computed(){}, //计算属性
        watch(){}, //侦听属性
        filters(){},//过滤器
        methods(){},//实例方法
        render(){},//渲染函数，创建虚拟DOM

        /*(3)生命周期*/
        created(){}, //在实例创建完成后被立即调用，完成初始化操作
        mounted(){}, //el挂载到Vue实例上了，开始业务逻辑操作
        beforeDestroy(){}, //实例销毁之前调用
        /* 组件模板 */
        props:[],//用于接收来自父组件的数据
        template:''//组件模板
    }
</script>

<style scoped>

</style>