import Vue from 'Vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

const MapTest = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    buttonAction({ commit, state, rootState })  {
      console.log("buttonAction")
    }
 }
}

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    MapTest
  },
  strict: true
})
