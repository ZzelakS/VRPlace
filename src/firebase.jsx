// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDYjOgWFJmIzi-Uv4xDcj7YI8R88-ohorU",
  authDomain: "vr360-7dcd0.firebaseapp.com",
  projectId: "vr360-7dcd0",
  storageBucket: "vr360-7dcd0.firebasestorage.app",
  messagingSenderId: "538604739061",
  appId: "1:538604739061:web:a2de9a152232eb72e8e8bc",
  measurementId: "G-8K5J6YXC8B"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
