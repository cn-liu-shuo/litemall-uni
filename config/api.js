import {
  request
} from "./request"

// 获取首页数据
export function homeIndex() {
  return request('/home/index')
}

// 获取分类页数据
export function catalogIndex() {
  return request('/catalog/index')
}

// 分类页导航按钮
export function catalogCurrent(id) {
  return request(`/catalog/current?id=${id}`)
}

// 登录
export function authLogin(username, password) {
  return request('/auth/login', {
    username: username,
    password: password
  }, "POST")
}