import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

Vue.use(VueRouter)

let titleSuffix = "| Fetlads"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Fetlads"
    },
    children: [
      {
        path: ':id/:slug',
        name: 'Home_Post',
        component: () => import('./components/Post.vue')
      }
    ]
  },
  {
    path: '/cat',
    name: 'Test',
    component: () => import('./views/Test.vue'),
    meta: {
      title: `Meow. ${titleSuffix}`
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
