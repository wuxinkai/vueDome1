<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3 style="font-size: 40px">{ mapState }实现：{{count}}</h3>
        <p></p>
        <p>
            <span>mapActions</span>
            <button @click="addAction">定时器异步操作数据add</button>
            <button @click="removeAction">定时器异步 remove</button>
        </p>
    </div>
</template>
<script>
    import store from '@/vuex/store'
    // mapState 获取vuex里的内容
    //mapActions 异步操作数据
    import { mapState,mapActions } from 'vuex'  //必须加{}
    export default{
        data(){
            return{
                msg:'Hello Vuex',
            }
        },
        computed:{ //获取值
            ...mapState(['count']),//参数实现简写
        },

        methods:{ //方法
            ...mapActions(['addAction','removeAction']) //使用异步方法
        }, //方法实现简写
        store
    }
</script>
