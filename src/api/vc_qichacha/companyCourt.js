import request from '@/utils/request'
import { baseUrl } from './config.js'
export function getCompanyCour (ctx = {}, params, config) {
  return request.get(baseUrl + '/company/court', params, config)
}
