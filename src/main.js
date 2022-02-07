import Vue from 'vue'
import App from './App.vue'
import vuetify from './vuetify'
import router from './router.js'
import store from './store.js'
import CreateWorker from './components/CreateWorker'
import CreateService from './components/CreateService'

Vue.config.productionTip = false

Vue.component("create-worker", CreateWorker)
Vue.component("create-service", CreateService)

new Vue({
  vuetify,
  router,
  store: store,
  render: h => h(App),
}).$mount('#app')
