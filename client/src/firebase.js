import firebase from "firebase/app"
import "firebase/auth"

var firebaseConfig = {

  };
  // Initialize Firebase
  const app=firebase.initializeApp(firebaseConfig);
  
export const auth=app.auth()

export default app