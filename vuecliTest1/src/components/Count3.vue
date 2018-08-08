<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        
        <h3 style="font-size: 40px">通过computed实现的：{{count}}</h3>
        <p>
            <button @click="$store.commit('add')">add</button>
            <button @click="$store.commit('remove')">remove</button>
        </p>
    </div>
</template>
<script>
    import store from '@/vuex/store'//（5） 引入
    //mapState 获取内容
    import { mapState } from 'vuex'// 第三种绑定内容的方法
    export default{
        data(){
            return{
                msg:'Hello Vuex',
            }
        },
        //利用mapState 帮值  对象形式  获取
        // computed: mapState({ 
        //     count:state => state.count
        // }),

        computed: { //s数组形式  获取
            ...mapState(['count'])
        },
        store
    }
</script>
