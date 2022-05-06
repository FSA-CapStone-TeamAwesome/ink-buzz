// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
// import Constants from "expo-constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: Constants.manifest.extra.firebaseApiKey,
//   authDomain: Constants.manifest.extra.firebaseAuthDomain,
//   projectId: "ink-buzz",
//   databaseURL: Constants.manifest.extra.firebaseDatabaseUrl,
//   storageBucket: Constants.manifest.extra.firebaseStorageBucket,
//   messagingSenderId: Constants.manifest.extra.firebaseMessagingSenderId,
//   appId: Constants.manifest.extra.firebaseAppId,
//   measurementId: Constants.manifest.extra.firebaseMeasurementId,
// };

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
