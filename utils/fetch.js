const BASE_URL ="https://locally.uieee.com/"
export default(url,data)=> {
  return new Promise((resolve,reject)=>{
    wx.showLoading({
      title: '拼命加载中。。。',
      mask:true
    }),
      wx.request({
      url: `${BASE_URL}${url}`, //仅为示例，并非真实的接口地址
        success: function (res) {
          // console.log(res.data)
          resolve(res)
        },
        fail:function(err){
          reject(err)
        },
        complete:function(res){
          wx.hideLoading()
        }
      })
  })
}