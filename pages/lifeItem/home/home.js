Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    elements: [
      // {
    //     title: '数据监控',
    //     name: 'CONVID',
    //     color: 'cyan',
    //     icon: 'notification'
    //   },
      {
        title: '天气预报',
        name: 'weather',
        color: 'blue',
        icon: 'clothes'
      },
      {
        title: '快递查询',
        name: 'express',
        color: 'purple',
        icon: 'deliver_fill'
      },
      {
        title: '每日分享',
        name: 'share',
        color: 'pink',
        icon: 'edit'
      }
    ],
  },
  methods:{
    onShareAppMessage(){
      return {
        title: 'hahaAI',
        desc: '石璞东',
      }
    },
    onShareTimeline(){
      return {
        title: 'hahaAI',
        desc: '石璞东',
      }
    }
  }
})