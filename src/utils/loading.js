import { Loading } from 'element-ui'
let needLoadingRequestCount = 0

let loadingInstance = null

export function startLoading () {
  loadingInstance = Loading.service({
    text: '加载中……',
    fullscreen: true,
    lock: true,
    customClass: 'loading-color'
  })
}

export function endLoading () {
  loadingInstance.close()
}
export function showFullScreenLoading () {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

export function tryHideFullScreenLoading () {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}
