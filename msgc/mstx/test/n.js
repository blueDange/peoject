$(function(){

    // 没有更多时不在加载
    let nomore=false
    // 正在加载时不在加载
    let loading=false
    // 当前页
    let nowPage=1

    function getData(page){
        // 正在加载 
        loading=true
        Req.get(`note?page=${page}`,data=>{
            // 加载完毕
            loading=false
            // 当前页
            nowPage=data.page
            // 当前页等于总页数 没有更多数据
            nomore=data.page==data.pagecount
            // 没有更多 显示底部文字
            if(nomore) $('.nomore').show()
            console.log(data);
            $('.list-item').append(
                data.data.map(item=>{
                    const {cover,favorite,name,title,height,width,head_icon}=item
                    return `<div class="list-item" data-hw="${height/width}">
                    <img src="/assets/img/note/${cover}" alt="">
                <div>
                    <span class="line-2">${title}</span>
                    <div>
                        <div>
                            <img src="/assets/img/note/${head_icon}" alt="">
                            <span>${name}</span>
                        </div>
                        <span>${favorite}</span>
                    </div>
                </div>
            </div>`
                })
            )
        

        // 获取对象宽度
        const item_w=$('.list-item').width()

        // 创建空数组保存最下面四个元素
        const arr=[]

        // 获取元素底部距离顶部高度
        function getBottom(elem){
            // 图片的高度
            const img_h=$(elem).width*$(elem).data('hw')
            // 距离顶部的高度
            const top=$(elem).css('top')
            return parseInt(top) + img_h + 100
        }

        // 获取数组中底部最矮的
        function findMin(){
            let minElem=arr[0]
            arr.forEach(item=>{
                if(getBottom(item)<minElem){
                    minElem=item
                }
            })
            return minElem
        }
        // 获取数组中底部最高的
        function findMax(){
            let maxElem=arr[0]
            arr.forEach(item=>{
                if(getBottom(item)>maxElem){
                    minElem=item
                }
            })
            return maxElem
        }

        // 遍历对象 
        $('.list-item').each((index,elem)=>{
            if(index<4){
                $(elem).css({
                    left:index*(item_w+10),
                    top:0
                })
            }else{
                // 在此数组中找到最小的
              const  minElem=findMin
            //   新元素放到 最低的下面 设置新定位
            $(elem).css({
                left:$(minElem).css('left'),
                top:getBottom(minElem) + 10
            })
                const i=arr.index(minElem)
                arr[i]=elem
            }
        })
        let maxElem=findMax
        $('.list').css('height',getBottom(maxElem))
        })
    }
    getData(1)

    // 监听窗口滚动
    $(window).on('scroll',function(){
        // 向上滚动的距离
        const top=$(window).scrollTop
        // 获取总高度,脚部距离顶部的高度
        const footer_y=$('#footer').offset().top
        // 获取当前页面高度,窗口高度
        const win_height=$(window).height()
        if(top>footer_y-win_height-100){
            if(nomore||loading)
            getData(nowPage+1)
        }
    })
})