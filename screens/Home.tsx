import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import { Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import Pictures from "./Camera";
import CrudApp from "./CrudApp";
import StorageApp from "./StorageApp";
import CameraApp from "./CameraApp";


const auth = getAuth();

export default function HomeScreen() {
  const { user } = useAuthentication();

  return (
    <View style={styles.container}>
      <Text>Welcome {user?.email}!</Text>
      {/* <CrudApp /> */}
      <CameraApp />
      {/* <StorageApp /> */}
      <Button
        title="Sign Out"
        style={styles.button}
        onPress={() => signOut(auth)}
      />
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
  button: {
    margin: 10,
  },
});
