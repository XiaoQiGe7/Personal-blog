import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import api from 'axios'

Vue.prototype.$api = api;
Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:() => import('./views/index'),
    children:[
      {
        path:'',
        component:() => import('./components/card')
      },
      {
        path:'article',
        name:'article',
        props:true,
        component:() => import('./components/article')
      }
    ]
  },
  {
    path:'/sign',
    component:() => import('./views/sign')
  },
  {
    path:'/register',
    component:() => import('./views/register')
  },
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
