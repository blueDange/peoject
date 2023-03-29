$(function () {
    // const url='https://serverms.xin88.top/index'
    Req.get('index',data=>{
      console.log(data);
      $('#topvideo .list').html(
        data.hot_video.map(item=>{
          const {vname,mp4,pic}=item
          return `<div>
          <video src="./assets/video/${mp4}" poster="./assets/img/${pic}" preload="none"></video>
          <i></i>
          <span>${vname}</span>
      </div>`
        })
      )

      $('#content .list').html(
        data.today_hot.map(item=>{
          const {name,emphasize:em}=item
          return ` <a href="" class="${em? 'em':''}">${name}</a>`
        })
      )

        data.today_meal.forEach((item,index)=>{
          const {cate_name,contents}=item
          $('#today-meal ul').append(`<li class="${index == 0 ? 'active' : ''}">${cate_name}</li>`)
          contents.forEach(item=>{
            const {desc,pic,title}=item
            $('.swiper>.swiper-wrapper').append(`<div class="swiper-slide">
            <img src="/assets/img/food/${pic}" alt="">
            <b>${title}</b>
            <span>${desc}</span>
        </div>`)
          })
        })

        $('#index-items').html(
          data.index_items.map(item=>{
            const {title,items}=item
            // 对items遍历
            const lis=items.map(item=>{
              const {author, desc,pic,title}=item
              return `<li>
              <div>
                  <img src="/assets/img/food/${pic}" alt="">
                  <span>${author}</span>
              </div>
              <div>
                  <b class="line-1">${title}</b>
                  <span class="line-1">${desc}</span>
              </div>
          </li>`
            })
            return `<div class="index-item">
            <h2>${title}</h2>
            <ul>${lis.join('')}</ul>
        </div>`
          })
        )
    })
    // 为异步
    $('#topvideo .list').on('click','>div',function(){
      // 如果当前项已经激活
      // hasClass:指定元素包含的特性
      if($(this).hasClass('active')){
        $(this).removeClass('active')
        $(this).children('video').trigger('pause')
        $(this).siblings().removeClass('noactive')
      }else{
        $('#topvideo video').trigger('pause')  
      $(this).children('video').trigger('play')
      $(this).addClass('active').siblings().removeClass('active')
      $(this).removeClass('noactive').siblings().addClass('noactive')
      }
    })

    // swiper初始化
    var mySwiper = new Swiper('.swiper',{
      slidesPerView:3,//每页有几个
      slidesPerGroup:3,//几个为一组
      spaceBetween:10,//间距
      on:{
        slideChange(){
          // console.log('改变了，activeIndex为'+this.activeIndex);
          $('#today-meal li').eq(this.activeIndex / 3).trigger('click')
        }
      }
    })

    // 用委托管理动态新增元素
    $('#today-meal').on('click','li',function(){
      $(this).addClass('active').siblings().removeClass('active')
      // 联动轮播图, 根据点击项的序号 滚动到 对应序号的轮播项
      mySwiper.slideTo($(this).index() * 3)
    })

    // 定时器切换广告激活
    setInterval(()=>{
      $('#banner').toggleClass('active')//切换class
    },4000);
  })