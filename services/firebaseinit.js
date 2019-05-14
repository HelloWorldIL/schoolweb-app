import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyCgmPj_fg9d3TLa-M70JQ2xX2WZDmlPUBE',
    authDomain: 'schoolwebapp-4e498.firebaseapp.com',
    databaseURL: 'https://schoolwebapp-4e498.firebaseio.com',
    projectId: 'schoolwebapp-4e498',
    storageBucket: 'schoolwebapp-4e498.appspot.com',
    messagingSenderId: '342704817343',
    appId: '1:342704817343:web:9abb68d8a9b6a697'
  }

  firebase.initializeApp(config)
}

export const auth = firebase.auth()
export const db = firebase.firestore()
export default firebase
