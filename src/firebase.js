import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpCtRjIweqc--4PofVdSiQPeTuSfE4kkc",
  authDomain: "web-bringit-cursor.firebaseapp.com",
  projectId: "web-bringit-cursor",
  storageBucket: "web-bringit-cursor.firebasestorage.app",
  messagingSenderId: "940739514928",
  appId: "1:940739514928:web:1c65c79eaede2b5801d3f5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
