import Vue from 'vue'
import Router from 'vue-router'

// import A from 'A.vue';
// import Login from 'B.vue'
// import C from 'C.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: () =>
                import('@/views/tabbar-layout'),
    children: [{
      path: '/',
      name: 'home',
      // 路由的 ->组件的懒加载
      component: () => import('@/views/home')
    },
    {
      path: '/mine',
      name: 'mine',
      // 路由的 ->组件的懒加载
      component: () =>
                  import('@/views/mine')
    }
    ]
  },
  {
    path: '/login',
    name: 'login',
    // 路由的 ->组件的懒加载
    component: () =>
                import('@/views/login')
  },
  {
    path: '/search',
    name: 'search',
    // 路由的 ->组件的懒加载
    component: () =>
                import('@/views/search')
  },
  {
    path: '/search-result',
    name: 'search-result',
    // 路由的 ->组件的懒加载
    component: () =>
                import('@/views/search/search-result.vue')
  },
  {
    path: '/article/:article_id',
    name: 'article',
    // 路由的 ->组件的懒加载
    component: () =>
                import('@/views/article')
  },
  {
    path: 'user-profile',
    name: 'user-profile',
    // 路由的 ->组件的懒加载
    component: () =>
                import('@/views/user-profile')
  }

  ]
})
