// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCJHn4y_Jb15lx96_rPd0TVi7Z5nnbaV6A",
  authDomain: "react-auth-97baa.firebaseapp.com",
  projectId: "react-auth-97baa",
  storageBucket: "react-auth-97baa.appspot.com",
  messagingSenderId: "132771282378",
  appId: "1:132771282378:web:0bcdb8aaff25a7f57ce333"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth=getAuth(app)