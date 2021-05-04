import firebase from "firebase/app"
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyDORDIwFU4n0uHSX_sYzM2bNUUlyp1HLoU",
    authDomain: "react-auth-87289.firebaseapp.com",
    projectId: "react-auth-87289",
    storageBucket: "react-auth-87289.appspot.com",
    messagingSenderId: "325601634008",
    appId: "1:325601634008:web:c8d20db84ee118da15d9ad",
    measurementId: "G-50SB8PYG41"
  };
  // Initialize Firebase
  const app=firebase.initializeApp(firebaseConfig);
  
export const auth=app.auth()

export default app