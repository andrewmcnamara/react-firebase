import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/functions'
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
let db
let auth
let firestore
let functions
if (typeof window !== 'undefined') {
  //   db = firebase.database()
  auth = firebase.auth()
  firestore = firebase.firestore()
  functions = firebase.functions()
}

// const settings = { timestampsInSnapshots: true }
// firestore.settings(settings)
export { db, auth, firestore, functions }

export default firebase
