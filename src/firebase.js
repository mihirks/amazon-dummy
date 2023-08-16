// import firebase from "firebase";
// import { initializeApp, getApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcMilCO_nVH8DnXB5F_DxvTQOUQvv-EBo",
    authDomain: "clone-6618c.firebaseapp.com",
    projectId: "clone-6618c",
    storageBucket: "clone-6618c.appspot.com",
    messagingSenderId: "755180108675",
    appId: "1:755180108675:web:3057fb6300aa9bbe5354b6",
    measurementId: "G-DP388EK4DN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();

// export { db, auth} ;