// Firebase

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
const analytics = getAnalytics(app);



// Header

let logobtn= document.querySelector("#logobtn")
let nav= document.querySelector(".l-nav")
let perfilheader = document.querySelector(".perfilheader")
let btswitch = document.querySelector(".btswitch")

// =================== Main ==================

// cards

let home = document.querySelector("#home")
let servicos = document.querySelector("#serviços")
let produtos = document.querySelector("#produtos")
let padulto = document.querySelector("#padulto")
let pinfantil = document.querySelector("#pinfantil")
let sadulto = document.querySelector("#sadulto")
let sinfantil = document.querySelector("#sinfantil")

// buttons

let rhome = document.querySelector("#rhome")
let btservicos =  document.querySelector("#btservicos")
let btprodutos =  document.querySelector("#btprodutos")
let btpadulto =  document.querySelector("#btpadulto")
let btpinfantil = document.querySelector("#btpinfantil")
let btsadulto = document.querySelector("#btsadulto")
let btsinfantil = document.querySelector("#btsinfantil")

// ===================== Footer ===================

let btnservicos = document.querySelector(".btnservicos")
let btnhome = document.querySelector(".btnhome")
let btnprodutos = document.querySelector(".btnprodutos")

let body = document.querySelector(".body")
let preload = document.querySelector(".preload")
let container = document.querySelector(".container")
let shop = document.querySelector(".store")

perfilheader.addEventListener('click', ()=>{
    nav.classList.toggle("activenav")
})

function loading(){
    zero()
    container.style.display= "flex"
    preload.style.display= "none"
    home.style.display = "flex"
    login()
}

btservicos.addEventListener("click", ()=>{
    zero()
    servicos.style.display= "flex"
})

function zero(){
    home.style.display = "none"
    servicos.style.display = "none"
    produtos.style.display ="none"
    padulto.style.display ="none"
    pinfantil.style.display ="none"
    sadulto.style.display ="none"
    sinfantil.style.display ="none"
}
logobtn.addEventListener("click", ()=>{
    zero()
    home.style.display = "flex"
})
btprodutos.addEventListener("click", ()=>{
    zero()
    produtos.style.display ="flex"
})
btsadulto.addEventListener("click", ()=>{
    zero()
    sadulto.style.display ="flex"
})
btsinfantil.addEventListener("click", ()=>{
    zero()
    sinfantil.style.display ="flex"
})
btpadulto.addEventListener("click", ()=>{
    zero()
    padulto.style.display ="flex"
})
btpinfantil.addEventListener("click", ()=>{
    zero()
    pinfantil.style.display ="flex"
})

btswitch.addEventListener("click", ()=>{
    btswitch.classList.toggle("activeswitch")
    document.querySelector("body").classList.toggle("temalight")
})



