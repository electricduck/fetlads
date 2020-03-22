import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

Vue.use(VueRouter)

let titleSuffix = "| Fetlads"

const routes = [
  {
    path: '*',
    component: NotFound
  },
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
    path: '/about',
    name: 'About',
    component: () => import('./views/About.vue'),
    meta: {
      title: `About ${titleSuffix}`
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
