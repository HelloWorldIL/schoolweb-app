import { auth } from '~/services/firebaseinit.js'

export default ({ store }) => {
  return new Promise(resolve => {
    auth.onAuthStateChanged(function(user) {
      store.commit('auth/setLoaded', true)
      if (user) {
        // eslint-disable-next-line no-console
        console.log(user)
        return resolve(
          store.commit('auth/setUser', JSON.parse(JSON.stringify(user)))
        )
      }
      return resolve()
    })
  })
}
