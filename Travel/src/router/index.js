import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home/Home'
import City from '@/view/City/City'
import Detail from '@/view/Detail/Detail'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      name:'Home',
      component:Home
    },
    {
      path:'/city',
      name:'City',
      component:City
    },
    {
      path:'/detail',
      name:'Datail',
      component:Detail
    }
  ]
})
