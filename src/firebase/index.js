// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    databaseURL: import.meta.env.VITE_DBURL,
    projectId: import.meta.env.VITE_PID,
    storageBucket: import.meta.env.VITE_SB,
    messagingSenderId: import.meta.env.VITE_MSID,
    appId: import.meta.env.VITE_APPID,
    measurementId: import.meta.env.VITE_MESSUREID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

export {
    db
}