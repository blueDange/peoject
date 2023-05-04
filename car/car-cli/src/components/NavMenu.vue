<template>
  <div>
    <div class="nav">
      <div class="cen">
        <img src="http://www.maichelive.com/skin/images/logo.png" alt="" />
        <div>
          <el-menu
            router
            :default-active="$route.path"
            class="el-menu-demo"
            mode="horizontal"
            text-color="black"
            active-text-color="#5cb95f"
            style="border-bottom: 0"
          >
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/about">关于我们</el-menu-item>
            <el-menu-item index="/initialPlan">前期规划</el-menu-item>
            <el-menu-item index="/com/list">产品选购</el-menu-item>
            <el-menu-item index="/latePromotion">后期推广</el-menu-item>
            <el-menu-item index="/newsList">新闻资讯</el-menu-item>
            <el-submenu index="1">
              <template slot="title">联系我们</template>
              <el-menu-item index="/contact">联系信息</el-menu-item>
              <el-menu-item index="/intention">选购意向</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
        <div class="input">
          <el-input
            class="el-input"
            v-model="keyword"
            placeholder="输入关键词"
            size="mini"
            list="data"
          >
            <i @click="search(keyword)" class="el-icon-search" slot="suffix"></i
          ></el-input>
          <datalist id="data">
            <option value="房车"></option>
            <option value="全国"></option>
            <option value="好"></option>
            <option value="营地"></option>
          </datalist>
        </div>
        <div class="user" v-if="userInfo">
          用户：{{ userInfo.uname }}
          <div class="exit" @click="exitInfo">退出登录</div>
        </div>
        <div class="user" v-else @click="$router.push('/login')">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      keyword: '',
    }
  },
  computed: {
    // mapState将开放vue中保存的user对象到当前组件的计算属性
    ...mapState(['userInfo']),
  },
  watch: {
    keyword(newval, oldval) {
      console.log('关键词变化了', newval)
      this.keyword = newval
      // this.search(newval);
    },
  },
  methods: {
    search(keyword) {
      // console.log(1111);
      if (keyword == '') {
        this.$message({
          showClose: true,
          message: '请输入至少两个字符串',
          type: 'error',
        })
      } else {
        this.$router.push({ path: '/newscenter', query: { keyword } }, () => {})
      }
      if (this.$route.name == 'newscenter') {
        // 如果当前在newscenter页面 点击搜索刷新页面
        location.reload()
        // this.$router.go(0);
        // console.log(222);
      }
      console.log(this.$route.name)
    },
    exitInfo() {
      this.$store.commit('loginout')
      this.$router.go('home')
    },
  },
}
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  background-color: #fff;
  .cen {
    width: 1200px;
    display: flex;
    // justify-items: center;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    margin: 0 auto;
    img {
      width: 180px;
      margin-right: 5px;
    }
    .el-menu-demo {
      width: 700px;
    }
  }
}
.input {
  // margin-left: 10px;
  :deep(.el-input__inner) {
    border-radius: 20px;
  }
  i {
    margin: 8px 3px;
  }
}
.el-menu-item:hover {
  color: #5cb95f !important;
}
.user {
  width: 150px;
  height: 20px;
  text-align: center;
  cursor: pointer;
  .exit {
    padding-top: 5px;
    border-radius: 4px;
    height: 25px;
    line-height: 25px;
    display: none;
    text-align: end;
    padding-right: 5px;
    user-select: none;
    &:hover {
      background-color: rgba($color: #000000, $alpha: 0.2);
    }
  }
  &:hover .exit {
    display: block;
  }
}
</style>
