$(function () {
  var nowPage=1 //当前页
  var loading=false //储存当前请求状态
  var nomore=false //是否没有更多数据
  function getData(page){
    loading=true //请求中...
    Req.get(`mall?page=${page}`,data=>{
      loading=false //非请求中

      // 当前页数等于总页数
      nomore=data.page==data.pageCount
      // 如果是最后一页 显示没有更多
      if(nomore)$('#nomore').show()
        
      console.log(data);
      nowPage=data.page//更新当前页面
      // apppend：累加子元素 新增的会累加到后面
      $('.list').append(
        data.data.map(itme=>{
          const {name,price,sale_count,pic}=itme
          return ` <div class="list-item">
          <img src="/assets/img/mall/${pic}" alt="">
      <div>
              <span class="line-2">${name}</span>
          <div>
              <span>￥${price}</span>
              <span>月售${sale_count}</span>
          </div>
      </div>
  </div>`
        })
      )
    })
  }     

    getData(1)//初始化调用

  // 监听页面滚动 当触底时 发请求 获取新的数据
  $(window).on('scroll',function(){
    // 如果没有更多 不操作
    // 如果请求中 忽略触底操作
    if(nomore||loading) return

    const top=$(window).scrollTop()//滚动的距离
    console.log('top',top);
    const innerH=$(window).innerHeight()
    console.log('innerH',innerH);//整个页面的高度 body的高度
    // 获取脚部栏的位置
    const foot_y = $('#footer').offset().top
    // 恰好触底的滚动偏移量
    const toBottom = foot_y - innerH
    // 只要滚动的距离大于 恰好触底的距离 就算触底

    // 触底优化：请求的时间提前，更早获取新数据 
    // 触底极限值 减少100像素 提前加载
    if(top>toBottom-100){
      console.log('触底了！');

      getData(nowPage + 1)
    }
  })  
})
  