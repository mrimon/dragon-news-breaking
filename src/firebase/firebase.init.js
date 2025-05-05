// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPzCi1BbbMEkfUVYS8EF4BRtrEDNCabQ8",
  authDomain: "dragon-news-breaking-8d8c3.firebaseapp.com",
  projectId: "dragon-news-breaking-8d8c3",
  storageBucket: "dragon-news-breaking-8d8c3.firebasestorage.app",
  messagingSenderId: "139032702855",
  appId: "1:139032702855:web:f51665aa0c047d1504ed22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)