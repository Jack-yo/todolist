//app.js


App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

    if (wx.getStorageSync('radioItems')) this.globalData.radioItems=wx.getStorageSync('radioItems');
  },
  globalData: {
    userInfo: null,
    
    radioItems: [
 /*     { name: '任务', value: '0', checked: true ,text:'156515'},
      { name: '吃饭', value: '1', checked: true ,text:'12126545'},
      { name: '运动', value: '2', checked: false,text:'516545'},
      { name: '作业', value: '4', checked: false,text:'2651651' }*/
    ],
  },

       onHide:function(){

          wx.setStorageSync('radioItems', this.globalData.radioItems);
       }
})