// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTt8gux9CX5ROPb1-u9-T5nCRbYXjb0dI",
  authDomain: "blog-project-322c1.firebaseapp.com",
  projectId: "blog-project-322c1",
  storageBucket: "blog-project-322c1.firebasestorage.app",
  messagingSenderId: "621472860194",
  appId: "1:621472860194:web:671f3c0783e4328a7a227b",
  measurementId: "G-VDPXC2NYDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
// const analytics = getAnalytics(app);