import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: [

    {
      path: '/',
      name: 'index',
      component: () => import('@/views/Index/Index.vue')
    },

    {
      path: '/abnormalDetail',
      name: 'abnormalDetail',
      component: () => import('@/views/AbnormalDetail/Index.vue')
    },

    {
      path: '/courtDetail',
      name: 'courtDetail',
      component: () => import('@/views/CourtDetail/Index.vue')
    }
  ]
})
