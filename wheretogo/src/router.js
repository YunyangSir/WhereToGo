import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/home/Home')
    },{
      path: '/city',
      name: 'City',
      component: () => import('./views/city/City')
    },{
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('./views/detail/Detail')
    }

  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
// component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
})
