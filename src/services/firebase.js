import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyDXGr92Nd6th3u7BHKLt4o3kE-82sJw2hA",
  authDomain: "chatty-a37af.firebaseapp.com",
  databaseURL: "https://chatty-a37af.firebaseio.com",
  projectId: "chatty-a37af",
  storageBucket: "chatty-a37af.appspot.com",
  messagingSenderId: "1086071296017",
  appId: "1:1086071296017:web:a686248b109079501c61b0"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();