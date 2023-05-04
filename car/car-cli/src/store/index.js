import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  // 全局变量
  state: {
    //要设置全局访问的state对象
    //要设置的初始属性值
    userInfo: sessionStorage.getItem('userInfo')
      ? JSON.parse(sessionStorage.getItem('userInfo'))
      : '',
  },
  //修改全局变量必须通过mutation中的方法
  mutations: {
    // 登录
    login(state, payload) {
      state.userInfo = payload
      sessionStorage.setItem('userInfo', JSON.stringify(payload))
    },
    // 退出登录
    loginout(state) {
      sessionStorage.clear()
      state.userInfo = undefined
    },
  },
  actions: {},
})
