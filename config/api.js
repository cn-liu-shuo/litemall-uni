const base_url = 'http://admin.bsmall.byesame.com/wx'

// 获取首页数据
export function homeIndex() {
  return new Promise((resolve,reject) => {
    uni.request({
      url: base_url + '/home/index',
      method: 'GET',
      success: res => resolve(res),
      fail: res => reject(res)
    })
  })
}