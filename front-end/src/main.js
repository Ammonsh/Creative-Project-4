import Vue from 'vue'
import App from './App.vue'
import router from './router'
import bookData from './data.js'

Vue.config.productionTip = false

let data = {
  books: bookData
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
