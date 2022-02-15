import firebase from "firebase/app"
import "firebase/auth"

export const validator = firebase.initializeApp({
    apiKey: "AIk",
    authDomain: "foom",
    projectId: "fo",
    storageBucket: "fooom",
    messagingSenderId: "16134273",
    appId: "1:16552a40"
}).auth();
