import fetch from '../../utils/fetch.js';

Page({
  onLoad(){    
    // 获取轮播图
    this.getSlidesData();
    this.getCategories()
  },
  // 获取轮播图
  getSlidesData(){
    fetch('slides').then(res => {
      console.log(res.data[0].image)
      this.setData({
        slides:res.data
      })
      
    })
  },
  // 获取分类
  getCategories(){
    fetch('categories').then(res=>{
      // console.log(res)
      this.setData({
        categories:res.data
      })
    })
  }
})
