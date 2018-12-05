import request from '@/utils/request'
import { baseUrl } from './config.js'

export function getNewsList (ctx = {}, params, config) {
  return request.get(baseUrl + '/news', params, config)
}

export function getNewDetail (ctx = {}, params, config) {
  return request.get(baseUrl + '/news/detail', params, config)
}

export function searchNews (ctx = {}, params, config) {
  return request.get(baseUrl + '/news', params, config)
}
