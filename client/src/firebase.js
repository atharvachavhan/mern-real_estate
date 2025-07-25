// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-dc540.firebaseapp.com",
  projectId: "mern-estate-dc540",
  storageBucket: "mern-estate-dc540.firebasestorage.app",
  messagingSenderId: "153315050652",
  appId: "1:153315050652:web:11ebe8b29069cc8d839959"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);