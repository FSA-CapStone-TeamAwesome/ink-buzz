import { useState, useEffect, setState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { getStorage, ref, getBlob, uploadBytes } from "firebase/storage";
import { Camera } from 'expo-camera';


import app from "../config/firebase"


export default function CameraApp() {

  /*  Firebase 9 is very modular, so you invoke different
  modules as needed. The configured app is passed as an
  argument. */

  const storage = getStorage(app);

  /* const image = ref(storage, 'images/universal/demoTattooWarped.png');
  const image = ref(storage, 'images/universal/demoTattoo.png'); */

  const uploadImageRef = ref(storage, 'images/universal/uploadTests/test1.png');

  // If a placeholder isn't provided, a warning about empty urls occurs
  const [imageUrl, setImageUrl] = useState('assets/adaptive-icon.png');
  const [uploadImageSource, setUploadImageSource] = useState('assets/UploadTest.png');


  /* This is state management for whether the app has permission to use
  the camera... on initial loading of the component the app will request
  permission. */
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);


  // State mgmt of front or rear facing camera, toggled in line.
  const [type, setType] = useState(Camera.Constants.Type.back);





  useEffect(() => {
    uploadBytes(uploadImageRef, uploadImageSource).then((snapshot) => {
      // console.log('Uploaded a blob or file!');
    });
  }, [])

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }



  return (
    <View style={styles.cameraContainer}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.log("Pressed.")
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    width: 400,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
