import { authGuard } from '@/helpers/auth-guard'

export default ({ route, store, redirect }) => {
  if (process.server) return
  const pathToRedirect = authGuard(route, store)
  if (pathToRedirect !== null) {
    redirect(pathToRedirect)
  }
  store.subscribe((mutation, state) => {
    if (mutation.type === 'auth/setUser') {
      const pathToRedirect = authGuard(route, store)
      if (pathToRedirect !== null) {
        redirect(pathToRedirect)
      }
    }
  })
}
