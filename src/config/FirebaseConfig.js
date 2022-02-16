import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAB1XagOMfZewizYbDobgcKNu_BOMHCWu8",
  authDomain: "react-redux-firebase-tod-bd7b6.firebaseapp.com",
  projectId: "react-redux-firebase-tod-bd7b6",
  storageBucket: "react-redux-firebase-tod-bd7b6.appspot.com",
  messagingSenderId: "109624887641",
  appId: "1:109624887641:web:3d377601e4224f87d66448",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
