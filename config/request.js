const base_url = 'http://admin.bsmall.byesame.com/wx'
import {
  myHeader
} from "../utils/utils"

export function request(url, data = {}, method = "GET") {
  return new Promise((resolve, reject) => {
    uni.request({
      url: base_url + url,
      data,
      method,
      header: {
        "x-byesame-token": myHeader()
      },
      success: res => resolve(res),
      fail: res => reject(res)
    })
  })
}