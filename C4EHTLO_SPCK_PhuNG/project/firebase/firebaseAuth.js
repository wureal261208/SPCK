
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNT3Th_aknRbqbPxEYowsL_J12PcSRBds",
    authDomain: "tc-c4ejs164.firebaseapp.com",
    projectId: "tc-c4ejs164",
    storageBucket: "tc-c4ejs164.firebasestorage.app",
    messagingSenderId: "810112221784",
    appId: "1:810112221784:web:c66d8e899215560c79802d",
    measurementId: "G-M5MGSW4R5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
