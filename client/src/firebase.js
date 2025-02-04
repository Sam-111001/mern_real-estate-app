// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d19a2.firebaseapp.com",
  projectId: "mern-estate-d19a2",
  storageBucket: "mern-estate-d19a2.firebasestorage.app",
  messagingSenderId: "385456482936",
  appId: "1:385456482936:web:71bcf36b47793f0be11b8d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
