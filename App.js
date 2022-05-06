import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemeProvider } from "react-native-elements";
import "./config/firebase";
import RootNavigation from "./navigation";
// import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
// import { getFirestore, Timestamp, FieldValue } from "firebase-admin/firestore";

// initializeApp();

// const db = getFirestore();

// const writeTest = async () => {
//   const docRef = db.collection("users").doc("alovelace");

//   await docRef.set({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815,
//   });

//   const aTuringRef = db.collection("users").doc("aturing");

//   await aTuringRef.set({
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912,
//   });
// };

// const firebaseConfig = {
//   apiKey: process.env.APIKEY,
//   authDomain: process.env.AUTHDOMAIN,
//   databaseURL: process.env.DATABASEURL,
//   projectId: process.env.PROJECTID,
//   storageBucket: process.env.STORAGEBUCKET,
//   messagingSenderId: process.env.MESSAGINGSENDERID,
//   appId: process.env.APPID,
//   measurementId: process.env.MEASUREMENTID,
// };
// const firebaseApp = initializeApp(firebaseConfig);

// const firestore = getFirestore();

// const shoop = doc(firestore, "shoop/da");
// function writeShoop() {
//   const docData = {
//     da: "whoop",
//   };
//   setDoc(shoop, docData);
// }

// writeShoop();

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigation />
    </ThemeProvider>
  );
}
// <View style={styles.container}>
{
  /* <Text>Open up App.js to start working on your app!</Text> */
}

//   <StatusBar style="auto" />
// </View>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
