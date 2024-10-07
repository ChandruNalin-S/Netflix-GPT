// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8etigHzEGUtsus3I84H1RTM6-WftDl90",
  authDomain: "netflixgpt-3352e.firebaseapp.com",
  projectId: "netflixgpt-3352e",
  storageBucket: "netflixgpt-3352e.appspot.com",
  messagingSenderId: "422346682381",
  appId: "1:422346682381:web:d24af4eda02f8f84a72544",
  measurementId: "G-18B4SDXFPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();