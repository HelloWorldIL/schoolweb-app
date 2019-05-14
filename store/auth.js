import firebase from 'firebase'

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
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          resolve(user)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  logOut({ commit }) {
    firebase.auth().signOut()
    commit('setUser', null)
  }
}
