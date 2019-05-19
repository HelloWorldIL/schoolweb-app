import { auth } from '@/services/firebaseinit'

export default function({ store, redirect, route }) {
  auth().onAuthStateChanged(user => {
    if (user && route.name === 'login') {
      return redirect('/')
    }
  })
}
