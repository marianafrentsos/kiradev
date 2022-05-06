// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAP0D9EceZzH2i6Ae5Iu6G4ctQFV9JNY3k",
    authDomain: "kiradev-861fc.firebaseapp.com",
    projectId: "kiradev-861fc",
    storageBucket: "kiradev-861fc.appspot.com",
    messagingSenderId: "266533130694",
    appId: "1:266533130694:web:9a3a76827c662260ada2c7",
    measurementId: "G-HCGDFQNPT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals