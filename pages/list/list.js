// pages/list/list.js
import fetch from '../../utils/fetch.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:-1,
    pageIndex:0,
    pageSize:10,
    shops:[],
    hasMore:true,
    isLoading:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    this.data.id=options.id;
    wx.setNavigationBarTitle({
      title: options.name,
    }),
      this.getShopList();
  },
  getShopList(){
    if(!this.data.hasMore) return;
    if(this.data.isLoading) return;
    this.data.isLoading = true;
    this.data.pageIndex++;
    
    const url = `categories/${this.data.id}/shops?_page=${this.data.pageIndex}&_limit=${this.data.pageSize}`;
    fetch(url).then(res=>{     
      wx.stopPullDownRefresh()

      // 获取总条数
      // console.log(res.header)
      const totalNum = parseInt(res.header['X-Total-Count']);
      this.setData({
        shops:this.data.shops.concat(res.data),
        hasMore:this.data.shops.length<totalNum
      })
      // console.log(this.data.shops)
      this.data.isLoading = false;
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.data.pageIndex=0;    
    this.setData({
      hasMore:true,
      shops:[]
    },()=>{
      this.getShopList()
    })
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getShopList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})