// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzkGgVTbV4yDDiZh2GDz5IJyVMuRo3etk",
  authDomain: "guava-dream---equivate.firebaseapp.com",
  projectId: "guava-dream---equivate",
  storageBucket: "guava-dream---equivate.appspot.com",
  messagingSenderId: "553995723452",
  appId: "1:553995723452:web:e614faecdbb09fea00e6b9",
  measurementId: "G-GQ0Z4C0RQT"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
​​const auth = getAuth(app);
​​const db = getFirestore(app);

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//Add user -- does this need it's own page?
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

//Authenticate user 
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

export {app, analytics}
export const auth = getAuth(app)