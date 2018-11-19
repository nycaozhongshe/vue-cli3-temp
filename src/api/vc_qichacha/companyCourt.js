import request from '@/utils/request'
import { baseUrl } from './config.js'

export function getCompanyCour (ctx = {}, params, config) {
  return request.get(baseUrl + '/company/court', params, config)
}

export function getCompanyExcept (ctx = {}, params, config) {
  return request.get(baseUrl + '/company/except', params, config)
}

export function getCompany (ctx = {}, params, config) {
  return request.get(baseUrl + '/company', params, config)
}
