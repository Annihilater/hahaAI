Page({
  data: {
    cardCur: 0,
    english:'',
    chinese:"",
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://6861-hahacoder-2gfmedh2dc1701dd-1304334959.tcb.qcloud.la/2.jpg?sign=9a31dc123908343134d46e5fe4ea8083&t=1607913220'
    }, {
      id: 1,
        type: 'image',
        url: 'https://6861-hahacoder-2gfmedh2dc1701dd-1304334959.tcb.qcloud.la/5.jpg?sign=677a49037982166b088b6e7b765af6f5&t=1607913244',
    }, {
      id: 2,
      type: 'image',
      url: 'https://6861-hahacoder-2gfmedh2dc1701dd-1304334959.tcb.qcloud.la/1.jpg?sign=f456b4ebb5ebe3e1a009010818191196&t=1607913965'
    }, {
      id: 3,
      type: 'image',
      url: 'https://6861-hahacoder-2gfmedh2dc1701dd-1304334959.tcb.qcloud.la/8.jpg?sign=b6e303d0029849942fe12c4c05a9edee&t=1607913587'
    }, {
      id: 4,
      type: 'image',
      url: 'https://6861-hahacoder-2gfmedh2dc1701dd-1304334959.tcb.qcloud.la/3.jpg?sign=bcae53e5a53251ebc46cbee822e835cb&t=1607913690'
    }, {
      id: 5,
      type: 'image',
      url: 'https://6861-hahacoder-2gfmedh2dc1701dd-1304334959.tcb.qcloud.la/4.jpg?sign=1a85795d3f338aa4d08debcf72d93939&t=1607913710'
    }, {
      id: 6,
      type: 'image',
      url: 'https://6861-hahacoder-2gfmedh2dc1701dd-1304334959.tcb.qcloud.la/6.jpg?sign=b643daf0a5df872032278763fec82dcd&t=1607913987'
    }],
  },
  onLoad(){
    let that = this
    wx.request({
      url: 'https://route.showapi.com/1211-1',
      dataType: 'json',
      data:{
        "showapi_appid": '454633', //这里需要改成自己的appid
        "showapi_sign": '9100c8dfb9444c0bae8726c1e53764c0',  //这里需要改成自己的应用的密钥secret
      },
      success(res){
        let resInfo = res.data.showapi_res_body.data[0];
        that.setData({
          english:resInfo.english,
          chinese:resInfo.chinese
        }) 
      }
    })
  },
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
})