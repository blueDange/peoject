window.onload = function () {
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
        data: ['80单'],
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
      },
      {
        data: ['80单'],
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
        data: ['80单'],
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
      },
      {
        data: ['15单'],
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
        data: ['5单'],
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
      },
      {
        data: ['80单'],
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

  // 高的地图

  // 变成手

  var map = new AMap.Map('content-map', {
    mapStyle: 'amap://styles/darkblue', //设置地图的显示样式
    zoom: 11, //级别
    center: [116.397428, 39.90923], //中心点坐标
    viewMode: '3D', //使用3D视图
  })

  // 点标记
  var marker = new AMap.Marker({
    position: new AMap.LngLat(116.39, 39.9),
    offset: new AMap.Pixel(-10, -10),
    icon: '../img/s_ico4.png', // 添加 Icon 图标 URL
    title: '北京',
  })

  map.add(marker)

  var marker1 = new AMap.Marker({
    position: new AMap.LngLat(116.2, 39.9),
    offset: new AMap.Pixel(-13, -74),
    icon: '../img/s_ico4.png', // 添加 Icon 图标 URL
    title: '北京',
  })

  map.add(marker1)

  var marker2 = new AMap.Marker({
    position: new AMap.LngLat(116.3, 39.9),
    offset: new AMap.Pixel(-14, -29),
    icon: '../img/s_ico4.png', // 添加 Icon 图标 URL
    title: '北京',
  })

  map.add(marker2)
  //自定义鼠标样式图标
  function switchCursor(target) {
    var value = target.value
    map.setDefaultCursor(value)
  }

  // 轮播图
  var mySwiper = new Swiper('.swiper', {
    slidesPerView: 5,
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
    direction: 'vertical', // 垂直切换选项
    // loop: true, // 循环模式选项
    autoplay: { pauseOnMouseEnter: true },

    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

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
  }, 30)

  // 2.
  var load2 = document.getElementById('load2')
  var result2 = document.getElementById('result2')
  var timer = setInterval(function () {
    // for(i=0;i<=100;i++){
    // i+=1;
    if (i2 < 40) {
      i2 += 1
      load2.style.width = i + 4 + '%'
      result2.innerText = i + '%'
    }
    if (i2 >= 30) {
      clearInterval(timer)
    }
    // }
  }, 30)

  // 3.
  var load3 = document.querySelector('#load3')
  var result3 = document.getElementById('result3')
  var timer = setInterval(function () {
    // for(i=0;i<=100;i++){
    // i+=1;
    if (i3 < 10) {
      i3 += 1
      load3.style.width = i + 4 + '%'
      result3.innerText = i + '%'
    }
    if (i3 >= 10) {
      clearInterval(timer)
    }
    // }
  }, 30)
}
