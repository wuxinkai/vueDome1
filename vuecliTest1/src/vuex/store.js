import Vue from 'vue';
import Vuex from 'vuex'; //（1）下载
Vue.use(Vuex); //（2）引入

const state={ //（3）获取状态
    count:2  //共享值  就被成为 状态
};

const mutations={ //（6）要想改变count必须用mutations 改变状态 
    add(state,n){
        state.count+=n;
    },
    remove(state){
        state.count--;
    }
};

const getters={
    count:function(state){
        return state.count +=100
    }
};
//异步执行
const actions={
    addAction(context){
        context.commit('add',10)
        setTimeout(()=>{
            context.commit('remove')
        },3000)
    },
    removeAction({commit}){ //把commit 包装成对象
        setTimeout(()=>{
            commit('add',10)
        },3000)
        commit('remove')
    }
}

//（4）把数据接口暴漏出去 到count页面
export default new Vuex.Store({
    state,
    mutations,
    getters,  //过滤
    actions
})
