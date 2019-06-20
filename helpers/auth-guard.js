export function authGuard(route, store) {
  // Auth levels:
  /**
   * Auth Levels:
   * -1 - guest only
   * 0 - ALL
   * 1 - registered
   * 2 - Admin
   */

  const authLevel = route.meta.find(meta => {
    if (meta.auth !== undefined) {
      return meta.auth
    }
  })
  // eslint-disable-next-line no-console
  console.log(authLevel)
  if (authLevel === undefined) {
    return null
  }
  if (authLevel.auth === -1 && store.getters['auth/isAuthenticated']) {
    return '/'
  }
  if (authLevel.auth === 1 && !store.getters['auth/isAuthenticated']) {
    return '/login'
  }
  return null
}
