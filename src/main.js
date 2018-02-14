import Vue from 'vue'
import Buefy from 'buefy'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(Buefy)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
