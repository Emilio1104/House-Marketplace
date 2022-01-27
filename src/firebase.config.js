// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "/firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUbQg2Wa-kRU5GboOukjDCbxhnoKWHs70",
  authDomain: "house-marketplace-app-93a70.firebaseapp.com",
  projectId: "house-marketplace-app-93a70",
  storageBucket: "house-marketplace-app-93a70.appspot.com",
  messagingSenderId: "829906198359",
  appId: "1:829906198359:web:7905b5f6240637d3fae812",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
