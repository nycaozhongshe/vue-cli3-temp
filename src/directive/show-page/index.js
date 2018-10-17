import show from './show'

const install = function (Vue) {
  Vue.directive('show-page', show)
}

if (window.Vue) {
  window['show-page'] = show
  Vue.use(install); // eslint-disable-line
}

show.install = install
export default show
