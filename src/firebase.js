import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCCztLzk3AMOKT2GQuoNYzTjbZE3iQWKIs",
  authDomain: "shop-coderhouse.firebaseapp.com",
  databaseURL: "https://shop-coderhouse.firebaseio.com",
  projectId: "shop-coderhouse",
  storageBucket: "shop-coderhouse.appspot.com",
  messagingSenderId: "986002407413",
  appId: "1:986002407413:web:3e5489077c41c6b5a26abc",
  measurementId: "G-N6V7NVNMMN"
});

export { firebaseConfig as firebase }