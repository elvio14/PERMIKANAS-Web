// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "permikanas-db.firebaseapp.com",
  projectId: "permikanas-db",
  storageBucket: "permikanas-db.firebasestorage.app",
  messagingSenderId: "414085730607",
  appId: "1:414085730607:web:a90a4ae86968db1cad11da",
  measurementId: "G-S7MJSZZCBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)
  
export { db }