import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MetaInfo from 'vue-meta-info'
import i18n from './i18n/i18n.js'
import VueLazyload from 'vue-lazyload'
// import VueProgressiveImage from 'vue-progressive-image'
import '@/router/permission'
import '@/style/index.scss'
import elementUiOptions from '@/pluginConfig/elementUi'

// import VueLazyloadOptions from '@/pluginConfig/vueLazyload.js'
// VueLazyloadOptions
// 懒加载
Vue.use(VueLazyload, {})

// 渐进式图片加载
// Vue.use(VueProgressiveImage, {

// })
// 按需引入组件
Vue.use(elementUiOptions)
// seo
Vue.use(MetaInfo)

Vue.prototype.$baseUrl = process.env.BASE_URL
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  /* 这句非常重要，否则预渲染将不会启动 */
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app', true)
