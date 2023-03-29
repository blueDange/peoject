$(function () {
  // 请求到指定页的数据 并展示到页面上
  function getData(page){

    Req.get(`video?page=${page}`,data=>{
      console.log(data);
      $('.list').html(
        data.data.map(itme=>{
          const {duration,pic,title,views}=itme
          return `<div class="list-item">
          <div>
              <img src="/assets/img/video/${pic}" alt="">
              <div>
                  <span>${views}次播放</span>
                  <span>${duration}</span>
              </div>
          </div>
          <div>
              <span>${title}</span>
          </div>
      </div>`
        })
      )
        const {page,pageCount}=data
        let pages=''
        let start=Math.max(page - 2, 1)
        let end=Math.min(start + 4,pageCount)
        // 根据最大页数 反算出起始页 
        start = Math.max(end - 4,1)
        for(let i=start;i<=end;i++){
          pages+=`<button class="page ${page==i ? 'active':''}">${i}</button>`    
        }
      $('.pager').html(
        `<button class="prev ${page ==1?'hide':''}">上一页</button>${pages}<button class="next ${page==pageCount?'hide':''}">下一页</button>`
      )
    })
  }
  // 初始化时，触发第一次函数 获取第一页数据
  getData(1)
  // 页数是请求后 动态添加 用委托模式绑定事件
  $('.pager').on('click','button.page',function(){
    const page=$(this).text()
    console.log('page',page);
    // 传入点击的页数上的数 获取对应的数据
    getData(page)
  })

  // 下一页
  $('.pager').on('click','button.next',function(){

    const page=$('.pager>.active').text()
    getData(page - -1)//不用+ 规避字符串拼接
  })
  // 上一页
  $('.pager').on('click','button.prev',function(){

    const page=$('.pager>.active').text()
    getData(page - 1)
  })
})