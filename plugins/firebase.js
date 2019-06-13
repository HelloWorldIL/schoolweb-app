import { auth } from '~/services/firebaseinit.js'

export default ({ store }) => {
  return new Promise(resolve => {
    auth().onAuthStateChanged(function(user) {
      if (store.getters['auth/isLoaded'] === false) {
        store.commit('auth/setLoaded', true)
      }
      if (user) {
        return resolve(
          // JSON actions to deep copy object
          store.commit('auth/setUser', JSON.parse(JSON.stringify(user)))
        )
      }
      return resolve()
    })
  })
}
