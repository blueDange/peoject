$(function(){
    // 读取存储的用户信息  
    let user = sessionStorage.getItem('user')||localStorage.getItem('user')
    // 如果存在 转为对象
    if(user) user=JSON.parse(user)
    // 检查永久存储是否过期 如果过期就清空
    if(localStorage.getItem('user')){
        let user=localStorage.getItem('user')
        user = JSON.parse(user)
        var expireTime=user.expireTime //获取过期时间
        // 当时间超过 规定时间
        if(new Date().getTime()>expireTime){
            // 用户在浏览时,吧登录信息储存在临时储存区 确保本次访问正常
            sessionStorage.setItem('user',JSON.stringify(user))
            localStorage.removeItem('user')//删除
        }
    }
    if(user){
        $('.nologin').hide()
        $('.islogin a').html(user.phone)
        $('.islogin>img').prop('src',user.avatar?`https://game.gtimg.cn/images/lol/act/img/champion/${user.avatar}.png`:'./assets/img/user_unknown.png')
    }else{
        $('.islogin').hide()
    }

    // 添加logo动画
    $('#header .logo').on('animationend',function(){
        $(this).removeClass('animate__rubberBand')
    })
    setInterval(()=>{
        $('#header .logo').addClass('animate__rubberBand')
    },5000)

$('.search button').click(function(){
    // val 读取输入框的value
    const kw=$(this).prev().val()
    // 修改路径中的参数
    // 
    // 
    location.assign(`./?page=search&kw=${kw}&type=0`)
    // page: 页面名称   kw:搜索的关键词    type：搜索结果的排序方式  0是日期最新
})
// 回车也能触发搜索按钮
$('.search input').keyup(function(e){
    // 时间参数中 keycode13 是回车
    if(e.keyCode==13)
    $(this).next().click()
})
})