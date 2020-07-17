import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAbhTftaO2J5mn5y-vfgb8LzC9xum_xiG0",
  authDomain: "react-firebase-5cc23.firebaseapp.com",
  databaseURL: "https://react-firebase-5cc23.firebaseio.com",
  projectId: "react-firebase-5cc23",
  storageBucket: "react-firebase-5cc23.appspot.com",
  messagingSenderId: "146295490187",
});

export default app;
