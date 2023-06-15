// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdy5Ww-xraZQjjPMgbSbOE_yZ8WNfFqbg",
  authDomain: "levionweb-f3729.firebaseapp.com",
  projectId: "levionweb-f3729",
  storageBucket: "levionweb-f3729.appspot.com",
  messagingSenderId: "515728230698",
  appId: "1:515728230698:web:950670523dd57293817653",
  measurementId: "G-C1L9S7S0GP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
