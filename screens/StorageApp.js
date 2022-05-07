import { StyleSheet, Text, View } from "react-native";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import app from "../config/firebase"

export default function StorageApp() {

  const storage = getStorage(app);
  const image = ref(storage, 'images/universal/demoTattoo.png');
  const actualImage = getDownloadURL(image)

  console.log("Now")
  console.log(actualImage)



  return (
    <View style={styles.container}>
      <Text>This was storage.</Text>
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
