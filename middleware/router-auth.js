import firebase from 'firebase/app'

export default function({ store, redirect, route }) {
  firebase.auth().onAuthStateChanged(user => {
    if (user && route.name === 'login') {
      return redirect('/')
    }
  })
}
