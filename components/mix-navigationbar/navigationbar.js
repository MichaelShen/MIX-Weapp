// components/mix-navigationbar/navigationbar.js
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titleText: {
      type: String,
      value: ''
    },
    titleImage: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    backgroundColor: '#000000',
    textStyle: 'white',
    titleText: '',
    statusBarHeight: app.globalData.systemInfo.statusBarHeight,
    loading: false,
    titleImage: 'https://qnm.hunliji.com/o_1clfq7bnp1edv12kp104s1leon567.jpg'
  },

  /**
   * 组件的方法列表
   */
  methods: {

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
