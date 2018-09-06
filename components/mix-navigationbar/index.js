const _statusBarHeight = wx.getSystemInfoSync().statusBarHeight

Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },

  properties: {
    enable: {
      type: Boolean,
      value: true
    },
    titleText: {
      type: String,
      value: '',
      observer: '_changeTitle'
    },
    delta: {
      type: Number,
      value: 1
    },
    showLoading: {
      type: Boolean,
      value: false
    },
    customLeft: {
      type: Boolean,
      value: false
    },
    customTitle: {
      type: Boolean,
      value: false
    }
  },

  data: {
    backgroundColor: '#000000',
    textStyle: 'white',
    statusBarHeight: _statusBarHeight
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _changeTitle() {
      if (this.data.titleText === '') {
        this.setData({
          titleText: '微信'
        })
      }
    },
    // 返回按钮监听函数
    _onBackTap() {
      this.triggerEvent('back', {})
      if (this.data.enable) {
        wx.navigateBack({
          delta: this.data.delta
        })
      }
    }
  },

  behaviors: [],

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  created() { },
  attached() { }, // 此处attached的声明会被lifetimes字段中的声明覆盖
  ready() { },
  moved() { },
  detached() {},

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    created() { },
    attached() { },
    ready() { },
    moved() { },
    detached() { },
  },

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show() { },
    hide() { }
  },

  definitionFilter() { }
})
