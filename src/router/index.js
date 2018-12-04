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
      footerHidden: true,
      component: () => import('@/views/Index/Index.vue')
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About/Index.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('@/views/News/Index.vue')
    },
    {
      path: '/hr',
      name: 'hr',
      component: () => import('@/views/Hr/Index.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('@/views/Contacts/Index.vue')
    }

  ]
})
