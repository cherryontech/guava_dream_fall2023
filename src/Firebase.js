// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

export {app, analytics}