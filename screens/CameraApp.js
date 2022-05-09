import { useState, useEffect, setState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import { getStorage, ref, getBlob, uploadBytes, uploadString } from "firebase/storage";
import { Camera, pausePreview } from 'expo-camera';


import app from "../config/firebase"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function CameraApp() {

  /*  Firebase 9 is very modular, so you invoke different
  modules as needed. The configured app is passed as an
  argument. */

  const storage = getStorage(app);

  /* const image = ref(storage, 'images/universal/demoTattooWarped.png');
  const image = ref(storage, 'images/universal/demoTattoo.png'); */


  // If a placeholder isn't provided, a warning about empty urls occurs
  const [imageUrl, setImageUrl] = useState('assets/adaptive-icon.png');


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
  const [image, setImage] = useState(null)

  const uploadImageRef = ref(storage, 'images/universal/uploadTests/test1.png');

  takePicture = async () => {
    if (this.camera) {
        // await this.camera.takePictureAsync(null).then(photo => {
        //   console.log(photo)
        //   uploadBytes(uploadImageRef, photo.uri)
        //   });
        let data = await this.camera.takePictureAsync(null)
      console.log(data)
      setImage(data.uri)

      let file = await fetch(data.uri)
      let blob = await file.blob()
      console.log(blob)
      uploadBytes(uploadImageRef, blob)

        };
    }

  // onPictureSaved = photo => {

  //     uploadBytes(uploadImageRef, photo).then((snapshot) => {
  //       console.log('Uploaded photo?');
  //     });



  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  /*
  Notice the ref={{}}; the camera is simply unavailable without it.
  */

  return (
    <View style={styles.cameraContainer}>
      <Camera style={styles.camera} type={type} ref={(ref) => { this.camera = ref }}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.takePicture} >
            <Text style={styles.text}> Take </Text>
          </TouchableOpacity>
        </View>
      </Camera>
      {/* {image ? <Image style={{flex:1}}source = {{uri: image}} />: <></> } */}
    </View>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    width: windowWidth,
    height: windowWidth,
    // flex: 1,
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
