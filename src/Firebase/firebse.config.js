// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVrm1BKDXMien7uq4mq04jUpoNv77IR-A",
  authDomain: "news-portal-client-18b65.firebaseapp.com",
  projectId: "news-portal-client-18b65",
  storageBucket: "news-portal-client-18b65.appspot.com",
  messagingSenderId: "216136678051",
  appId: "1:216136678051:web:0b382fd6c2af1253771d16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;