import Vue from 'vue'
import Router from 'vue-router'
import Order from 'components/order/order'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/',
  		redirect: '/order'
  	},
    {
    	path: '/order',
    	component: Order
    }
  ]
})
