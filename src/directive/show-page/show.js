import throttle from './throttle'

let listenAction
let show
const unwatch = () => {
  window.removeEventListener('scroll', listenAction)
}
const watch = () => {
  window.addEventListener('scroll', listenAction)
}
const clientHeight = window.document.body.clientHeight || window.document.documentElement.clientHeight

export default {
  bind (el, binding) {
    listenAction = throttle(() => {
      const offsetTop = el.getBoundingClientRect().top
      if (offsetTop <= clientHeight) {
        show = true
      } else {
        show = false
      }
      binding.value.show(show)
    })

    watch()
  },

  unbind: unwatch,

  update (el, binding) {

  }
}
