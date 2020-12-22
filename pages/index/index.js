const app = getApp();
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: [{
        title: 'MNIST手写字识别',
        img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
        url: '/indexes/indexes'
    },
      {
        title: '摸脸检测',
        img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
        url: '/animation/animation'
      },
      {
        title: '全屏抽屉',
        img: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
        url: '/drawer/drawer'
      },
      {
        title: '垂直导航',
        img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
        url: '/verticalnav/verticalnav'
      }
    ]
  },
  methods: {
    toChild(e) {
      wx.showModal({
        title: '提示',
        content: '店面正在升级装修，敬请期待！',
      }) 
      // wx.navigateTo({
      //   url: '/pages/plugin' + e.currentTarget.dataset.url
      // })
    },
    onShareAppMessage: function () {
      return {
        title: 'hahaAI',
        desc: '石璞东',
      }
    },
    onShareTimeline: function (res) {
      return {
        title: 'hahaAI',
        desc: '石璞东',
      }
    }
    
  }
    
});