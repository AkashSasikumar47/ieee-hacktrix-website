// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrxLYI0itTyIMXRWXC1O6VxA9faJvrAmI",
    authDomain: "hacktrix-24.firebaseapp.com",
    projectId: "hacktrix-24",
    storageBucket: "hacktrix-24.appspot.com",
    messagingSenderId: "95367352790",
    appId: "1:95367352790:web:d4d732a38e2fa561089477",
    measurementId: "G-GYE6DBZN4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };