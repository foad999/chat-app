import firebase from "firebase/app"
import "firebase/auth"

export const validator = firebase.initializeApp({
    apiKey: "AIzaSyBC9XRoBe3rTeUKzxHzvEEoaHU623CVhhk",
    authDomain: "foochat-1622e.firebaseapp.com",
    projectId: "foochat-1622e",
    storageBucket: "foochat-1622e.appspot.com",
    messagingSenderId: "165521134273",
    appId: "1:165521134273:web:45040be5d725cf77193a40"
}).auth();