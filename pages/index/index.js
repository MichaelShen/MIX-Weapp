Page({
  data: {
    title: '自定义导航栏标题'
  },
  gotoPage (e) {
    let page = e.currentTarget.dataset.page
    wx.navigateTo({
      url: `/pages/${page}/${page}`
    })
  }
})
