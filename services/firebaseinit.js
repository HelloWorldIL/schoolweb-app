import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyBcPNTg5hx3etRfdmCMNb3XPMHVFY736ok',
    authDomain: 'schoolwebsite-976de.firebaseapp.com',
    databaseURL: 'https://schoolwebsite-976de.firebaseio.com',
    projectId: 'schoolwebsite-976de',
    storageBucket: 'schoolwebsite-976de.appspot.com',
    messagingSenderId: '254501702467',
    appId: '1:254501702467:web:3312d4eb90218a43'
  }

  firebase.initializeApp(config)
}

export const auth = firebase.auth
export const db = firebase.firestore
export const storage = firebase.storage
export default firebase
