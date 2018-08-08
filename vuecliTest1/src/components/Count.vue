<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3 style="font-size: 40px">'$store.state.count实现：{{$store.state.count}}</h3>
        <h3 style="font-size: 40px">通过computed实现的：{{count}}</h3>
        <p>
            <button @click="$store.commit('add',1)">add</button>
            <button @click="$store.commit('remove')">remove</button>
        </p>
    </div>
</template>
<script>
    import store from '@/vuex/store'//（5） 引入
    export default{
        data(){
            return{
                msg:'Hello Vuex',
            }
        },
        computed:{ //经过一次跳板
            count(){
                return this.$store.state.count
            }
        },
        store
    }
</script>
