// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3A3uLFFFPHoGNHZZkcHppXVYuIpyfeF4",
  authDomain: "auth-mohamilon-86be7.firebaseapp.com",
  projectId: "auth-mohamilon-86be7",
  storageBucket: "auth-mohamilon-86be7.firebasestorage.app",
  messagingSenderId: "203202709477",
  appId: "1:203202709477:web:cecd95579e3403859e510c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;