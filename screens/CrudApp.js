import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { db, storage } from "../config/firebase";
import { ref } from "firebase/storage";


export default function CrudApp() {
  const [userDoc, setUserDoc] = useState("");
  const [text, setText] = useState("");

  const Create = async () => {
    const myDoc = doc(db, "MyCollectionName", "MyDocument");
    const docData = {
      name: "Alec",
      bio: "Software Developer",
    };

    try {
      await setDoc(myDoc, docData);
      alert("Document Created Updated");
    } catch (error) {
      alert(error.message);
    }
  };

  const Read = async () => {
    const myDoc = doc(db, "MyCollectionName", "MyDocument");

    try {
      const snapshot = await getDoc(myDoc);
      if (snapshot.exists) {
        setUserDoc(snapshot.data());
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const Update = async (value, merge) => {
    const myDoc = doc(db, "MyCollectionName", "MyDocument");
    try {
      await setDoc(myDoc, value, { merge });
      alert("Updated Successfully!");
      setText("");
    } catch (error) {
      alert(error.message);
    }
  };

  const Delete = async () => {
    const myDoc = doc(db, "MyCollectionName", "MyDocument");
    try {
      await deleteDoc(myDoc);
      alert("Deleted Successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  const listRef = ref(storage, '/');

  console.log("Is it working?", listRef)


  return (
    <View style={styles.container}>
      <Button title="Create New Doc" onPress={Create}></Button>
      <Button title="Read Doc" onPress={Read}></Button>
      {userDoc != null && <Text>Bio: {userDoc.bio}</Text>}
      <TextInput
        style={{
          width: "95%",
          fontSize: 18,
          padding: 12,
          borderColor: "blue",
          borderWidth: 0.2,
          borderRadius: 10,
          marginVertical: 20,
        }}
        placeholder="Type Here"
        onChangeText={(text) => {
          setText(text);
        }}
        value={text}
      ></TextInput>

      <Button
        title="Update Document"
        onPress={() => {
          Update(
            {
              bio: text,
            },
            true
          );
        }}
        disabled={text == ""}
      ></Button>
      <Button title="Delete Doc" onPress={Delete}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
