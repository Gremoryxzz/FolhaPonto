// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdNR7gFYdkOcJac21BBfO_70SADAQn4Jk",
  authDomain: "folhadepontoapp-ca1dd.firebaseapp.com",
  projectId: "folhadepontoapp-ca1dd",
  storageBucket: "folhadepontoapp-ca1dd.firebasestorage.app",
  messagingSenderId: "981639989969",
  appId: "1:981639989969:web:88ad749ecd2d80ba7b53f0",
  measurementId: "G-S2E01ELW4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);