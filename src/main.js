import Vue from 'vue'
import App from './App.vue'
import vuetify from './vuetify'
import router from './router.js'
import store from './store.js'
import CreateWorker from './components/CreateWorker'
import CreateService from './components/CreateService'
import CreateBacktest from './components/CreateBacktest'

Vue.config.productionTip = false

Vue.component("create-worker", CreateWorker)
Vue.component("create-service", CreateService)
Vue.component("create-backtest", CreateBacktest)

new Vue({
  vuetify,
  router,
  store: store,
  render: h => h(App),
}).$mount('#app')
