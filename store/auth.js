import firebase from 'firebase'
export const state = () => ({
  user: null
})

export const getters = {
  isAuthenticated: state => {
    return state.user != null
  }
}

export const mutations = {
  setUser(state, user) {
    state.user = user
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
  }
}
