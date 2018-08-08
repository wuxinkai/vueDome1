import Vue from 'vue' //vue
import Router from 'vue-router' //路由
import HelloWorld from '@/components/HelloWorld' //引入组件
import Hi from '@/components/Hi'  //（1）自己写的引入组件
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Many from '@/components/Many'
import M1 from '@/components/M1'
import M2 from '@/components/M2'
//url获取参数
import Canshu from '@/components/Canshu' //父亲
import Can1 from '@/components/Can1'  //儿子
import Error from '@/components/Error'
import GouZi from '@/components/GouZi'
import Count from '@/components/Count'
import Count1 from '@/components/Count1'
import Count3 from '@/components/Count3'
import Count2 from '@/components/Count2'
import Count4 from '@/components/Count4'
import pos from '@/components/pos'


Vue.use(Router); //中间件；

export default new Router({
  mode:'hash', // hash  在路径加加#号  history：路径不加#号
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld, //组件
      alias:'/home'  //起别名
    },
    { //（2）自己写的
      path: '/Hi',
      // name: 'Hi',  //有子路由 这里的name是不起作用的
      component: Hi, //（3）组件
      children:[
        {path:'/',name: '当前页面',component:Hi},
        {path:'hi1',name: 'hi1',component:Hi1}, //不要在path前加 /
        {path:'hi2',name: 'Hi的子页面2',component:Hi2},
      ]
    },
    {
      path: '/Canshu',
      component: Canshu,
      children: [
        {path: '/', name: '路径传递参数,父', component: Canshu},
        {path: 'Can1/:newsId/:newsTitle', name: '获取参数', component: Can1},
      ]
    },
    { //单页面多路由
      path: '/Many',
      components: { //这多了一个s
        default:Many,
        left:M1,
        right:M1
      }
    },
    {//重定向
      path: '/ChongDingXiang',  //点击 ChongDingXiang 就会回到首页
      redirect:'/'  //首页路径
    },
    {//重定向 加参数
      path: '/ChongDingXiang/:newsId/:newsTitle',  //重定向 加参数
      redirect:'Canshu/Can1/:newsId/:newsTitle'  //跳转到的页面
    },
    { //在路径使用 alias别名的使用
      path: '/Canshu',
      component: Canshu,
      alias:'/BieMing'
    },
    { //404  我们乱输入路径  结果就是404
      path: '*',
      component: Error,
    },
    {
      path: '/GouZi',
      component: GouZi,
      // beforeEnter:(to,from,next)=>{  //进入钩子函数
      //   console.log(to); //o:路由将要跳转的路径信息，信息是包含在对像里边的
      //   console.log(from); //from:路径跳转前的路径信息，也是一个对象的形式。
      //   next(); //next:路由的控制参数，常用的有next(true)和next(false)。
      // }
    },

    //-------------------vuex内容----------------------------------
    {
      path: '/Count',
      component: Count,
    },
    {
      path: '/Count1',
      component: Count1,
    },
    {
      path: '/Count3',
      component: Count3,
    },
    {
      path: '/Count2',
      component: Count2,
    },
    {
      path: '/Count4',
      component: Count4,
    },
{
    path: '/pos',
        component: pos,
},
  ]
})
