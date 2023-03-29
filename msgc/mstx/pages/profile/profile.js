
$(function(){
    // 读取储存用户的信息 放到表格里
    let user=sessionStorage.getItem('user')||localStorage.getItem('user')
    if(user) user=JSON.parse(user)
    
    // 设置头像页面默认头像
    $('.head-photo>div>img').prop('src',user.avatar?`https://game.gtimg.cn/images/lol/act/img/champion/${user.avatar}.png`:'./assets/img/user_unknown.png')
    $('td.phone').html(user.phone)
    // 服务器存放的秒数 此处是毫秒 
    $('td.created').html(moment(user.created * 1000).format('YYYY-MM-DD'))

    
    $('#sidemenu li').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
        // 获取点击项的序号 内容项目与其序号对应
        var i=$(this).index()
        // 保存序号到临时存储区,刷新不丢失
        sessionStorage.setItem('profile_index',i)

        $('#content>div').eq(i).addClass('active').siblings().removeClass('active')
    })
    //页面加载时 读取激活序号
    const i=sessionStorage.getItem('profile_index') || 0
    $('#sidemenu li').eq(i).click()

    // 退出登录
    $('button:contains(退出登录)').on('click',function(){
        // 
        sessionStorage.removeItem('user')
        localStorage.removeItem('user')
        location.replace('./')
    })

    // var url='https://serverms.xin88.top/users/head_photos'
    Req.get('users/head_photos',data=>{
       console.log(data);
       $('.head-photo ul').html(
        data.hero.map(item=>{
            const {selectAudio:sa,alias}=item
                return `<li><img data-alias=${alias} data-sa=${sa} src="https://game.gtimg.cn/images/lol/act/img/champion/${alias}.png" alt=""></li>
                </ul>`
           })
       )
    })

    // 点击头像播放声音
    const au=new Audio()
    au.preload='none'
    $('.head-photo>ul').on('click','img',function(){
        const sa=$(this).data('sa')
        
        au.src=sa
        au.play()

        // 替换
        $('.head-photo>div>img').replaceWith($(this).clone())
    })

    // 点击确定按钮 更新头像地址到服务器上
    $('.head-photo>div>button').on('click',function(){
        // 按钮上方的元素
        const alias=$(this).prev().data('alias')
        const img_src=$(this).prev().prop('src')
        console.log(img_src);
        Req.post('users/head_photo',{id:user.id,alias},data=>{
            console.log(data);
            if(data.code==200){
                // 更新头部栏中的头像
                $('#header .islogin>img').prop('src',img_src)
                // 更新本地缓存中的数据
                user.avatar=alias
                // 更新到临时存储区
                sessionStorage.setItem('user',JSON.stringify(user))
                //如果长期存储
                if(localStorage.getItem('user')){
                    localStorage.setItem('user',JSON.stringify(user))
                }
                alert('头像更新成功')
            }else{
                alert('头像更新失败')
            }
        })
    })
})