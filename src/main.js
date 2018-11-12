import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MetaInfo from 'vue-meta-info'
// import i18n from './i18n/i18n.js'
import VueLazyload from 'vue-lazyload'
// import VueProgressiveImage from 'vue-progressive-image'
import './style/element-variables.scss'
import '@/router/permission'
import '@/style/index.scss'
const baseUrl = process.env.BASE_URL
// 懒加载
Vue.use(VueLazyload, {
  error: `${baseUrl}imgs/common/error.png`,
  loading: `${baseUrl}imgs/common/loading.gif`
})
// 渐进式图片加载
// Vue.use(VueProgressiveImage, {

// })

Vue.use(MetaInfo)
Vue.use(VueLazyload)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // i18n,
  render: h => h(App)
}).$mount('#app', true)
