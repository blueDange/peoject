$(function () {
    $('#footer').hide()

    // url='https://serverms.xin88.top/users/login'
  $('button:contains(登录)').on('click',function(){
    const phone=$('.login>input:eq(0)').val()
    const pwd=$('.login>input:eq(1)').val()
    Req.post('users/login',{phone,pwd},data=>{
      console.log(data);
      if(data.code==200){
        // 临时的一定会储存 永久的就要看用户选项
        sessionStorage.setItem('user',JSON.stringify(data.data))
        // 根据下次自动登录的值判断要不要永久储存
        var checked=$(':checkbox').prop(('checked'))
        if(checked){
          // 30天过期
          // 获取当前时间戳+30天
          var expireTime=new Date().getTime()+30*24*60*60*1000
          data.data.expireTime=expireTime

          localStorage.setItem('user',JSON.stringify(data.data))
        }
        alert('登录成功，即将跳转到首页')
        location.replace('./')
      }else{
        alert('登录失败！请检查账号密码')
      }
    })
  })
})