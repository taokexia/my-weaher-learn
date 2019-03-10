Page({
  data: {
    backgroundImage: '../../images/cloud.jpg',
    backgroundColor: '#62aadc',
    air: {
      status: 0,
      aqi: 77,
      color: "#00cf9a",
      name: "良"
    },
    current: {
      backgroundImage: "https://tianqi-1d3bf9.tcb.qcloud.la/bg/day/overcast.jpg",
      backgroundColor: "#5c7a93",
      temp: "35",
      wind: "南风",
      windLevel: "1",
      weather: "阴",
      humidity: "73",
      icon: "yin",
      ts: "2018-08-12 14:54"
    },
    today: {
      temp: "24/30",
      icon: "leizhenyu",
      weather: "雷阵雨"
    },
    tomorrow: {
      temp: "24/30",
      icon: "leizhenyu",
      weather: "雷阵雨"
    }
  },
  onLoad() {
    wx.getSystemInfo({
      success: (res) => {
        // 状态栏高度和屏幕宽度
        console.log(res.statusBarHeight, res.windowWidth)
        this.setData({
          paddingTop: res.statusBarHeight + 12
        })
      }
    })
  }
})