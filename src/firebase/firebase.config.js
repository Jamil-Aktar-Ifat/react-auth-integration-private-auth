// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAse2MX0ZtOfAaWVfGvf4pyJZr69G6YTMY",
  authDomain: "react-integration-private-auth.firebaseapp.com",
  projectId: "react-integration-private-auth",
  storageBucket: "react-integration-private-auth.appspot.com",
  messagingSenderId: "817038286082",
  appId: "1:817038286082:web:d4990b2d9c20566100f61b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
