import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import {
    getDatabase,
    set,
    ref,
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyBNT3Th_aknRbqbPxEYowsL_J12PcSRBds",
    authDomain: "tc-c4ejs164.firebaseapp.com",
    projectId: "tc-c4ejs164",
    storageBucket: "tc-c4ejs164.firebasestorage.app",
    messagingSenderId: "810112221784",
    appId: "1:810112221784:web:c66d8e899215560c79802d",
    measurementId: "G-M5MGSW4R5B",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);

const analytics = getAnalytics(app);
