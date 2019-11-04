import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import FacailCare from '@/views/FacailCare'
import BodyCare from '@/views/BodyCare'
import Cosmetics from '@/views/Cosmetics'
import Securities from '@/views/Securities'
import Integral from '@/views/Integral'
import FenLei from '@/views/FenLei'
import Login from '@/components/Login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/facailcare',
          name: 'FacailCare',
          component: FacailCare
        },
        {
          path: '/bodycare',
          name: 'BodyCare',
          component: BodyCare
        },
        {
          path: '/cosmetics',
          name: 'Cosmetics',
          component: Cosmetics
        },
        {
          path: '/securities',
          name: 'Securities',
          component: Securities
        },
        {
          path: '/integral',
          name: 'Integral',
          component: Integral
        },
        {
          path: '/fenlei',
          name: 'FenLei',
          component: FenLei
        }
       
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
