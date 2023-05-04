<template>
  <div>
    <div class="count" v-if="!this.type">
      <h3>{{ title }}</h3>
      <div class="pic">
        <img :src="require('../../assets/car-detail-img/' + pic1)" alt="" />
        <img :src="require('../../assets/car-detail-img/' + pic2)" alt="" />
      </div>
    </div>
    <product-list v-if="this.type" />
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

import httpApi from '../../http'
import ProductList from './ProductList.vue'
export default {
  components: { ProductList },
  data() {
    return {
      type: 0,
      title: '',
      pic1: '',
      pic2: '',
    }
  },
  methods: {
    // 模糊查询
    blur(params) {
      httpApi.prosetApi.prosettype(params).then(res => {
        this.list = res.data.data
      })
    },
  },
  mounted() {
    let id = { id: this.$route.query.id }
    let title = { title: this.$route.query.title }
    httpApi.prosetApi.prosetdetail(id).then(res => {
      title = title.title
      let result = res.data.data.result
      result.forEach(element => {
        let a = element.pic
        let b = a.split('#')
        let pic1 = b.at(0)
        let pic2 = b.at(1)
        this.pic1 = pic1
        this.pic2 = pic2
      })
      this.title = title
    })
    pubsub.subscribe('typeChange', (_, b) => {
      // 消息订阅-类型
      this.type = parseInt(b)
      console.log('收到消息', this.type)
    })
  },
}
</script>

<style lang="scss" scoped>
.pic {
  max-width: 1230px;
  min-width: 1200px;
  margin: 0 auto;

  img {
    width: 100%;
  }
}
h3 {
  font-weight: 400;
  text-align: center;
  margin: 50px 0;
}
</style>
