window.onload = function () {
  // 数字动态
  let addNum = document.querySelector('#addNum')
  function add() {
    let i = 300000
    var timer = setInterval(() => {
      if (i < 368082) {
        i += 1002

        addNum.innerText = i
      }
      if (i >= 368082) {
        clearInterval(timer)
      }
    }, 40)
  }
  add()

  // 鼠标移入移除显示隐藏盒子
  let hover = document.querySelector('#hover')
  let mark = document.querySelector('.mark')
  hover.onmouseover = function () {
    mark.style.display = 'block'
  }
  hover.onmouseout = function () {
    mark.style.display = 'none'
  }

  // 今日运单数量

  // 树状图

  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector('.content-bottom'))

  // 指定图表的配置项和数据

  var option = {
    grid: {
      left: '1%',
      right: '1%',
      bottom: '1%',
      containLabel: true,
    },
    tooltip: {},
    xAxis: {
      axisLine: {
        lineStyle: {
          type: 'solid',
          color: '#fff',
          width: '1',
        },
      },
      data: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
      ],
      axisLabel: {
        textStyle: {
          color: '#fff', //坐标的字体颜色
        },
      },
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          type: 'solid',
          color: '#fff',
          width: '1',
        },
      },
      show: true,
      axisTick: {
        show: true, //坐标轴刻度线
      },

      splitLine: {
        show: false,
      },

      axisLabel: {
        textStyle: {
          color: '#fff', //坐标的字体颜色
        },
      },
    },
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [
          5, 13, 3, 6, 7, 17, 10, 5, 6, 7, 17, 10, 5, 6, 7, 17, 10, 2, 4, 6, 7,
          2, 20, 5, 7, 10, 2, 15, 10, 20, 7,
        ],
        barWidth: 10,
        itemStyle: {
          normal: {
            barBorderRadius: [10, 10, 0, 0],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#188df0' },
              { offset: 0.5, color: '#188df0' },
              { offset: 1, color: '#83bff6' },
            ]),
          },
        },
      },
    ],
  }

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)

  // 今日运单数量
  // 正常量
  var myChart2 = echarts.init(
    document.querySelector('.left-first-view > .normal')
  )

  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {},
    grid: {
      left: '0%',
      right: '0%',
      bottom: '2%',
      top: '0',
      containLabel: false,
    },
    xAxis: {
      type: 'value',
      boundaryGap: [4],
    },
    yAxis: [
      {
        // show: true,
        type: 'category',
        data: [''],
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
      },
      {
        data: [],
        // show: true,
        // 不显示y轴的线
        axisLine: {
          show: false,
        },
        // 不显示刻度
        axisTick: {
          show: false,
        },
        // 把刻度标签里面的文字变为白色
        axisLabel: {
          color: '#fff',
        },
      },
    ],
    series: [
      {
        // name: '条',
        type: 'bar',
        data: [80],
        yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 20,
          color: 'green',
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: true,
          position: 'inside',
          formatter: '{c}%',
        },
      },
      {
        // name: '框',
        type: 'bar',
        data: [100],
        yAxisIndex: 1,
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 10,
        itemStyle: {
          color: 'none',
          borderColor: '#00c1de',
          borderWidth: 3,
          barBorderRadius: 4,
        },
      },
    ],
  }

  myChart2.setOption(option)
  /////////////////////////////////////////////////////
  // 临时单
  var myChart3 = echarts.init(
    document.querySelector('.left-first-view > .temporary')
  )

  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {},
    grid: {
      left: '0%',
      right: '0%',
      bottom: '2%',
      top: '0',
      containLabel: false,
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0.1],
    },
    yAxis: [
      {
        // show: true,
        type: 'category',
        data: [''],
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
      },
      {
        data: [],
        // show: true,
        // 不显示y轴的线
        axisLine: {
          show: false,
        },
        // 不显示刻度
        axisTick: {
          show: false,
        },
        // 把刻度标签里面的文字变为白色
        axisLabel: {
          color: '#fff',
        },
      },
    ],
    series: [
      {
        // name: '条',
        type: 'bar',
        data: [15],
        yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 20,
          color: 'orange',
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: true,
          position: 'inside',
          formatter: '{c}%',
        },
      },
      {
        // name: '框',
        type: 'bar',
        data: [100],
        yAxisIndex: 1,
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 10,
        itemStyle: {
          color: 'none',
          borderColor: '#00c1de',
          borderWidth: 3,
          barBorderRadius: 4,
        },
      },
    ],
  }

  myChart3.setOption(option)

  // 异常单
  var myChart4 = echarts.init(
    document.querySelector('.left-first-view > .anomaly')
  )

  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {},
    grid: {
      left: '0%',
      right: '0%',
      bottom: '2%',
      top: '0',
      containLabel: false,
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0.01],
    },
    yAxis: [
      {
        // show: true,
        type: 'category',
        data: [''],
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
      },
      {
        data: [],
        // show: true,
        // 不显示y轴的线
        axisLine: {
          show: false,
        },
        // 不显示刻度
        axisTick: {
          show: false,
        },
        // 把刻度标签里面的文字变为白色
        axisLabel: {
          color: '#fff',
        },
      },
    ],
    series: [
      {
        // name: '条',
        type: 'bar',
        data: [5],
        yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 20,
          color: 'red',
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: true,
          position: 'inside',
          formatter: '{c}%',
        },
      },
      {
        // name: '框',
        type: 'bar',
        data: [100],
        yAxisIndex: 1,
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 10,
        itemStyle: {
          color: 'none',
          borderColor: '#00c1de',
          borderWidth: 3,
          barBorderRadius: 4,
        },
      },
    ],
  }

  myChart4.setOption(option)

  ////////////////////////////////////////////
  // echarts随屏幕尺寸缩放
  window.addEventListener('resize', function () {
    myChart.resize()
  })

  //高德地图
  const map = new AMap.Map('content-map', {
    resizeEnable: true,
    zoom: 14,
    mapStyle: 'amap://styles/darkblue',
    center: [121.605907, 38.888851],
  })
  addMarker()

  function addMarker() {
    var marker1 = new AMap.Marker({
      map: map,
      position: new AMap.LngLat(121.592307, 38.883851), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
      icon: 'img/s_ico4.png',
    })
    var marker2 = new AMap.Marker({
      map: map,
      position: new AMap.LngLat(121.613907, 38.882851), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
      icon: 'img/s_ico4.png',
    })
    var marker3 = new AMap.Marker({
      map: map,
      position: new AMap.LngLat(121.60907, 38.888851), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
      icon: 'img/s_ico4.png',
    })

    var markerList = [marker1, marker2, marker3]
    map.add(markerList)

    marker1.content =
      '<p>ZC1712120023</p>' +
      '<p>起点：配件A厂</p>' +
      '<p>终点：美的冰箱公司</p>' +
      '<p>满载率：95%</p>' +
      '<p>已使用时间：2小时15分</p>'
    marker1.on('click', markerClick)

    marker2.content =
      '<p>ZC1712120023</p>' +
      '<p>起点：配件A厂</p>' +
      '<p>终点：美的冰箱公司</p>' +
      '<p>满载率：95%</p>' +
      '<p>已使用时间：2小时15分</p>'
    marker2.on('click', markerClick)

    marker3.content =
      '<p>ZC1712120023</p>' +
      '<p>起点：配件A厂</p>' +
      '<p>终点：美的冰箱公司</p>' +
      '<p>满载率：95%</p>' +
      '<p>已使用时间：2小时15分</p>'
    marker3.on('click', markerClick)
  }
  // 创建 infoWindow 实例
  var infoWindow = new AMap.InfoWindow({
    offset: new AMap.Pixel(6, -36),
    content: '1', // 可以静态获取信息
  })

  function markerClick(e) {
    // !设置信息窗体内容，可通过该函数动态更新信息窗体中的信息
    // !是动态获取
    infoWindow.setContent(e.target.content)
    // !在地图的指定位置打开信息窗体
    infoWindow.open(map, e.target.getPosition())
  }

  // ?清除窗口
  map.on('click', function () {
    map.clearInfoWindow()
  })

  // 轮播图

  var mySwiper = new Swiper('.swiper', {
    speed: 500,
    slidesPerView: 5,
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
    direction: 'vertical', // 垂直切换选项
    // loop: true, // 循环模式选项
    autoplay: { pauseOnMouseEnter: true },
  })
  //鼠标移入停止播放，鼠标离开  继续轮播
  mySwiper.el.onmouseover = function () {
    mySwiper.autoplay.stop()
  }
  mySwiper.el.onmouseleave = function () {
    mySwiper.autoplay.start()
  }

  // 处理时间
  var now = moment().toDate() //Mon Jul 06 2020 13:50:51 GMT+0800 (中国标准时间)

  now = moment().format('YYYY-MM-DD') //2020-07-06

  let data = document.querySelector('.head-right-time .data')
  data.innerHTML += now

  // 处理星期
  let week = moment().day()
  if (week === 7) {
    week = '星期日'
  }
  if (week === 1) {
    week = '星期一'
  }
  if (week === 2) {
    week = '星期二'
  }
  if (week === 3) {
    week = '星期三'
  }
  if (week === 4) {
    week = '星期四'
  }
  if (week === 5) {
    week = '星期五'
  }
  if (week === 6) {
    week = '星期六'
  }

  let weeks = document.querySelector('.head-right-time .week')
  weeks.innerHTML += week

  function times() {
    let times = moment().format('HH:mm:ss') //当前时间
    let time = document.querySelector('.head-right-time .time')

    time.innerHTML = times
  }
  times()

  setInterval(() => {
    times()
  }, 1000)

  // 进度条
  NProgress.start()
  NProgress.done()

  // 满载率
  var load = document.getElementById('load')
  var result = document.getElementById('result')
  var i = 0
  var i2 = 0
  var i3 = 0
  var timer = setInterval(function () {
    // for(i=0;i<=100;i++){
    // i+=1;
    if (i < 80) {
      i += 1
      load.style.width = i + 4 + '%'
      result.innerText = i + '%'
    }
    if (i >= 80) {
      clearInterval(timer)
    }

    // }
  }, 40)

  // 2.
  var load2 = document.getElementById('load2')
  var result2 = document.getElementById('result2')
  var timer = setInterval(function () {
    // for(i=0;i<=100;i++){
    // i+=1;
    if (i2 < 40) {
      i2 += 1
      load2.style.width = i2 + 4 + '%'
      result2.innerText = i2 + '%'
    }
    if (i2 >= 30) {
      clearInterval(timer)
    }
    // }
  }, 40)

  // 3.
  var load3 = document.querySelector('#load3')
  var result3 = document.getElementById('result3')
  var timer = setInterval(function () {
    // for(i=0;i<=100;i++){
    // i+=1;
    if (i3 < 10) {
      i3 += 1
      load3.style.width = i3 + 4 + '%'
      result3.innerText = i3 + '%'
    }
    if (i3 >= 10) {
      clearInterval(timer)
    }
    // }
  }, 40)

  // ! 4.
  function loadFour() {
    var load4 = document.querySelector('#load4')
    var result4 = document.getElementById('result4')
    let i = 0
    var timer = setInterval(function () {
      // for(i=0;i<=100;i++){
      // i+=1;
      if (i < 60) {
        i += 1
        load4.style.background = 'red'
        load4.style.width = i + 4 + '%'
        result4.innerText = i + '%'
      }
      if (i >= 60) {
        clearInterval(timer)
      }
      // }
    }, 40)
  }
  loadFour()

  // !5.
  function loadFive() {
    var load5 = document.querySelector('#load5')
    var result5 = document.getElementById('result5')
    let i = 0
    var timer = setInterval(function () {
      // for(i=0;i<=100;i++){
      // i+=1;
      if (i < 20) {
        i += 1
        load5.style.background = 'orange'
        load5.style.width = i + 4 + '%'
        result5.innerText = i + '%'
      }
      if (i >= 20) {
        clearInterval(timer)
      }
      // }
    }, 40)
  }

  loadFive()

  // !6.
  function loadSix() {
    var load6 = document.querySelector('#load6')
    var result6 = document.getElementById('result6')
    let i = 0
    var timer = setInterval(function () {
      // for(i=0;i<=100;i++){
      // i+=1;
      if (i < 95) {
        i += 1
        load6.style.background = 'green'
        load6.style.width = i + 4 + '%'
        result6.innerText = i + '%'
      }
      if (i >= 95) {
        clearInterval(timer)
      }
      // }
    }, 40)
  }

  loadSix()

  // !7.
  function loadSeven() {
    var load7 = document.querySelector('#load7')
    var result7 = document.getElementById('result7')
    let i = 0
    var timer = setInterval(function () {
      // for(i=0;i<=100;i++){
      // i+=1;
      if (i < 65) {
        i += 1
        load7.style.background = 'skyBlue'
        load7.style.width = i + 4 + '%'
        result7.innerText = i + '%'
      }
      if (i >= 65) {
        clearInterval(timer)
      }
      // }
    }, 40)
  }
  loadSeven()

  // !8.
  function loadEight() {
    var load8 = document.querySelector('#load8')
    var result8 = document.getElementById('result8')
    let i = 0
    var timer = setInterval(function () {
      // for(i=0;i<=100;i++){
      // i+=1;
      if (i < 15) {
        i += 1
        load8.style.background = 'pink'
        load8.style.width = i + 4 + '%'
        result8.innerText = i + '%'
      }
      if (i >= 15) {
        clearInterval(timer)
      }
      // }
    }, 40)
  }

  loadEight()

  // !9.
  function loadNine() {
    var load9 = document.querySelector('#load9')
    var result9 = document.getElementById('result9')
    let i = 0
    var timer = setInterval(function () {
      // for(i=0;i<=100;i++){
      // i+=1;
      if (i < 75) {
        i += 1
        load9.style.background = 'orange'
        load9.style.width = i + 4 + '%'
        result9.innerText = i + '%'
      }
      if (i >= 75) {
        clearInterval(timer)
      }
      // }
    }, 40)
  }

  loadNine()
}
