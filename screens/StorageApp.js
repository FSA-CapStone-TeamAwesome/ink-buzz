import { StyleSheet, Text, View } from "react-native";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import app from "../config/firebase"

export default function StorageApp() {

  const storage = getStorage(app);
  const image = ref(storage, 'images/universal/demoTattoo.png');

  getDownloadURL(image).then((url) => {
    console.log("This is the url")
    console.log(url)
  })

  //console.log("Now")




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
