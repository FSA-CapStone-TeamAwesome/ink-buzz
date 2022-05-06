// Import the functions you need from the SDKs you need
import { storage } from "firebase-admin";
import { initializeApp } from "firebase/app";
import { getApp } from "firebase/app";
import "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  apiKey,
  authDomain,
  projectId,
  databaseURL,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
} from "../secrets";

const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
