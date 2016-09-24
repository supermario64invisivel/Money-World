import Vue from 'vue'
import Game from './components/Game/Game.vue'

Vue.prototype.$amount = (value) => (Math.floor(value))

new Vue({
  el: '#game',
  render: h => h(Game)
})
