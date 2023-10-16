// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-fchq8G0DBz_JhjIuk7kdxtjodZuFAtg",
  authDomain: "p2-firebase-react.firebaseapp.com",
  projectId: "p2-firebase-react",
  storageBucket: "p2-firebase-react.appspot.com",
  messagingSenderId: "903795948932",
  appId: "1:903795948932:web:a8422618330a3ccf7d71d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;