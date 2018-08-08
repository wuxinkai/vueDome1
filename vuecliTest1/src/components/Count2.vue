<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3 style="font-size: 40px">实现：{{count}}</h3>
        <p>
        
            <!-- add是vue写的方法名 ，第二个是参数 -->
            <button @click="$store.commit('add',5)">给vuex里的add方法穿参数</button>
            <button @click="remove">无论 加载都会走过滤器 remove</button>
        </p>
    </div>
</template>
<script>
    import store from '@/vuex/store'

    //mapGetters 过滤器
    import { mapState,mapMutations,mapGetters,mapActions } from 'vuex'  //必须加{}
    export default{
        data(){
            return{
                msg:'Hello Vuex',
            }
        },
        computed:{ //获取值
            // count(){
            //     return this.$store.getters.count
            // }
            ...mapGetters(['count'])  //过滤简写方式
        },

        methods:{ //方法
            ...mapMutations(['add','remove']), //使用方法 
            // ...mapActions(['addAction','removeAction']) //使用异步方法
        }, //方法实现简写
        store
    }
</script>
