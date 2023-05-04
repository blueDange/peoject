$(function () {
  //页面淡入效果
  $(".animsition").animsition({
    inClass: "fade-in",
    outClass: "fade-out",
    inDuration: 300,
    outDuration: 1000,
    loading: false,
    loadingParentElement: "body", //animsition wrapper element
    loadingClass: "animsition-loading",
    unSupportCss: [
      "animation-duration",
      "-webkit-animation-duration",
      "-o-animation-duration",
    ],
    overlay: false,
    overlayClass: "animsition-overlay-slide",
    overlayParentElement: "body",
  });
  document.onreadystatechange = subSomething;
  function subSomething() {
    if (document.readyState == "complete") {
      $("#loader").hide();
    }
  }
  // 单选
  var unSelected = "#FFF";
  var selected = "#FFF";
  $(function () {
    $("#select1").css("color", unSelected);
    $("#select1>option").css("color", selected);
    $("#select1").change(function () {
      var selItem = $(this).val();
      if (selItem == $(this).find("option:first").val()) {
        $(this).css("color", unSelected);
      } else {
        $(this).css("color", selected);
      }
    });
  });

  //顶部时间
  function getTime() {
    var myDate = new Date();
    var myYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
    var myMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
    var myToday = myDate.getDate(); //获取当前日(1-31)
    var myDay = myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
    var myHour = myDate.getHours(); //获取当前小时数(0-23)
    var myMinute = myDate.getMinutes(); //获取当前分钟数(0-59)
    var mySecond = myDate.getSeconds(); //获取当前秒数(0-59)
    var week = [
      "星期日",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六",
    ];
    var nowTime;

    nowTime =
      myYear +
      "-" +
      fillZero(myMonth) +
      "-" +
      fillZero(myToday) +
      "&nbsp;&nbsp;" +
      week[myDay] +
      "&nbsp;&nbsp;" +
      fillZero(myHour) +
      ":" +
      fillZero(myMinute) +
      ":" +
      fillZero(mySecond);
    $(".topTime").html(nowTime);
  }

  function fillZero(str) {
    var realNum;
    if (str < 10) {
      realNum = "0" + str;
    } else {
      realNum = str;
    }
    return realNum;
  }
  setInterval(getTime, 1000);

  function totalNum(obj, speed) {
    var singalNum = 0;
    var timer;
    var totalNum = obj.attr("total");

    if (totalNum) {
      timer = setInterval(function () {
        singalNum += speed;
        if (singalNum >= totalNum) {
          singalNum = totalNum;
          clearInterval(timer);
        }
        obj.html(singalNum);
      }, 1);
    }
  }

  //高德地图
  var myMap = new AMap.Map("myMap", {
    resizeEnable: true,
    zoom: 14,
    mapStyle: "amap://styles/darkblue",
    center: [103.752171, 36.068716],
  });
  var point = [
    [103.752171, 36.068716],
    [103.759037, 36.072046],
    [103.73788, 36.061257],
    [103.75622, 36.061247],
  ];

  //地图类型切换
  myMap.plugin(["AMap.MapType"], function () {
    var type = new AMap.MapType();
    myMap.addControl(type);
  });
  var maker;
  var markers = [];
  var preIcon, clickIcon;

  for (var i = 0; i < point.length; i += 1) {
    var marker = new AMap.Marker({
      position: point[i],
      map: myMap,
      icon: SetIcon(i),
      size: new AMap.Size(34, 41),
      imageSize: new AMap.Size(17,20),
    });
    marker.content =
      "<div class='map-circle-Big'>" +
      "<div class='map-circle-img'>" +
      "<img src='./static/images/circle-img.png'/>" +
      "</div>" +
      "<div class='map-circle-p'>" +
      "<p class='map-circle-one'>北栅口闸</p>" +
      "<p class='map-circle-custom'>客户：海宁袁花圩区</p>" +
      "</div>" +
      "</div>" +
      "<p class='map-circle-temperature1'>1号泵 温度: 19.3℃ 湿度: 62.5% 内河: 0cm</p>" +
      "<p class='map-circle-temperature2'>1号泵 温度: 19.3℃ 湿度: 62.5% 内河: 0cm</p>" +
      "<p class='map-circle-count');>查看详情</p>";
    marker.on("click", markerClick);
    markers.push(marker);
    
  }
  function SetIcon(e) {
    if ((e === 0)) {
      return "./static/images/s_icon4x.png"
    }
    if ((e === 1)) {
      return "./static/images/s_icon4x.png"
    }
    if ((e === 2)) {
      return "./static/images/s_ico4b.png"
    }
    if ((e === 3)) {
      return "./static/images/s_ico4b.png"
    }
  }


  var infoWindow = new AMap.InfoWindow({
    offset: new AMap.Pixel(16, -36),
  });
  // preIcon = new AMap.Icon({
  //   image: "./static/images/s_ico4a.png",
  //   size: new AMap.Size(34, 41), //图标大小
  //   imageSize: new AMap.Size(34, 41),
  // });
  // clickIcon = new AMap.Icon({
  //   image: "./static/images/s_ico4b.png",
  //   size: new AMap.Size(34, 41), //图标大小
  //   imageSize: new AMap.Size(34, 41),
  // });

  function markerClick(e) {
    infoWindow.setContent(e.target.content);
    infoWindow.open(myMap, e.target.getPosition());
    for (var i = 0; i < markers.length; i++) {
      markers[i].setIcon(preIcon);
    }
    e.target.setIcon(clickIcon);
    $(".map-circle-count").on("click", function () {
      $(".popup").show();
      $(".popup").width("3px");
      $(".popup").animate(
        {
          height: "82%",
        },
        400,
        function () {
          $(".popup").animate(
            {
              width: "82%",
            },
            400
          );
        }
      );
      setTimeout(summaryShow, 800);
    });
  }
  myMap.on("click", function () {
    infoWindow.close();
  });
  $(".dot-box1").on("click", function (e) {
    let point = [
      [103.752171, 36.068716],
      [103.759037, 36.072046],
      [103.73788, 36.061257],
      [103.75622, 36.061247],
    ];
    let markers = [];
    for (var i = 0; i < point.length; i += 1) {
      var marker = new AMap.Marker({
        position: point[i],
        map: myMap,
        icon: SetIcon(i),
        size: new AMap.Size(34, 41),
        imageSize: new AMap.Size(50, 50),
      });
      marker.content =
        "<div class='map-circle-Big'>" +
        "<div class='map-circle-img'>" +
        "<img src='./static/images/circle-img.png'/>" +
        "</div>" +
        "<div class='map-circle-p'>" +
        "<p class='map-circle-one'>北栅口闸</p>" +
        "<p class='map-circle-custom'>客户：海宁袁花圩区</p>" +
        "</div>" +
        "</div>" +
        "<p class='map-circle-temperature1'>1号泵 温度: 19.3℃ 湿度: 62.5% 内河: 0cm</p>" +
        "<p class='map-circle-temperature2'>1号泵 温度: 19.3℃ 湿度: 62.5% 内河: 0cm</p>" +
        "<p class='map-circle-count');>查看详情</p>";
      marker.on("click", markerClick);
      markers.push(marker);
    }
    function SetIcon(e) {
      if ((e === 0)) {
        console.log("show_s_1");
        return "./static/images/s_icon4x.png"
      }
      if ((e === 1)) {
        return "./static/images/s_icon4x.png"
      }
      if ((e === 2)) {
        return "./static/images/s_ico4b.png"
      }
      if ((e === 3)) {
        return "./static/images/s_ico4b.png"
      }
    }

    var infoWindow = new AMap.InfoWindow({
      offset: new AMap.Pixel(16, -36),
    });
    function markerClick(e) {
      infoWindow.setContent(e.target.content);
      infoWindow.open(myMap, e.target.getPosition());
      for (var i = 0; i < markers.length; i++) {
        markers[i].setIcon(preIcon);
      }
      e.target.setIcon(clickIcon);
      $(".map-circle-count").on("click", function () {
        $(".popup").show();
        $(".popup").width("3px");
        $(".popup").animate(
          {
            height: "82%",
          },
          400,
          function () {
            $(".popup").animate(
              {
                width: "82%",
              },
              400
            );
          }
        );
        setTimeout(summaryShow, 800);
      });
    }
    myMap.on("click", function () {
      infoWindow.close();
    });
  });
  $(".dot-box2").on("click", function (e) {
    let point = [
      [103.752171, 36.068716],
      [103.759037, 36.072046],
      [103.73788, 36.061257],
      [103.75622, 36.061247],
    ];
    let markers = [];
    for (var i = 0; i < point.length; i += 1) {
      var marker = new AMap.Marker({
        position: point[i],
        map: myMap,
        icon: SetIcon(i),
        size: new AMap.Size(34, 41),
        imageSize: new AMap.Size(50, 50),
      });
      marker.content =
        "<div class='map-circle-Big'>" +
        "<div class='map-circle-img'>" +
        "<img src='./static/images/circle-img.png'/>" +
        "</div>" +
        "<div class='map-circle-p'>" +
        "<p class='map-circle-one'>北栅口闸</p>" +
        "<p class='map-circle-custom'>客户：海宁袁花圩区</p>" +
        "</div>" +
        "</div>" +
        "<p class='map-circle-temperature1'>1号泵 温度: 19.3℃ 湿度: 62.5% 内河: 0cm</p>" +
        "<p class='map-circle-temperature2'>1号泵 温度: 19.3℃ 湿度: 62.5% 内河: 0cm</p>" +
        "<p class='map-circle-count');>查看详情</p>";
      marker.on("click", markerClick);
      markers.push(marker);
    }
    function SetIcon(e) {
      if ((e === 0)) {
        return "./static/images/show_s_1.png"
      }
      if ((e === 1)) {
        return "./static/images/show_s_2.png"
      }
      if ((e === 2)) {
        return "./static/images/show_s_3.png"
      }
      if ((e === 3)) {
        return "./static/images/show_s_4.png"
      }
    }
  

    var infoWindow = new AMap.InfoWindow({
      offset: new AMap.Pixel(16, -36),
    });
    function markerClick(e) {
      infoWindow.setContent(e.target.content);
      infoWindow.open(myMap, e.target.getPosition());
      for (var i = 0; i < markers.length; i++) {
        markers[i].setIcon(preIcon);
      }
      e.target.setIcon(clickIcon);
      $(".map-circle-count").on("click", function () {
        $(".popup").show();
        $(".popup").width("3px");
        $(".popup").animate(
          {
            height: "82%",
          },
          400,
          function () {
            $(".popup").animate(
              {
                width: "82%",
              },
              400
            );
          }
        );
        setTimeout(summaryShow, 800);
      });
    }
    myMap.on("click", function () {
      infoWindow.close();
    });
  });
  $(".dot-box3").on("click", function (e) {
    let point = [
      [103.752171, 36.068716],
      [103.759037, 36.072046],
      [103.73788, 36.061257],
      [103.75622, 36.061247],
    ];
    let markers = [];
    for (var i = 0; i < point.length; i += 1) {
      var marker = new AMap.Marker({
        position: point[i],
        map: myMap,
        icon: SetIcon(i),
        size: new AMap.Size(34, 41),
        imageSize: new AMap.Size(50, 50),
      });
      marker.content =
        "<div class='map-circle-Big'>" +
        "<div class='map-circle-img'>" +
        "<img src='./static/images/circle-img.png'/>" +
        "</div>" +
        "<div class='map-circle-p'>" +
        "<p class='map-circle-one'>北栅口闸</p>" +
        "<p class='map-circle-custom'>客户：海宁袁花圩区</p>" +
        "</div>" +
        "</div>" +
        "<p class='map-circle-temperature1'>1号泵 温度: 19.3℃ 湿度: 62.5% 内河: 0cm</p>" +
        "<p class='map-circle-temperature2'>1号泵 温度: 19.3℃ 湿度: 62.5% 内河: 0cm</p>" +
        "<p class='map-circle-count');>查看详情</p>";
      marker.on("click", markerClick);
      markers.push(marker);
    }
    function SetIcon(e) {
      if ((e === 0)) {
        return "./static/images/show_j_1.png"
      }
      if ((e === 1)) {
        return "./static/images/show_j_2.png"
      }
      if ((e === 2)) {
        return "./static/images/show_j_3.png"
      }
      if ((e === 3)) {
        return "./static/images/show_j_14.png"
      }
    }
  

    var infoWindow = new AMap.InfoWindow({
      offset: new AMap.Pixel(16, -36),
    });
    function markerClick(e) {
      infoWindow.setContent(e.target.content);
      infoWindow.open(myMap, e.target.getPosition());
      for (var i = 0; i < markers.length; i++) {
        markers[i].setIcon(preIcon);
      }
      e.target.setIcon(clickIcon);
      $(".map-circle-count").on("click", function () {
        $(".popup").show();
        $(".popup").width("3px");
        $(".popup").animate(
          {
            height: "82%",
          },
          400,
          function () {
            $(".popup").animate(
              {
                width: "82%",
              },
              400
            );
          }
        );
        setTimeout(summaryShow, 800);
      });
    }
    myMap.on("click", function () {
      infoWindow.close();
    });
  });
  $(".dot-box4").on("click", function (e) {
    let point = [
      [103.752171, 36.068716],
      [103.759037, 36.072046],
      [103.73788, 36.061257],
      [103.75622, 36.061247],
    ];
    let markers = [];
    for (var i = 0; i < point.length; i += 1) {
      var marker = new AMap.Marker({
        position: point[i],
        map: myMap,
        icon: SetIcon(i),
        size: new AMap.Size(34, 41),
        imageSize: new AMap.Size(50, 50),
      });
      marker.content =
        "<div class='map-circle-Big'>" +
        "<div class='map-circle-img'>" +
        "<img src='./static/images/circle-img.png'/>" +
        "</div>" +
        "<div class='map-circle-p'>" +
        "<p class='map-circle-one'>北栅口闸</p>" +
        "<p class='map-circle-custom'>客户：海宁袁花圩区</p>" +
        "</div>" +
        "</div>" +
        "<p class='map-circle-temperature1'>1号泵 温度: 19.3℃ 湿度: 62.5% 内河: 0cm</p>" +
        "<p class='map-circle-temperature2'>1号泵 温度: 19.3℃ 湿度: 62.5% 内河: 0cm</p>" +
        "<p class='map-circle-count');>查看详情</p>";
      marker.on("click", markerClick);
      markers.push(marker);
    }
    function SetIcon(e) {
      if ((e === 0)) {
        return "./static/images/show_h_1.png"
      }
      if ((e === 1)) {
        return "./static/images/show_h_2.png"
      }
      if ((e === 2)) {
        return "./static/images/show_h_3.png"
      }
      if ((e === 3)) {
        return "./static/images/show_h_4.png"
      }
    }
  
    var infoWindow = new AMap.InfoWindow({
      offset: new AMap.Pixel(16, -36),
    });
    function markerClick(e) {
      infoWindow.setContent(e.target.content);
      infoWindow.open(myMap, e.target.getPosition());
      for (var i = 0; i < markers.length; i++) {
        markers[i].setIcon(preIcon);
      }
      e.target.setIcon(clickIcon);
      $(".map-circle-count").on("click", function () {
        $(".popup").show();
        $(".popup").width("3px");
        $(".popup").animate(
          {
            height: "82%",
          },
          400,
          function () {
            $(".popup").animate(
              {
                width: "82%",
              },
              400
            );
          }
        );
        setTimeout(summaryShow, 800);
      });
    }
    myMap.on("click", function () {
      infoWindow.close();
    });
  });

  //主页排水量统计
  var myChart1 = echarts.init(document.getElementById("myChart1"));
  var option1 = {
    backgroundColor:
      "linear-gradient( 180deg,#050F1D 0%,#061830 40%,#062a57 100%)",
    title: {
      show: true,
      text: "",
      textStyle: {
        color: "#fff",
      },
    },

    grid: {
      left: "1%",
      right: "4%",
      top: "15%",
      bottom: "2%",
      containLabel: true,
    },
    tooltip: {
      show: true,
      trigger: "item",
    },
    xAxis: [
      {
        // 距离内容边距
        min: -1,
        max: 21,
        interval: 5,
        type: "category",
        boundaryGap: false,
        axisLabel: {
          // X轴刻度颜色
          color: "#fff",
          // X轴间隔个数
          interval: 0,
          textStyle: {
            color: "#B4B8BF",
          },
        },

        axisLine: {
          show: true,
          lineStyle: {
            color: "#195384",
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          // 象限内的线条显示
          show: false,
          lineStyle: {
            color: "#195384",
          },
        },
        data: [
          "10",
          "20",
          "30",
          "40",
          "50",
          "60",
          "70",
          "80",
          "90",
          "100",
          "110",
          "120",
          "130",
          "140",
          "150",
          "160",
          "170",
          "180",
          "190",
          "200",
          "210",
        ],
      },
    ],
    yAxis: [
      {
        // Y轴
        type: "value",
        name: "单位: m3/s",
        min: 0,
        max: 60,
        nameTextStyle: {
          color: "#B4B8BF",
        },
        axisLabel: {
          // Y轴刻度间隔显示
          formatter: (val, key) => {
            if (key % 2 === 0) {
              return val;
            }
          },
          textStyle: {
            color: "",
          },
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: "#B4B8BF",
            type: "solid",
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: "#3A4555",
          },
        },
      },
    ],
    series: [
      {
        name: "排水量统计",
        type: "line",
        stack: "总量",
        symbol: "circle",
        symbolSize: 8,
        itemStyle: {
          normal: {
            // 折线转折点颜色
            color: "#FFFFFF",
            lineStyle: {
              color: "#13CCFF",
              width: 3,
            },
            areaStyle: {
              //color: '#94C9EC'
              // 折线图样式
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: "#042348",
                },
                {
                  offset: 1,
                  color: "#0E93BD",
                },
              ]),
            },
          },
        },
        markPoint: {
          itemStyle: {
            normal: {
              color: "red",
            },
          },
        },
        data: [
          20, 30, 43, 25, 28, 35, 55, 43, 20, 30, 43, 25, 28, 35, 55, 43, 20,
          30, 43, 25, 28,
        ],
      },
    ],
  };
  //能耗统计
  var Energy = echarts.init(document.getElementById("Energy"));
  var Energy1 = {
    backgroundColor:
      "linear-gradient( 180deg,#050F1D 0%,#061830 40%,#062a57 100%)",
    tooltip: {
      show: true,
      trigger: "item",
    },
    grid: {
      left: "2%",
      right: "4%",
      top: "30%",
      bottom: "0%",
      containLabel: true,
    },
    xAxis: {
      //隐藏文字
      triggerEvent: true,
      type: "category",
      data: [
        "北栅口闸",
        "褚家木",
        "大池浜闸",
        "吴家汇",
        "安木桥闸",
        "蔡家浜闸",
        "河桥浜",
      ],
      axisLabel: {
        formatter: function (params) {
          var val = "";
          if (params.length > 3) {
            val = params.substr(0, 3) + "...";
            return val;
          } else {
            return params;
          }
        },
        rotate: 60,
        //x轴文字的配置
        show: true,
        textStyle: {
          color: "#B4B8BF",
          fontSize: 12
        },
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#0C5595",
        },
      },
    },
    yAxis: [
      {
        type: "value",
        name: "单位: KW",
        min: 0,
        max: 600,
        nameTextStyle: {
          color: "#B4B8BF",
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: "#3A4555",
          },
        },
        axisLabel: {
          textStyle: {
            color: "#B4B8BF",
          },
        },
        axisLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        data: [400, 500, 430, 380, 370, 180, 230],
        type: "bar",
        barWidth: 25, //柱图宽度
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#67CBF8",
              },
              {
                offset: 1,
                color: "#2F92BE",
              },
            ]),
          },
        },
      },
    ],
  };
  //设备运行分析
  var equipment1 = echarts.init(document.getElementById("equipment1"));
  var equipmentOne = {
    backgroundColor: "",
    color: ["#3AC263", "#FFCE6D"],
    tooltip: {
      trigger: "item",
    },
    // 调整饼图内容位置 v1 左右 v2 上下
    series: [
      {
        center: ["45%", "50%"],
        name: "圩区运行分析",
        type: "pie",
        radius: ["45%", "75%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 0,
          borderColor: "#09162A",
          borderWidth: 3,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          normal: {
            show: false,
            position: "inner",
          },
        },
        data: [
          {
            value: 67,
          },
          {
            value: 5,
          },
        ],
      },
    ],
  };
  //圩区运行分析
  var equipment2 = echarts.init(document.getElementById("equipment2"));
  var equipmentTwo = {
    backgroundColor: "",
    color: ["#46D9FC", "#2DCD24"],
    tooltip: {
      trigger: "item",
    },
    // 调整饼图内容位置 v1 左右 v2 上下
    series: [
      {
        center: ["46%", "50%"],
        name: "圩区运行分析",
        type: "pie",
        radius: ["45%", "75%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 0,
          borderColor: "#09162A",
          borderWidth: 3,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: false,
            fontSize: 40,
            fontWeight: "bold",
          },
        },

        labelLine: {
          normal: {
            show: false,
            position: "inner",
          },
        },

        data: [
          {
            value: 5467,
          },
          {
            value: 425,
          },
        ],
      },
    ],
  };

  //运单状态文字滚动
  // $("#FontScroll").FontScroll({ time: 3000, num: 1 });
  // $("#FontScrollTwo").FontScroll({ time: 3000, num: 1 });
  setTimeout(function () {
    $(".progress").each(function (i, ele) {
      var PG = $(ele).attr("progress");
      var PGNum = parseInt(PG);
      var zero = 0;
      var speed = 50;
      var timer;

      $(ele)
        .find("h4")
        .html(zero + "%");
      if (PGNum < 10) {
        $(ele).find(".progressBar span").addClass("bg-red");
        $(ele).find("h3 i").addClass("color-red");
      } else if (PGNum >= 10 && PGNum < 50) {
        $(ele).find(".progressBar span").addClass("bg-yellow");
        $(ele).find("h3 i").addClass("color-yellow");
      } else if (PGNum >= 50 && PGNum < 100) {
        $(ele).find(".progressBar span").addClass("bg-blue");
        $(ele).find("h3 i").addClass("color-blue");
      } else {
        $(ele).find(".progressBar span").addClass("bg-green");
        $(ele).find("h3 i").addClass("color-green");
      }
      $(ele)
        .find(".progressBar span")
        .animate(
          {
            width: PG,
          },
          PGNum * speed
        );
      timer = setInterval(function () {
        zero++;
        $(ele)
          .find("h4")
          .html(zero + "%");
        if (zero == PGNum) {
          clearInterval(timer);
        }
      }, speed);
    });

    //基本信息
    totalNum($("#indicator1"), 1);
    totalNum($("#indicator2"), 1);
    totalNum($("#indicator3"), 1);

    //总计运单数
    totalNum($("#totalNum"), 1000);

    myChart1.setOption(option1);
    Energy.setOption(Energy1);
    equipment1.setOption(equipmentOne);
    equipment2.setOption(equipmentTwo);
  }, 500);

  var EnergyConsumption, displacement;
  var pieData;

  function setSummary() {
    EnergyConsumption = echarts.init(
      document.getElementById("EnergyConsumption")
    );
    displacement = echarts.init(document.getElementById("displacement"));
    var ww = $(window).width();
    var pieData;
    if (ww > 1600) {
      pieData = {
        pieTop: "40%",
        pieTop2: "36%",
        titleSize: 20,
        pieRadius: [80, 85],
        itemSize: 32,
      };
    } else {
      pieData = {
        pieTop: "30%",
        pieTop2: "26%",
        titleSize: 16,
        pieRadius: [60, 64],
        itemSize: 28,
      };
    }

    // 弹出框调用折线图
    EnergyConsumptionOption = {
      backgroundColor: "transparent",
      title: {
        show: true,
        text: "能耗统计",
        textStyle: {
          color: "#fff",
          // textShadowOffsetX: 1
        },
      },

      grid: {
        left: "-8%",
        right: "4%",
        top: "40%",
        bottom: "2%",
        containLabel: true,
      },
      tooltip: {
        show: true,
        trigger: "item",
      },
      xAxis: [
        {
          // padding: [0,10,0,10],
          // 距离内容边距
          min: -1,
          max: 8,
          interval: 5,
          type: "category",
          boundaryGap: false,
          axisLabel: {
            // X轴刻度颜色
            color: "#fff",
            // X轴间隔个数
            interval: 0,
            textStyle: {
              color: "#B4B8BF",
            },
          },

          axisLine: {
            show: true,
            lineStyle: {
              color: "#3A4555",
              type: "solid",
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            // 象限内的线条显示
            show: false,
            lineStyle: {
              color: "#195384",
            },
          },
          data: ["10", "20", "30", "40", "50", "60", "70", "80"],
        },
      ],
      yAxis: [
        {
          // Y轴
          type: "value",
          name: "单位: KW",
          min: 0,
          max: 60,
          nameTextStyle: {
            color: "#B4B8BF",
            // padding: [30, 0, 0, 10],
          },
          axisLabel: {
            // Y轴刻度间隔显示
            formatter: (val, key) => {
              if (key % 2 === 0) {
                return val;
              }
            },
            textStyle: {
              color: "#B4B8BF",
            },
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#B4B8BF",
              type: "solid",
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: "#3A4555",
            },
          },
        },
      ],
      series: [
        {
          name: "能耗统计",
          type: "line",
          stack: "总量",
          symbol: "circle",
          symbolSize: 8,
          // smooth: false,
          itemStyle: {
            normal: {
              // 折线转折点颜色
              color: "#FFFFFF",
              lineStyle: {
                color: "#28F1FA",
                width: 1,
              },
              areaStyle: {
                //color: '#94C9EC'
                // 折线图样式
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "#09192D",
                  },
                  {
                    offset: 1,
                    color: "#1B96A3",
                  },
                ]),
              },
            },
          },
          markPoint: {
            itemStyle: {
              normal: {
                color: "red",
              },
            },
          },
          // data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330],
          data: [20, 30, 43, 25, 28, 35, 55, 43],
        },
      ],
    };
    displacementOption = {
      backgroundColor: "transparent",
      title: {
        // padding: [8, 0, 0, 6],
        show: true,
        text: "排水量统计",
        textStyle: {
          color: "#FFFFFF",
          // textShadowOffsetX: 1
        },
      },
      grid: {
        left: "-8%",
        right: "4%",
        top: "40%",
        bottom: "2%",
        containLabel: true,
      },

      tooltip: {
        show: true,
        trigger: "item",
      },
      xAxis: [
        {
          // padding: [0,10,0,10],
          // 距离内容边距
          min: -1,
          max: 8,
          interval: 5,
          type: "category",
          boundaryGap: false,
          axisLabel: {
            // X轴刻度颜色
            color: "#fff",
            // X轴间隔个数
            interval: 0,
            textStyle: {
              color: "#B4B8BF",
            },
          },

          axisLine: {
            show: true,
            lineStyle: {
              color: "#3A4555",
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            // 象限内的线条显示
            show: false,
            lineStyle: {
              color: "#195384",
            },
          },
          data: ["10", "20", "30", "40", "50", "60", "70", "80"],
        },
      ],
      yAxis: [
        {
          // Y轴
          type: "value",
          name: "单位: m3/s",
          min: 0,
          max: 60,
          nameTextStyle: {
            color: "#B4B8BF",
          },
          axisLabel: {
            // Y轴刻度间隔显示
            formatter: (val, key) => {
              if (key % 2 === 0) {
                return val;
              }
            },
            textStyle: {
              color: "#B4B8BF",
            },
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#B4B8BF",
              type: "solid",
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: "#3A4555",
            },
          },
        },
      ],
      series: [
        {
          name: "排水量统计",
          type: "line",
          stack: "总量",
          symbol: "circle",
          symbolSize: 8,
          // smooth: false,
          itemStyle: {
            normal: {
              // 折线转折点颜色
              color: "#FFFFFF",
              lineStyle: {
                color: "#00FF85",
                width: 1,
              },
              areaStyle: {
                //color: '#94C9EC'
                // 折线图样式
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "#091B2C",
                  },
                  {
                    offset: 1,
                    color: "#048957",
                  },
                ]),
              },
            },
          },
          markPoint: {
            itemStyle: {
              normal: {
                color: "red",
              },
            },
          },
          // data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330],
          data: [20, 30, 43, 25, 28, 35, 55, 43],
        },
      ],
    };
    EnergyConsumption.setOption(EnergyConsumptionOption);
    displacement.setOption(displacementOption);
  }

  $(".popupClose").on("click", function () {
    $(".popupClose").css("display", "none");
    $(".popup").animate(
      {
        width: "3px",
      },
      400,
      function () {
        $(".popup").animate(
          {
            height: 0,
          },
          400
        );
      }
    );
    setTimeout(summaryHide, 800);
  });

  function summaryShow() {
    $(".popupClose").css("display", "block");
    $(".summary").show();
    setSummary();
  }

  function summaryHide() {
    $(".filterbg").hide();
    $(".popup").hide();
    $(".popup").width(0);
  }

  $(window).resize(function () {
    myChart1.resize();
    Energy.resize();
    equipment1.resize();
    equipment2.resize();
    try {
      EnergyConsumption.resize();
      displacement.resize();
    } catch (err) {
      return false;
    }
  });
});
