// pages/navigationbar.js
Page({
  data: {
    title: '自定义导航栏标题',
    loading: false,
    customLeft: true,
    customTitle: true
  },

  onTapSetTitle() {
    this.setData({
      title: 'MIX Weapp'
    })
  },

  onTapSetLoading() {
    this.setData({
      loading: true
    })

    setTimeout(() => {
      this.setData({
        loading: false
      })
    }, 3000)
  }
})