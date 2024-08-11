import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostView from '../views/ViewPost.vue'
import UserView from '../views/ViewUser.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostView
    },

    {
      path: '/users',
      name: 'users',
      component: UserView
    },
  ]
})

export default router
