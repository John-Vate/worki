import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";
import { getAuth, getRedirectResult ,signInWithRedirect ,GoogleAuthProvider} from "firebase/auth"
import { app } from "../../services/firebaseConfig"

const provider = new GoogleAuthProvider()

const auth = getAuth();



function login(){
  const auth = getAuth(app);
  const sigInGoogle = ()=>{
    signInWithRedirect(auth, provider);
    .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
  }

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