import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home/Home'
import City from '@/view/City/City'
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
    }
  ]
})
