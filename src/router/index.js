import Vue from 'vue'
import Router from 'vue-router'
import publicRotues from './public-routes'
import dashboardRoutes from './dashboard-routes'

Vue.use(Router)

export default new Router({
  routes: publicRotues.concat(dashboardRoutes),
  linkExactActiveClass: 'is-active'
})
