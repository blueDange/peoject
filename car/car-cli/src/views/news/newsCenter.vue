<template>
  <div>
    <nav-menu></nav-menu>
    <car-head :avatar="require('../../assets/news/news-banner.jpg')">
      <div slot="bream" class="bream">
        <el-breadcrumb-item></el-breadcrumb-item>
      </div>
    </car-head>
    <!-- 主体内容 -->
    <div class="content">
      <h1>搜索页</h1>
      <div
        class="cont1"
        v-for="(item, i) in lists"
        :key="i"
        @click="$router.push(`newsdetail/${item.nid}`)"
      >
        <div class="c-left">
          <div class="l-time">
            <p>14</p>
            <span>2020-01-14</span>
          </div>
          <img :src="require('@/assets/news/' + item.pic)" alt="" />
        </div>
        <div class="c-right">
          <div>
            <a v-html="kwstyle(item.title, keyword)"></a>
            <span>浏览：{{ item.browse }}次</span>
            <p>{{ item.text }}</p>
          </div>
          <div>
            <a>查看详情</a>
          </div>
        </div>
      </div>
      <div v-if="lists.length == 0">暂无相关内容</div>
    </div>
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
      lists: {},
      keyword: this.$route.query.keyword,
    };
  },
  components: {
    CarHead,
    NavMenu,
    Foot,
    GoTop,
  },
  methods: {
    // 搜索关键词高亮
    // val:关键词所在的内容区域，keyword：关键词
    kwstyle(val, keyword) {
      const Reg = new RegExp(keyword, "i");
      if (val) {
        return val.replace(Reg, `<span style="color: red;">${keyword}</span>`);
      }
    },
    // 防抖，多次请求模糊搜索接口1.5s后执行一次
    list: _.debounce(function () {
      // console.log(this.$route.query.keyword);
      let params = { keyword: this.$route.query.keyword };
      httpApi.newsApi.search(params).then((res) => {
        // console.log(res);
        this.lists = res.data.data;
        console.log("发请求", this.keyword);
      });
    }, 1500),
  },
  // watch: {
  //   keyword(newval, oldval) {
  //     console.log("2关键词变化了", newval);
  //   },
  // },
  mounted() {
    // 列表数据
    this.list();
    // this.$forceUpdate();
  },
  // updated() {
  //   this.list();
  //   console.log('keyword',this.keyword);
  // },
};
</script>

<style lang="scss" scoped>
.content {
  width: 1200px;
  margin: 0 auto 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > h1 {
    font-weight: normal;
    margin: 60px 0;
  }
  > .cont1 {
    display: flex;
    border-bottom: 1px dashed #cdcdcd;
    padding-bottom: 30px;
    margin-bottom: 30px;
    > .c-left {
      display: flex;

      > .l-time {
        margin: 50px 50px;
        display: flex;
        flex-direction: column;
        width: 120px;
        height: 31px;

        p {
          padding-bottom: 10px;
          font-weight: bold;
          text-align: center;
          font-size: 31px;
          color: black;
          border-bottom: 1px solid #838383;
        }

        span {
          padding-top: 20px;
          font-size: 12px;
          text-align: center;
        }
      }

      img {
        width: 300px;
        height: 180px;
      }
    }
    > .c-right {
      padding-left: 50px;
      width: 680px;
      height: 180px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      div:first-child {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100px;
        p {
          overflow: hidden;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
        a {
          color: #545454;
          font-size: 18px;
          &:hover {
            color: #38b549;
          }
        }
      }
      div:last-child {
        width: 146px;
        height: 40px;
        border: 1px solid #545454;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          background-color: #777;
          a {
            color: white;
          }
        }

        a {
          color: #545454;
        }
      }
    }
  }
  > .c-line {
    padding-bottom: 50px;
  }
  > div {
    color: #777;
    font-size: 14px;
    > p {
      margin-bottom: 15px;
      line-height: 23px;
      text-indent: 2em;
    }
  }
}
</style>
