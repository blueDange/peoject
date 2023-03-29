$(function () {

  // 没有更多数据时 最后一页不在加载更多
  // 加载中不在加载
  var nomore = false
  let loading =false
  let nowpage=1
   function getData(page){
    loading=true //发送请求中
    Req.get(`note?page=${page}`,data=>{
      loading=false //请求发送完
      // 当前页等于总页数 ，没有更多了
      nomore = data.page==data.pagecount
      // 如果没有更多了 则显示 底部文字
      if(nomore) $('.nomore').show()
      nowpage=data.page

      console.log(data);
      $('.list').append(
        data.data.map(item=>{
          const {cover,favorite,name,title,height,width,head_icon}=item
          // 每个元素上 保存图片的宽高比例 高/宽
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

      
      // 获取宽度 实时读取
      const item_w=$('.list-item').width()
      console.log(item_w);

      // 1个数组，存储4列中，最下面的元素
      const arr=[]
       
      
      // 获取元素下边框 距离顶部的距离 
      function getBottom(elem){
        // 图片的高：图片的宽x比例
        const img_h=$(elem).width() * $(elem).data('hw')
        // css('top')的值类似 '10' 需要转数字
        const top=$(elem).css('top')
        return parseInt(top) + img_h + 100
      }

      // 获取数组中 底部最矮的
      function findMin(){
        // 临时指定第一个元素最矮 
        let minElem=arr[0]
        arr.forEach(item=>{
          // 如果遍历到的元素底部更小 则替换最小元素
          if(getBottom(item)<getBottom(minElem)){
            minElem=item
          }
        })
        return minElem
      }

      // 找4列中 底部最大的 作为整个父元素的高
      // 获取数组中 最高的 
      function findMax(){
        let maxElem = arr[0]
        arr.forEach(item=>{
          if(getBottom(item)>getBottom(maxElem)){
            maxElem=item
          }
        })
        return maxElem
      }

      // 新增元素之后 遍历每个元素 设定其定位
      // foreach是数组遍历 each是jq对象遍历
      // 参数1：序号 参数2：元素
      $('.list-item').each((index,elem)=>{
        // console.log(index,elem);
        // 前四个布局
        if(index<4){
          $(elem).css({left:index*(item_w + 10),top:0})
          // 先把前4个放到数组里
          arr.push(elem)
        }else{
          // 在此数组中 找到高度最小的  
        const minElem=findMin()
        console.log('minElen',minElem);
        // 新元素放到其下方   设置新元素定位
        $(elem).css({ 
          left:$(minElem).css('left'), // 左侧与最小元素相同
          top:getBottom(minElem) + 10 //最矮的元素加10px下边距
        })
        // 找到新增元素增加在第几列替换掉数组中的这个元素

        // arr 中储存的永远都是这四列中最下方的元素 
        // 当新元素 添加到最小元素下之后 新元素就是最下方的 
        // i是高度最小元素的序号 也是所在列的序号
        const i=arr.indexOf(minElem)
        // 
        arr[i]=elem
        }
      })
      // 由于所有的子元素都是绝对定位 导致.list高度缺失
      // 计算 赋值为最下方子元素的底部
      let maxElem=findMax()
      $('.list').css('height',getBottom(maxElem))
    }) 
  } getData(1)
    // 监听窗口的滚动
    $(window).on('scroll',function(){
        const top=$(window).scrollTop()//顶部滚动距离
        const footer_y=$('#footer').offset().top //脚部距离顶部
        const win_height=$(window).height() //窗口高
        // 提前100
        if(top>footer_y-win_height-100){
          // 没有更多或 正在加载中 都停止加载
          if(loading||nomore) return
          getData(nowpage+1)
        }
    })
})
  