import { auth } from '~/services/firebaseinit.js'

export default ({ store }) => {
  return new Promise(resolve => {
    auth.onAuthStateChanged(function(user) {
      store.commit('auth/setLoaded', true)
      if (user) {
        return resolve(
          store.commit('auth/setUser', {
            email: user.email,
            uid: user.uid,
            name: user.displayName
          })
        )
      }
      return resolve()
    })
  })
}
