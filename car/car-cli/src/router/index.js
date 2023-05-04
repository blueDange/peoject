import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home1',
    component: HomeView,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },

  {
    path: '/com',
    name: 'productlist',
    component: () => import('../views/ProductSelection/ProSetCom.vue'),
    redirect: '/com/list',
    meta: {
      nav: [
        { name: '主页', path: '/' },
        { name: '产品选购', path: '/com/list' },
      ],
    },
    children: [
      {
        path: 'detail',
        name: 'detail',
        component: () => import('../views/ProductSelection/ProductDetail.vue'),
        meta: {
          nav: [
            { name: '主页', path: '/' },
            { name: '产品选购', path: '/com/list' },
          ],
        },
      },
      {
        path: 'list',
        name: 'list',
        component: () => import('../views/ProductSelection/ProductList.vue'),
        meta: {
          nav: [
            { name: '主页', path: '/' },
            { name: '产品选购', path: '/com/list' },
          ],
        },
      },
    ],
  },

  {
    path: '/success-list',
    name: 'success-list',
    component: () => import('../views/success/SuccessList.vue'),
    meta: {
      nav: [
        { name: '主页', path: '/' },
        { name: '成功案例', path: '/success-list' },
      ],
    },
  },
  {
    path: '/success-deta/:id',
    name: 'success-deta',
    component: () => import('../views/success/SuccessDeta.vue'),
    meta: {
      nav: [
        { name: '主页', path: '/' },
        { name: '成功案例', path: '/success-list' },
      ],
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/about.vue'),
    meta: {
      nav: [
        { name: '主页', path: '/' },
        { name: '关于我们', path: '/about' },
      ],
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact/contact.vue'),
    meta: {
      nav: [
        { name: '主页', path: '/' },
        { name: '联系我们', path: '/contact' },
      ],
    },
  },
  {
    path: '/newsList',
    name: 'newsList',
    component: () => import('../views/news/newsList.vue'),
    meta: {
      nav: [
        { name: '主页', path: '/' },
        { name: '新闻资讯', path: '/newsList' },
      ],
    },
  },

  {
    path: '/newsdetail/:id',
    name: 'newsdetail',
    component: () => import('../views/news/newsDetail.vue'),
    meta: {
      nav: [
        { name: '主页', path: '/' },
        { name: '新闻资讯', path: '/newslist' },
      ],
    },
  },
  {
    path: '/newscenter',
    name: 'newscenter',
    component: () => import('../views/news/newsCenter.vue'),
    meta: {
      nav: [
        { name: '主页', path: '/' },
        { name: '新闻资讯', path: '/newslist' },
      ],
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/user/login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/user/register.vue'),
  },
  {
    path: '/intention',
    name: 'intention',
    component: () => import('../views/user/intention.vue'),
  },
  {
    path: '/initialPlan',
    name: 'initialPlan',
    component: () => import('../views/initialPlan/initialPlan.vue'),
    meta: {
      nav: [
        { name: '主页', path: '/' },
        { name: '前期规划', path: '/initialPlan' },
      ],
    },
  },
  {
    path: '/latePromotion',
    name: 'latePromotion',
    component: () => import('../views/latePromotion/latePromotion.vue'),
    meta: {
      nav: [
        { name: '主页', path: '/' },
        { name: '后期推广', path: '/latePromotion' },
      ],
    },
  },
]

const router = new VueRouter({
  routes,

  mode: 'history',
  base: process.env.BASE_URL,
  // ? 下方代码是为了解决路由跳转后不在顶部展示
  scrollBehavior(to, from, savedPosition) {
    // 期望滚动到哪个位置
    return {
      x: 0,
      y: 0,
    }
  },
})

export default router
