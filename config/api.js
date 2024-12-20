import { request } from "./request"

// 获取首页数据
export function homeIndex() {
  return request('/home/index')
}

// 获取分类页数据
export function catalogIndex() {
  return request('/catalog/index')
}