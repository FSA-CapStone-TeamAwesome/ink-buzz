import { StyleSheet, Text, View } from "react-native";
import { getStorage, ref, getDownloadURL, getBlob } from "firebase/storage";
import app from "../config/firebase"

export default function StorageApp() {

  // Firebase 9 is very modular, so you invoke different
  // modules as needed. The configured app is passed as an
  // argument.

  const storage = getStorage(app);
  const image = ref(storage, 'images/universal/demoTattoo.png');

  let newUrl = ''

  // getDownloadURL(image).then((url) => {
  //   console.log("This is the url")
  //   console.log(url)
  // })





  getBlob(image).then((blob) => {
      let newUrl = URL.createObjectURL(blob)
      console.log(typeof(newUrl))



  })

  //console.log("Now")




  return (
    <View style={styles.container}>
      <Text>Storage module is working.</Text>
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
