import * as echarts from '../../../ec-canvas/echarts';
let confirmedNum = []
let curedNum = []
let deadNum = []

Page({
  onShareAppMessage: function (res) {
    return {
      title: '实时疫情数据展示--hahaAI',
      path: '/pages/lifeItem/CONVID/CONVID'
    }
  },
  onShareTimeline(){
    return {
      title: 'hahaAI',
      desc: '石璞东',
    }
  },
  data: {
    ecBar: {
      onInit(canvas, width, height, dpr) {
        const barChart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        canvas.setChart(barChart);
        getData()
        setTimeout(() => {
          barChart.setOption(getBarOption());
        }, 1500);
        return barChart;
      }
    }
  }
});

function getData(){
  console.log("我要开始加载数据了");
  wx.showToast({
    title: '数据正在加载中...',
    icon:"loading"
  }) 
  wx.request({
    url: 'https://route.showapi.com/2217-2',
    data:{
      "showapi_appid": '454633', //这里需要改成自己的appid
      "showapi_sign": '9100c8dfb9444c0bae8726c1e53764c0',  //这里需要改成自己的应用的密钥secret
    },
    success(res){
      let resData = res.data.showapi_res_body.todayDetailList;
      console.log(resData);
      for(var i =0;i<resData.length;i++){
        if(i==3||i==6||i==7||i==8||i==10||i==13||i==15||i==18||i==19||i==24||i==25){
          confirmedNum.push(resData[i].confirmedNum)
          curedNum.push(resData[i].curedNum)
          deadNum.push(resData[i].deadNum*(-1))
        }
      }
    },
    fail(err){
      console.log(err);
    }
  })
}

function getBarOption() {
  console.log('confirmedNum',confirmedNum);
  console.log('curedNum',curedNum);
  console.log('deadNum',deadNum);
  return {
    color: ['orange', 'green', 'red'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ['确诊人数', '治愈人数', '死亡人数']
    },
    grid: {
      left: 20,
      right: 20,
      bottom: 15,
      top: 40,
      containLabel: true
    },
    xAxis: [
      {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#666'
        }
      }
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: { show: true },
        
        data: ['福建省','内蒙古自治区','陕西省','云南省','江苏省','天津市','山西省','重庆市','广西壮族自治区','河北省','辽宁省'],
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#666'
        }
      }
    ],
    series: [
      {
        name: '确诊人数',
        type: 'bar',
        label: {
          normal: {
            show: true,
            position: 'right',
            color:'orange'
          }
        },
        data: confirmedNum
      },
      {
        name: '治愈人数',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'right',
            color:"green"
          }
        },
        data: curedNum
      },
      {
        name: '死亡人数',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true, 
            color:"red",
            position: 'left'
          }
        },
        data: deadNum
      }
    ]
  };
}
