import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.mjs";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.mjs";
import { getAuth, getRedirectResult ,signInWithRedirect ,GoogleAuthProvider} from "firebase/auth"


var provider = new firebase.auth.GoogleAuthProvide// Firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";
import { getAuth, getRedirectResult ,signInWithRedirect ,GoogleAuthProvider} from "firebase/auth"


var provider = new firebase.auth.GoogleAuthProvider()

function login(){
  firebase.auth().signInWithRedirect(provider)
  firebase.auth()
  .getRedirectResult()
  .then((result) => {
    if (result.credential) {
      var credential = result.credential;
      var token = credential.accessToken;
    }
    var user = result.user;
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  })
  console.log(user)
}





const firebaseConfig = {
  apiKey: "AIzaSyBfwXRTyrsQfoxT-KrVJGNEKaZtQaE3vY0",
  authDomain: "worki-store.firebaseapp.com",
  projectId: "worki-store",
  storageBucket: "worki-store.appspot.com",
  messagingSenderId: "1078773341437",
  appId: "1:1078773341437:web:a3e9cf5e83660d6291b294",
  measurementId: "G-HGXRT7SNZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);r()

function login(){
  firebase.auth().signInWithRedirect(provider)
  firebase.auth()
  .getRedirectResult()
  .then((result) => {
    if (result.credential) {
      var credential = result.credential;
      var token = credential.accessToken;
    }
    var user = result.user;
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  })
  console.log(user)
}





const firebaseConfig = {
  apiKey: "AIzaSyBfwXRTyrsQfoxT-KrVJGNEKaZtQaE3vY0",
  authDomain: "worki-store.firebaseapp.com",
  projectId: "worki-store",
  storageBucket: "worki-store.appspot.com",
  messagingSenderId: "1078773341437",
  appId: "1:1078773341437:web:a3e9cf5e83660d6291b294",
  measurementId: "G-HGXRT7SNZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);