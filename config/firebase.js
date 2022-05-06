// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
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
  apiKey: "AIzaSyAdHg5r7EkFvjVV9ZKkfW2htooKPUE_FxA",
  authDomain: "ink-buzz.firebaseapp.com",
  databaseURL: "https://ink-buzz-default-rtdb.firebaseio.com",
  projectId: "ink-buzz",
  storageBucket: "ink-buzz.appspot.com",
  messagingSenderId: "473232897117",
  appId: "1:473232897117:web:ae18f9bc7edba8f9b1c9b4",
  measurementId: "G-HJWGDQPCCS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
