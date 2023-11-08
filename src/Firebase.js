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