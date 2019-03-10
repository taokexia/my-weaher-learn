import { geocoder } from '../../lib/api'
// 填写 env
wx.cloud.init({
  env: ''
})

// 地图 key
const QQ_MAP_KEY = 'NZ4BZ-WCC36-5LDS3-ECV7V-CB5CO-HIBIP'

/**
 *  逆经纬度查询
 * @param {*} lat
 * @param {*} lon
 */
export const geocoder = (lat, lon, success = () => {}, fail = () => {}) => {
  return wx.request({
    url: 'https://apis.map.qq.com/ws/geocoder/v1/',
    data: {
      location: `${lat},${lon}`,
      key: QQ_MAP_KEY,
      get_poi: 0
    },
    success,
    fail
  })
}

export const test = () => {
  return wx.cloud.callFunction({
    name: 'test',
    data: {
      a: 1,
      b: 3
    }
  })
}

export const test2 = () => {
  return wx.cloud.callFunction({
    name: 'test2'
  })
}
