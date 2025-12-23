import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyD_rchaGCCWwDZheN3f2SPCjAniHQVRS6c",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "bringit-37419.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "bringit-37419",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "bringit-37419.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "67999121996",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:67999121996:web:f8214451560580a2e9eae9",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-Y59ZBFL6PX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
