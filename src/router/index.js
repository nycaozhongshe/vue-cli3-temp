import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/con',
          name: 'con',
          component: () => import('@/views/Contacts.vue')
        }
      ]
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('@/views/Contacts.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('@/views/Map.vue')
    }
  ]
})
