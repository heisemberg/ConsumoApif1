import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsuariosView from '../views/UsuariosView.vue'
import ImagenesView from '../views/ImagenesView.vue'
import LoginView from '../views/LoginView.vue'
import RegistroView from '../views/RegistroView.vue'
import ClientesView from '../views/ClientesView.vue'
import NoticiasF1View from '../views/NoticiasF1View.vue'
import ScoreboardF1View from '../views/ScoreboardF1View.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: UsuariosView
  },
  {
    path: '/imagenes',
    name: 'imagenes',
    component: ImagenesView
  },
  {
    path: '/clientes',
    name: 'clientes',
    component: ClientesView
  },
  {
    path: '/noticiasf1',
    name: 'noticiasf1',
    component: NoticiasF1View
  },
  {
    path: '/scoreboardf1',
    name: 'scoreboardf1',
    component: ScoreboardF1View
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/registro',
    name: 'registro',
    component: RegistroView
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
