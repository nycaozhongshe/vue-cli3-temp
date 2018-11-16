import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MetaInfo from 'vue-meta-info'
// import i18n from './i18n/i18n.js'
import VueLazyload from 'vue-lazyload'
// import VueProgressiveImage from 'vue-progressive-image'
// import './style/element-variables.scss'
import '@/router/permission'
import '@/style/index.scss'

import elementUiComponent from '@/element-ui-component'

const baseUrl = process.env.BASE_URL
// 懒加载
Vue.use(VueLazyload, {
  error: `${baseUrl}imgs/common/error.png`,
  loading: `${baseUrl}imgs/common/loading.gif`
})
// 渐进式图片加载
// Vue.use(VueProgressiveImage, {

// })
Vue.use(elementUiComponent)
Vue.use(MetaInfo)
Vue.use(VueLazyload)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // i18n,
  render: h => h(App),
  /* 这句非常重要，否则预渲染将不会启动 */
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app', true)
