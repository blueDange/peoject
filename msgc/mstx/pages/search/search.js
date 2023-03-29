$(function(){
    // https://serverms.xin888.top/mall/search?type=1&kw=猪肉&page=1
    // 读取路径中的参数 
    const kw=R.search('kw')
    const type=R.search('type')

    // 通过type的值找到对应的
    $('#sort>button').eq(type).addClass('active')
    $('#sort>button').click(function(){
        const i=$(this).index() //点击按钮的序号与type的值对应
        location.assign(`?page=search&kw=${kw}&type=${i}`)
        // 路径变化 导致页面刷新 所有代码重新执行
    })

    function getData(page){
        const url=`mall/search?type=${type}&kw=${type}&page=${page}`
        console.log(url);
        Req.get(url,data=>{
            console.log(data);
            $('#content>ul').html(
            data.data.map(item=>{
                const {name,pic,price,sale_count}=item
                return `<li>
                <img src="/assets/img/mall/${pic}" alt="">
                <div>
                    <h3>${name}</h3>
                    <b>￥${price}</b>
                    <span>销量${sale_count}</span>
                </div>
            </li>`
            })
            )
    
            // 当前页数，总页数
            const {page,pageCount}=data
            let pages=''
            let start=Math.max(page - 2, 1)
            let end=Math.min(start + 4,pageCount)
            // 根据最大页数反算出起始页 当前页是最后一页
            start = Math.max(end - 4,1)
            for(let i=start;i<=end;i++){
                pages +=`<button class="page ${page==i ? 'active':''}">${i}</button>`
            }
            $('#content .pager').html(
                `<button class="prev ${page==1 ? 'disabled':''}">上一页</button>${pages}<button class="next ${page == pageCount ? 'disabled':''}">下一页</button>`
            )
        })
    }

    // 初始化 获取第一页数据
    getData(1)

    $('#content .pager').on('click','button.page',function(){
        const page=$(this).text()
        getData(page)
    })

    // 下一页
    $('#content .pager').on('click','button.next',function(){
        const page =$('.pager .active').text()
        getData(page - -1)
    }) 

    // 上一页
    $('#content .pager').on('click','button.prev',function(){
        const page =$('.pager .active').text()
        getData(page -1)
    }) 
})