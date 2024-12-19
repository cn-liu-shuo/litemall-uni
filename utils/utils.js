// 获取本地缓存请求头
export function myHeader() {
  let header = {}
  header = uni.getStorageSync("token")
  return header
}