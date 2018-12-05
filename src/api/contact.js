import request from '@/utils/request'
import { baseUrl } from './config.js'

export function contact (ctx = {}, params, config) {
  return request.post(baseUrl + '/contact', params, config)
}

export function contactEmail (ctx = {}, params, config) {
  return request.post(baseUrl + '/contact/send', params, config)
}
