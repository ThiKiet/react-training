import * as firebase from "firebase/app";
import "firebase/auth";

const config = firebase.initializeApp({
  apiKey: "AIzaSyCruiPIlgEI_l_-Q4YaJ7tLtgaVA_jWmJg",
  authDomain: "milkteashop-be056.firebaseapp.com",
  databaseURL: "https://milkteashop-be056.firebaseio.com",
  projectId: "milkteashop-be056",
  storageBucket: "milkteashop-be056.appspot.com",
  messagingSenderId: "1006548109432",
});

class Firebase {
  constructor() {
    app.initializeApp(config);
 
    this.auth = app.auth();
  } 
  //registration
  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);

  //login
  doSignInWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}
 
export default Firebase;
