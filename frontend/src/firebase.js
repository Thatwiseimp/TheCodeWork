import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCTHUnXrzf7_rTB_kLDYnWu-nkOeXBXTsA",
    authDomain: "thecodework-d3bdd.firebaseapp.com",
    projectId: "thecodework-d3bdd",
    storageBucket: "thecodework-d3bdd.appspot.com",
    messagingSenderId: "1017699816019",
    appId: "1:1017699816019:web:7b6ffda37615614757aca6",
    measurementId: "G-9XHD069XSR"
  });

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{ db, auth, provider }