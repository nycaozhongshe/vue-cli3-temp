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
      show: false,
      component: () => import('@/views/Index/Index.vue')
    },

    {
      path: '/about',
      name: 'about',
      show: false,

      redirect: '/about/company',
      // component: () => import('@/views/About/Index.vue'),
      children: [
        {
          path: '/aboutCompany',
          name: 'aboutCompany',
          component: () => import('@/views/About/Index.vue')
        },
        {
          path: '/aboutBusiness',
          name: 'aboutBusiness',
          component: () => import('@/views/About/Index.vue')
        },
        {
          path: '/aboutPlanning',
          name: 'aboutPlanning',
          component: () => import('@/views/About/Index.vue')
        }
      ]
    },
    {
      path: '/news',
      name: 'news',
      show: false,

      component: () => import('@/views/News/Index.vue'),
      children: [
        {
          path: '/companyNews',
          name: 'companyNews',
          component: () => import('@/views/About/Index.vue')
        },
        {
          path: '/activityNews',
          name: 'activityNews',
          component: () => import('@/views/About/Index.vue')
        },
        {
          path: '/industryNews',
          name: 'industryNews',
          component: () => import('@/views/About/Index.vue')
        }
      ]
    },
    {
      path: '/hr',
      name: 'hr',
      show: false,

      component: () => import('@/views/Hr/Index.vue'),
      children: [
        {
          path: '/talentConcept',
          name: 'talentConcept',
          component: () => import('@/views/About/Index.vue')
        },
        {
          path: '/recruit',
          name: 'recruit',
          component: () => import('@/views/About/Index.vue')
        }
      ]
    },
    {
      path: '/contacts',
      name: 'contacts',
      show: false,

      component: () => import('@/views/Contacts/Index.vue'),
      children: [
        {
          path: '/contactWay',
          name: 'contactWay',
          component: () => import('@/views/About/Index.vue')
        },
        {
          path: '/bbs',
          name: 'bbs',
          component: () => import('@/views/About/Index.vue')
        }

      ]
    }

  ]
})
