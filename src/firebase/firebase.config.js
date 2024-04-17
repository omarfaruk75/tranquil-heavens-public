// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('inside firebase config',import.meta.env.VITE_PASS)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_APTHDOMAIN,
  projectId:import.meta.env.VITE_APOJECTID ,
  storageBucket:import.meta.env.VITE_APORAGEBUCKET ,
  messagingSenderId:import.meta.env.VITE_APSSAGINGSENDERID ,
  appId:import.meta.env.VITE_APPID 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;