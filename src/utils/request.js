/*
 * @Author: caozhongshe
 * @Date: 2018-08-14 15:25:55
 * @Last Modified by: caozhongshe
 * @Last Modified time: 2018-11-16 14:38:09
 */
// import router from '../router/index'
import axios from 'axios'
import { Message } from 'element-ui'
import { showFullScreenLoading, tryHideFullScreenLoading } from './loading'

// 创建axios实例
export const service = axios.create({
  timeout: 30000 // 请求超时时间
})

let interceptor = response => {
  return true
}

// request拦截器
service.interceptors.request.use(
  config => {
    if (config.showLoading) {
      showFullScreenLoading()
    }
    config.data = JSON.stringify(config.data)
    config.headers = { 'Content-Type': 'application/json' }
    Object.assign(config.headers, {
      token: localStorage.getItem('t') || null
    })
    Object.assign(config.headers, {
      userId: localStorage.getItem('userId') || null
    })
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    tryHideFullScreenLoading()
    if (interceptor(response)) {
      return response.data
    } else {
      return Promise.reject(response.data)
    }
  },
  error => {
    tryHideFullScreenLoading()
    console.log('err' + error) // for debug
    if (error === 'Cancel') {
      error = {
        message: '重复提交'
      }
    }
    Message({
      message: error.message || error,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export const post = (url, data, config = { showLoading: true }) => {
  return service.post(url, data, config)
}

export const get = (url, data, config = { showLoading: true }) => {
  return service.get(url, { params: data }, config)
}

export default {
  post, get, service
}
