import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counst: 0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setcount (state, count) {
        state.count = count
    }
  }
})
