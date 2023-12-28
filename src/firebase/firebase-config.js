// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc6iOyqFRIY9bhKcthcf4ZUoWGtH4Bh9Y",
  authDomain: "netflix-clone-dev-6cc40.firebaseapp.com",
  projectId: "netflix-clone-dev-6cc40",
  storageBucket: "netflix-clone-dev-6cc40.appspot.com",
  messagingSenderId: "1043137860165",
  appId: "1:1043137860165:web:187794c4fb54529b9dc92c",
  measurementId: "G-4QM1CN3Q4F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
