import { auth } from '~/services/firebaseinit'

export const state = () => ({
  user: null,
  loaded: false
})

export const getters = {
  isAuthenticated: state => {
    return state.user != null
  },
  currentUser: state => {
    return state.user
  },
  isLoaded: state => {
    return state.loaded
  }
}

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setLoaded(state, status) {
    state.loaded = status
  }
}

export const actions = {
  loginUsingEmail({ commit }, payload) {
    return new Promise((resolve, reject) => {
      auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          resolve(user)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  signUpUsingEmail({ commit }, payload) {
    return new Promise((resolve, reject) => {
      auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          user.user.updateProfile(payload.name).then(() => {
            resolve(user.user)
          })
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  signInUsingGoogle({ commit }) {
    return new Promise((resolve, reject) => {
      const provider = new auth.GoogleAuthProvider()
      auth()
        .signInWithPopup(provider)
        .then(user => {
          resolve(user)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  logOut({ commit }) {
    auth().signOut()
    commit('setUser', null)
  }
}
