import Vue from 'vue'
import Router from 'vue-router'
import ColEditWindow from '../views/ColEditWindow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ColEditWindow',
      name: 'ColEditWindow',
      component: ColEditWindow
    }
  ]
})
