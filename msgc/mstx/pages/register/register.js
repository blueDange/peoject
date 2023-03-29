$(function () {
    $('#footer').hide()

    // 注册按钮点击逻辑
    $('button:contains(注册)').click(function(){
      // 获取勾选状态
      const checked=$(':checkbox').prop('checked')
      console.log(checked);
      if(!checked){
        $('.agree').addClass('animate__animated  animate__headShake')
      }else{
        // 否则三个输入框都是正确状态 才能注册
        // 三个 .ok都处于可见状态
        console.log('可见ok元素',$('.item>.ok:visible'));
        if($('.item>.ok:visible').length == 3){
          const phone=$('.item:eq(0)>input').val()
          const pwd=$('.item:eq(1)>input').val()
          Req.post('users/register',{phone,pwd},data=>{
            console.log(data);
            // 如果注册成功 code==200 跳转到登录
            if(data.code==200){
              alert('恭喜您，注册成功！即将跳转到登录页面')
              location.replace('?page=login')
            }else{
              alert(data.msg)
            }

          })
        }
      }
    })
    $('.agree').on('animationend',function(){
      $(this).removeClass('animate__headShake')
    })

    // 手机号相关逻辑
    // blur:失去焦点事件
    $('.item').eq(0).on('blur','input',function(){
      const phone=$(this).val()
      console.log(phone);

      if(phone=='') return
      // 先隐藏所有span标签
      $(this).siblings('span').hide()
      if(/^1[3-9]\d{9}$/.test(phone)){
        // 发请求 查看是否已经注册
        Req.post('users/checkPhone',{phone},data=>{
          console.log(data);
          if(data.code==200){
            $(this).removeClass('err').siblings('.ok').show()
          }
          if(data.code==202){//手机号已存在
            $(this).addClass('err').siblings('.err2').show()
          }
        })
      }else{
        $(this).addClass('err').siblings('.err1').show()
      }
    })

    // 密码
    $('.item').eq(1).on('blur','input',function(){
      const length=$(this).val().length
      console.log(length);
      if(length==0) return
      $(this).siblings('span').hide()
      if(length>=6 &&length<=12){
        $(this).removeClass('err').siblings('.ok').show()
      }else{
        $(this).addClass('err').siblings('.err').show()
      }
    })
    // 验证密码
    $('.item').eq(2).on('blur','input',function(){
      const pwd=$('.item:eq(1)>input').val()
      const re_pwd=$(this).val()

      if(re_pwd=='') return
      $(this).siblings('span').hide()
      if(re_pwd==pwd){
        $(this).removeClass('err').siblings('.ok').show()
      }else{
        $(this).addClass('err').siblings('.err').show()
      }
    })

    // 当输入框获得焦点时：
    $('.item>input').on('focus',function(){
      $(this).removeClass('err').siblings().hide()
    })

    // 
    $('button:contains(注册)').click(function(){
      $('input.err').addClass('animate__animated  animate__headShake')
    })
    $('.item>input').on('animationend',function(){
      $(this).removeClass('animate__headShake')
    })
  })