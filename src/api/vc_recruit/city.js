import request from '@/utils/request'
import { baseUrl } from './config'

export function getRecruitCityList (ctx = {}, params, config) {
  return request.get(baseUrl + '/city/list', params, config)
}

export function createOrUpdateRecruitCity (ctx = {}, params, config) {
  return request.post(baseUrl + '/city/save', params, config)
}

export function delRecruitCity (ctx = {}, params, config) {
  return request.post(baseUrl + '/city/delete', params, config)
}
