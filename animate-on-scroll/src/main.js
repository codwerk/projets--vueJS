import Vue from 'vue'
import App from './App.vue'
import ScrollAnimation from './assets/directives/scrollanimation'

Vue.directive('scrollanimation', ScrollAnimation);

new Vue({
  el: '#app',
  render: h => h(App)
})
