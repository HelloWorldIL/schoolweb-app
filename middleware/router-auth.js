export default function({ store, redirect, route }) {
  if (store.state.auth.user != null && route.name === 'login') {
    return redirect('/')
  }
}
