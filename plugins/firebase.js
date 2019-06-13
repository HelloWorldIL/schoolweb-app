import { auth } from '~/services/firebaseinit.js'

export default ({ store }) => {
  return new Promise(resolve => {
    auth().onAuthStateChanged(function(user) {
      store.commit('auth/setLoaded', true)
      if (user) {
        return resolve(
          store.commit('auth/setUser', JSON.parse(JSON.stringify(user)))
        )
      }
      return resolve()
    })
  })
}
