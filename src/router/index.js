import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth-user',
    name: 'AuthUser',
    component: () => import('../views/AuthUser.vue')
  },
	{
    path: '/schedule-user',
    name: 'ScheduleUser',
    component: () => import(/* webpackChunkName: "about" */ '../views/ScheduleUser.vue')
  },
	{
    path: '/send-report',
    name: 'SendReport',
    component: () => import('../views/SendReport.vue')
  },
	{
    path: '/_',
    name: '_',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/_.vue')
  },
	{
    path: '/create-report',
    name: 'CreateReport',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateReport.vue')
  },
	{
    path: '*',
    name: 'Preview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Preview.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach(() => {
	window.scrollTo(0,0)
})

export default router
