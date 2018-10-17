import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MetaInfo from 'vue-meta-info'
import i18n from './i18n/i18n.js'
import showPage from './directive/show-page/index'

Vue.use(showPage)
Vue.use(MetaInfo)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app', true)