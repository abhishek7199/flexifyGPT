// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRoo1i4-vOQdM8YfG3-TLtVrBWeZMjhtA",
    authDomain: "flexifly-gpt.firebaseapp.com",
    projectId: "flexifly-gpt",
    storageBucket: "flexifly-gpt.firebasestorage.app",
    messagingSenderId: "684878336347",
    appId: "1:684878336347:web:fabdfee557bcfc93458a7e",
    measurementId: "G-4SJ8ZZXZQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth(app);