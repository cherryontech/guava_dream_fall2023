// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMa9vZ2U12l03-Ok_FisAKp_niuMYV42Q",
  authDomain: "equivate-701c4.firebaseapp.com",
  projectId: "equivate-701c4",
  storageBucket: "equivate-701c4.appspot.com",
  messagingSenderId: "58383396654",
  appId: "1:58383396654:web:e792ccdb4668d5d49494bf",
  measurementId: "G-P5EP8Q7S6S"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initializing the authentication service

//SIGN OUT USER
const Home = () => {
    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
          console.error("Error occured during sign-out:", error);
        });
    }
   
    return(
        <>
          <nav>
            <p>Welcome Home</p>
          <div>
        <button onClick={handleLogout}>
                        Logout
              </button>
        </div>
          </nav>
        </>
    )
}
 
export { app, analytics, auth, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut , Home }