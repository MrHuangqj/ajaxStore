import Vue from 'vue'
import Router from 'vue-router'
import Order from '@/components/Order/Order'
import Goods from '@/components/goods/goods'
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/Order',
      name: 'Order',
      component: Order
    },
    {
      path:'/',
      name:'Goods',
      component:Goods
    }
  ]
})
