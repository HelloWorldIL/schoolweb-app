import { authGuard } from '@/helpers/auth-guard'

export default ({ app, route, store, redirect }) => {
  // Auth guard on first page load
  const pathToRedirect = authGuard(route, store)
  if (pathToRedirect !== null) {
    app.router.onReady(function() {
      redirect(pathToRedirect)
    })
  }
  store.subscribe((mutation, state) => {
    if (mutation.type === 'auth/setUser') {
      if (pathToRedirect !== null) {
        redirect(pathToRedirect)
      }
    }
  })
}
