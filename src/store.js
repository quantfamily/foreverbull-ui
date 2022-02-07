import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    backtests: [],
    backtestSessions: [],
    workers: [],
    services: [],
  },
  mutations: {
    backtests (state, backtests) {
        state.backtests = backtests
    },
    backtestSessions (state, backtestSessions) {
        state.backtestSessions = backtestSessions
    },
    workers (state, workers) {
        state.workers = workers
    },
    services (state, services) {
        state.services = services
    }
  },
  actions: {
    getBacktests({ commit }) {
        axios.get("http://localhost:8080/api/v1/backtests")
        .then(response => {
            commit('backtests', response.data)
        })
    },
    getBacktestSession({ commit, backtest_id }) {
        axios.get(`http://localhost:8080/api/v1/backtests/${backtest_id}/sessions`)
        .then(response => {
            commit('backtestSessions', response.data)
        })
    },
    getWorkers({ commit }) {
        axios.get("http://localhost:8080/api/v1/workers")
        .then(response => {
            commit('workers', response.data)
        })
    },
    getServices({ commit }) {
        axios.get("http://localhost:8080/api/v1/services")
        .then(response => {
            commit('services', response.data)
        })
    }
  }
})

export default store
