// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {getFirestore} from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCv6J2R9f4ZWkfbiaoKEPgdDXoKFjh18RE",
  authDomain: "learning-deploy-projects.firebaseapp.com",
  projectId: "learning-deploy-projects",
  storageBucket: "learning-deploy-projects.appspot.com",
  messagingSenderId: "847269902797",
  appId: "1:847269902797:web:680da4f9565f5ee57fac84",
  measurementId: "G-94LEJ2TPGS"
};

// Initialize Firebase
// export const analytics = getAnalytics(app);
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);