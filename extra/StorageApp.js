import { useState, useEffect, setState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { getStorage, ref, getBlob, uploadBytes } from "firebase/storage";
import app from "../config/firebase"


export default function StorageApp() {

  // Firebase 9 is very modular, so you invoke different
  // modules as needed. The configured app is passed as an
  // argument.

  const storage = getStorage(app);

  //const image = ref(storage, 'images/universal/demoTattooWarped.png');
  const image = ref(storage, 'images/universal/demoTattoo.png');

  const uploadImageRef = ref(storage, 'images/universal/uploadTests/test1.png');

  // If a placeholder isn't provided, a warning about empty urls occurs
  const [imageUrl, setImageUrl] = useState('assets/adaptive-icon.png');

  const [uploadImageSource, setUploadImageSource] = useState('assets/UploadTest.png');

  useEffect(() => {
    getBlob(image).then((blob) => {
      const useUrl = URL.createObjectURL(blob);
      setImageUrl(useUrl)
    })
  }, [])

  useEffect(() => {
    uploadBytes(uploadImageRef, uploadImageSource).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
  }, [])

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl}}
      style={{width: 400, height: 400}} />
      <Text>Storage module: {imageUrl} </Text>
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
