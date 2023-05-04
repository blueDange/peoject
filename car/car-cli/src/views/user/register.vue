<template>
  <div>
    <!-- head -->
    <div id="login">
      <!-- main -->
      <div class="txt">
        <h2>用户注册</h2>
        <el-form :model="Form" status-icon :rules="rules" ref="ruleForm">
          <el-form-item prop="name"
            ><el-input
              type="userName"
              v-model="Form.name"
              autocomplete="off"
              placeholder="请输入6-10位用户名"
            ></el-input
          ></el-form-item>
          <el-form-item prop="phone"
            ><el-input
              type="userPhone"
              v-model="Form.phone"
              autocomplete="off"
              placeholder="请输入手机号"
            ></el-input
          ></el-form-item>
          <el-form-item prop="pass">
            <el-input
              maxlength="8"
              minlength="6"
              type="password"
              v-model="Form.pass"
              autocomplete="off"
              placeholder="请输入用户密码6-8位"
            ></el-input>
          </el-form-item>
          <el-form-item prop="checkPass"
            ><el-input
              type="password"
              v-model="Form.checkPass"
              autocomplete="off"
              placeholder="请输入确定密码"
            ></el-input
          ></el-form-item>
          <el-form-item>
            <el-button class="login" @click="register">点击注册</el-button>
            <el-button class="reg" @click="goLogin">已有账号去登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import httpApi from '../../http'
export default {
  data() {
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入6-10位用户名'))
      } else if (value.length >= 6 && value.length <= 10) {
        callback()
      } else {
        callback(new Error('用户名长度不正确'))
      }
    }
    var validatePhone = (rule, value, callback) => {
      var phoneReg = /^1[3-9]\d{9}$/
      if (value === '') {
        callback(new Error('请输入手机号'))
      } else if (phoneReg.test(value)) {
        callback()
      } else {
        callback(new Error('手机号格式不正确'))
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入6-8位密码'))
      } else if (value.length >= 6 && value.length <= 8) {
        callback()
      } else {
        callback(new Error('密码长度不正确'))
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.Form.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      Form: {
        name: '',
        phone: '',
        pass: '',
      },
      rules: {
        name: [{ validator: validateName, trigger: 'blur' }],
        phone: [{ validator: validatePhone, trigger: 'blur' }],
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
      },
    }
  },
  methods: {
    register() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          httpApi.userApi.register({ params: this.Form }).then(res => {
            console.log(res)
            if (res.data.code == 200) {
              this.$message({
                message: `恭喜你，注册成功,3 秒后跳转到登录`,
                type: 'success',
              })
              setTimeout(() => {
                this.$router.push('/login')
              }, 3000)
            } else {
              this.$message({
                message: `注册失败，重新注册`,
                type: 'error',
              })
            }
          })
        }
      })
    },
    goLogin() {
      this.$router.push('/login')
    },
  },
}
</script>

<style lang="scss" scoped>
#login {
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  background: url(../../assets/home/ban2.jpg) no-repeat;
  background-size: cover;
  position: relative;
  .txt {
    background-image: linear-gradient(
      to bottom,
      rgba(225, 225, 225, 0.7),
      rgba(0, 0, 0, 0.3)
    );
    border: 3px solid #5cb95f;
    border-radius: 0.9375rem;
    box-shadow: 0.3125rem 0.3125rem 0.3125rem #5cb95f;
    width: 30rem;
    padding: 0.625rem 2.25rem;
    position: absolute;
    top: 20%;
    left: 50%;
    img {
      width: 100%;
      border-radius: 0.9375rem;
    }

    h2 {
      text-align: center;
      padding: 0.625rem 0;
      border-bottom: 1px solid #5cb95f;
      margin-bottom: 1.25rem;
      color: #5cb95f;
    }
    button {
      border: none;
      padding: 0.9375rem 0.625rem;
      margin-top: 0.225rem;
    }
    .captar {
      width: 68%;
    }
    .captcha {
      margin-top: 0.05rem;
      display: inline-block;
      width: 68%;
      position: relative;
      .captarspan {
        display: inline-block !important;
        position: absolute;
        top: 0;
        left: 110%;
      }
    }
    .login {
      width: 100%;
      color: #fff;
      background: #5cb95f;
      border-radius: 0.625rem;
    }
    .reg {
      color: #999;
      float: right;
      background: #fadc48;
    }
  }
}
</style>
