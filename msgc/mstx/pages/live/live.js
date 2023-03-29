$(function(){

    // 共享当前页
    let nowPage=1
    
    let loading=false  //代表是否正在请求中// false 假 可以发送
    let nomore=false  //是否没有更多

    function getData(page){
    // 直播地址 来自其他服务器 需要单独发请求
    const url=`https://douyu.xin88.top/api/room/list?${page}&;type=ms`
        loading=true //请求中 其他请求不能发送
    $.get(url,data=>{
        loading=false //请求完毕 其他请求可以发送

        nowPage=data.data.nowPage  //当前页
        // 当前页等于总页数 为真 就是没有更多
        nomore=data.data.nowPage==data.data.pageCound
        // 如果没有更多 就展示对应的提示
        if(nomore) $('#nomore').show()

        console.log(data);
        $('.list').append(
            data.data.list.map(item=>{
                const {nickname,hn,roomName,roomSrc}=item
                return`<div class="list-item">
                <div>
                    <img src="${roomSrc}" alt="">
                    <span>${hn}</span>
                    <span>${nickname}</span>      
                </div>
                <span>${roomName}</span> 
            </div> `
            })
        )
    })
  }

//   由于每页只有八条数据 无法充满网页 所以请求两次
    getData(1)
    getData(2)

    // 触底：当页面滚动时 检测到触底 立刻发请求 获取下一页数据
    $(window).on('scroll',function(){

        // 如果请求中 就不要发送请求 
        if(nomore||loading) return
        const top=$(window).scrollTop()  //往上滚动的距离
        // 窗口没有内边距 边框 所以innerheight=height
        const win_height=$(window).height() //窗口高度
        // 脚部栏高度
        const footer_top=$('#footer').offset().top

        // 偏移量大于等于最小的触底高度       额外提前100px
        if(top>=footer_top-win_height-100){
            getData(nowPage + 1)
        }
    })
})