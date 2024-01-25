/* eslint-disable no-underscore-dangle */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    SERVER_URL: 'https://test1.crimelabs.eu',
    username: undefined,
    userExist: false,
  },
  getters: {
    getUsername(state) {
      const localUser = localStorage.getItem('username')
      if (state.username) {
        return state.username
      }
      if (localUser) {
        return localUser
      }
      return undefined
    },
    isUserExist(state) {
      return state.userExist
    },
  },
  mutations: {
    updateUsername(state, payload) {
      if (payload) {
        state.username = payload._id
        state.userExist = true
      } else {
        state.username = undefined
        state.userExist = false
      }
    },
    // eslint-disable-next-line no-unused-vars
    insertAndUpdate(state, payload) {
      // eslint-disable-next-line no-console
      console.log('mutations', payload)
    },
  },
  actions: {
    async register(context, payload) {
      await axios.post(`${context.state.SERVER_URL}/register`, {
        username: payload.username,
      })
        .then(response => {
          context.commit('updateUsername', response.data.message)
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    },
    async login(context, payload) {
      await axios.get(`${context.state.SERVER_URL}/user/${payload.username}`)
        .then(response => {
          context.commit('updateUsername', response.data)
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    },
    async insertAndUpdate(context, payload) {
      await axios.post(`${context.state.SERVER_URL}/user/levels`, {
        username: context.getters.getUsername,
        level: payload.level,
        data: payload.data,
      })
        .then(response => {
          context.commit('insertAndUpdate', response)
        })
        .catch(error => {
        // eslint-disable-next-line no-console
          console.log(error)
        })
    },
  },
  modules: {
  },
})
