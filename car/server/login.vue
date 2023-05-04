<template>
  <div>
    <!-- head -->
    <div id="login">
      <!-- main -->
      <div class="txt">
        <h2>用户登录</h2>
        <el-form :model="Form" status-icon :rules="rules" ref="ruleForm">
          <el-form-item prop="name"
            ><el-input
              type="userName"
              v-model="Form.name"
              autocomplete="off"
              placeholder="请输入6-10位用户名"
            ></el-input
          ></el-form-item>
          <el-form-item prop="pass">
            <el-input
              maxlength="8"
              minlength="6"
              type="password"
              v-model="Form.pass"
              autocomplete="off"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login" @click="login">登录</el-button>
            <el-button class="reg" @click="goReg">注册</el-button>
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
    return {
      Form: {
        name: '',
        pass: '',
        radio: false,
      },
      rules: {
        name: [
          { required: true, message: '请填写用户名', trigger: 'blur' },
          {
            pattern: /^\w{3,15}$/,
            message: '3~15位字符，可以包含：数字、字母、下划线',
            trigger: 'blur',
          },
        ],
        pass: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          {
            pattern: /^\w{6,15}$/,
            message: '6~15位字符，可以包含：数字、字母、下划线',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    login() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          httpApi.userApi.login({ params: this.Form }).then(res => {
            console.log(res)
            if (res.data.code == 200) {
              this.$message({
                type: 'success',
                message: '登录成功,3 秒后跳转到首页',
              })
              setTimeout(() => {
                this.$router.push('/')
              }, 3000)
              // 给login方法里面存数据
              this.$store.commit('login', res.data.userInfo)
            } else {
              this.$message({
                message: `登录失败，重新登录`,
                type: 'error',
              })
            }
          })
        }
      })
    },
    goReg() {
      this.$router.push('/register')
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
    border: 3px solid #5cb95f;
    border-radius: 0.9375rem;
    box-shadow: 0.3125rem 0.3125rem 0.3125rem #5cb95f;
    width: 30rem;
    padding: 0.625rem 2.25rem;
    position: absolute;
    top: 20%;
    left: 50%;
    background-image: linear-gradient(
      to bottom,
      rgba(225, 225, 225, 0.7),
      rgba(0, 0, 0, 0.4)
    );
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
