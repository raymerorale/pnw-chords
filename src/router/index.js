import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Create from '../views/Create'
import Show from '../views/Show'
import Edit from '../views/Edit'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
  },
  {
    path: '/:id',
    name: 'Show',
    component: Show
  },
  {
    path: '/:id/edit',
    name: 'Edit',
    component: Edit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
