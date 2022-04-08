// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu4BuAspZbSDQxwIjyhGRjq7dTxgBeqjg",
  authDomain: "router-firebase-integrat-53cf2.firebaseapp.com",
  projectId: "router-firebase-integrat-53cf2",
  storageBucket: "router-firebase-integrat-53cf2.appspot.com",
  messagingSenderId: "875005599346",
  appId: "1:875005599346:web:1cea75e136e61a2a762ceb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app