// 获取本地缓存请求头
export function myHeader() {
  let header = {}
  if (uni.getStorageSync("token")) {
    header = uni.getStorageSync("token")
  }
  return header
}

// 判断是否登录
export function isLogin() {
  if (!uni.getStorageSync("token")) {
    // 轻提示
    uni.showToast({
      title: '未登录',
      icon: 'error'
    })
  }
}