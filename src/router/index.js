import Vue from 'vue'
import Router from 'vue-router'
import Myorder from '@/components/myorders/myorder'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'myorder',
      component: require('../components/myorders/myorder.vue')
    },
    {
      path: '/userrating/:type',
      name: 'userrating',
      component: require('../components/userrating/userrating.vue')
    }
  ]
})
