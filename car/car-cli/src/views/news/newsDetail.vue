<template>
  <div>
    <router-view></router-view>
    <nav-menu></nav-menu>
    <car-head :avatar="require('../../assets/news/01.jpg')">
      <div slot="bream" class="bream">
        <el-breadcrumb-item></el-breadcrumb-item>
      </div>
    </car-head>

    <!-- 内容部分 -->
    <div class="center" v-for="(item, i) in detail" :key="i">
      <h3>{{ item.title }}</h3>
      <div>
        <span>发表时间：{{ item.ntime }}</span>
        <span>浏览量：{{ item.browse }}</span>
      </div>
      <p>{{ item.text }}</p>
      <img :src="require(`@/assets/news/` + item.pic)" alt="" />
    </div>
    <div class="der"></div>
    <!-- 页脚 -->
    <foot></foot>
    <!-- 回到顶部 -->
    <go-top></go-top>
  </div>
</template>

<script>
import CarHead from "../../components/CarHead.vue";
import NavMenu from "../../components/NavMenu";
import Foot from "../../components/Foot.vue";
import GoTop from "../../components/GoTop.vue";
import httpApi from "../../http";
export default {
  data() {
    return {
      detail: {},
    };
  },
  components: {
    CarHead,
    NavMenu,
    Foot,
    GoTop,
  },
  mounted() {
    let params = { nid: this.$route.params.id };
    httpApi.newsApi.deta(params).then((res) => {
      console.log(res.data);
      this.detail = res.data.data;
      // console.log('detail',this.detail);
    });
  },
};
</script>

<style lang="scss" scoped>
.center {
  width: 1230px;
  margin: 0 auto;
  h3 {
    width: 100%;
    text-align: center;
    padding-top: 60px;
    font-weight: normal;
  }
  div {
    width: 100%;
    height: 30px;
    text-align: center;
    font-size: 12px;
    line-height: 30px;
    background-color: #e9e9e9;
    margin: 20px 0;
    span {
      padding: 0 20px;
    }
  }
  p {
    color: #777777;
    font-size: 14px;
    line-height: 23px;
  }
  img {
    display: block;
    margin: 30px auto;
  }
}
.der {
  margin: 30px auto;
  width: 1200px;
  height: 50px;
  border-top: 1px solid #717171;
}
</style>
