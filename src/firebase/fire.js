import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwkLuyWadevJqI-U_wsy22hQXw-qIy8OA",
  authDomain: "authentication-e0783.firebaseapp.com",
  projectId: "authentication-e0783",
  storageBucket: "authentication-e0783.appspot.com",
  messagingSenderId: "1099336725346",
  appId: "1:1099336725346:web:841f93c90feccb5966b23b",
};

initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
