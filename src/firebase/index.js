// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';

const firebaseConf = import.meta.env.VITE_FIREBASE_CONFIG
// Your web app's Firebase configuration
const firebaseConfig = {
    firebaseConf
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

export {
    db
}