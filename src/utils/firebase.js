// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQr6oMmUmCC1ZqIGc6pwW5iiy0hNWuRt4",
  authDomain: "netflix-gpt-9dcf4.firebaseapp.com",
  projectId: "netflix-gpt-9dcf4",
  storageBucket: "netflix-gpt-9dcf4.appspot.com",
  messagingSenderId: "206405120500",
  appId: "1:206405120500:web:c4915d824c34b1a56ac9a1",
  measurementId: "G-R5RXBLRC1T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
