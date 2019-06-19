export default ({ app, store, redirect }) => {
  app.router.beforeEach((to, from, next) => {
    // Check if route is login and redirect
    if (
      store.getters['auth/isAuthenticated'] &&
      (to.name === 'login' || to.name === 'signup')
    ) {
      next(false)
      return redirect('/')
    }
    // Register watcher for auth status changes
    store.subscribe((mutation, state) => {
      if (mutation.type === 'auth/setUser' && mutation.payload !== null) {
        if (to.name === 'login' || to.name === 'signup') {
          next(false)
          return redirect('/')
        }
      }
    })
    next()
  })
}
