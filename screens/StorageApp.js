import { useState, useEffect, setState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { getStorage, ref, getDownloadURL, getBlob } from "firebase/storage";
import app from "../config/firebase"

export default function StorageApp() {

  // Firebase 9 is very modular, so you invoke different
  // modules as needed. The configured app is passed as an
  // argument.

  const storage = getStorage(app);
  const image = ref(storage, 'images/universal/demoTattoo.png');

  const [imageUrl, setImageUrl] = useState('assets/adaptive-icon.png');

  useEffect(() => {
    getBlob(image).then((blob) => {
      const useUrl = URL.createObjectURL(blob);
      setImageUrl(useUrl)
    })
  }, [])

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl}}
      style={{width: 400, height: 400}} />
      <Text>Storage module is working. {imageUrl} Is it?</Text>
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
