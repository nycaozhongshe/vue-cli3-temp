
const baseUrl = process.env.BASE_URL

export default {
  preLoad: 1.3,
  error: `${baseUrl}__imgs/common/error.png`,
  loading: `${baseUrl}__imgs/common/loading.gif`,
  attempt: 1,
  observer: false,
  filter: {
    // progressive (listener, options) {
    //   const isCDN = /qiniudn.com/
    //   if (isCDN.test(listener.src)) {
    //     listener.el.setAttribute('lazy-progressive', 'true')
    //     listener.loading = listener.src + '?imageView2/1/w/10/h/10'
    //   }
    // },
    webp (listener, options) {
      if (!options.supportWebp) return
      let src = listener.src
      const reg = /^(__imgs)+$/
      if (reg.test(src)) {
        listener.src = (src.replace(/(\.jpg|\.png)/g, '.webp'))
      }
    }
  }
}
