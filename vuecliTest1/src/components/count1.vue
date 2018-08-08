<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3 style="font-size: 40px">{ mapState }实现：{{count}}</h3>
        <p>
            <span >mapMutations</span>
            <!-- add是vue写的方法名 ，第二个是参数 -->
            <button @click="$store.commit('add',5)">给vuex里的add方法穿参数</button>
            <button @click="remove">remove</button>
        </p>
    </div>
</template>
<script>
    import store from '@/vuex/store'
    // mapState 获取vuex里的内容
    //mapMutations 使用vuex里面的方法，修改状态
    import { mapState,mapMutations } from 'vuex'  //必须加{}
    export default{
        data(){
            return{
                msg:'Hello Vuex',
            }
        },
        computed:{ //获取值
            ...mapState(['count']),//参数实现简写
            // count(){
            //     return this.$store.getters.count; //实现过滤
            // }
            //...mapGetters(['count']), //上面的简写
        },

        methods:{ //方法
            ...mapMutations(['add','remove']), //操作数据 使用方法
        }, //方法实现简写
        store
    }
</script>
