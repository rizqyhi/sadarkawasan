// This file is used in earlier version of this app
// Keep for later use
const firebase = require('firebase')
require('firebase/firestore')

const config = {}

export const Firebase = firebase.initializeApp(config)
export const Firestore = Firebase.firestore()

export default {
  install (Vue, options) {
    Vue.prototype.$firebase = Firebase
  }
}
