import { useState, useEffect, setState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ImagePickerIOS,
  Button,
  Image
} from 'react-native';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { Camera } from 'expo-camera';
import * as ImageManipulator from 'expo-image-manipulator';
import app from '../../config/firebase';
import * as ImagePicker from 'expo-image-picker'
import {auth} from '../../config/firebase';
import { useAuthentication } from '../../utils/hooks/useAuthentication';


const windowWidth = Dimensions.get('window').width;

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
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [image, setImage] = useState(null);
  const [cameraAccess, setCameraAccess] = useState(null)
  const [galleryAccess, setGalleryAccess] = useState(null)
  const [camera, setCam] = useState(null)


  const { user } = useAuthentication();

  useEffect(() => {
    (async () => {
      const cam = await Camera.requestCameraPermissionsAsync()
      setCameraAccess(cam.status === 'granted')
      const gallery = await ImagePicker.requestMediaLibraryPermissionsAsync()
      setGalleryAccess(gallery.status === 'granted')
    })();
  }, []);
  // State management of front or rear facing camera, toggled in line.

  const takePicture = async () => {
    if (this.camera) {

      let data = await this.camera.takePictureAsync(null);
      setImage(data.uri);
    }
  };
  if (cameraAccess === null) {
    return <View  />;
  }
  if (cameraAccess === false) {
    return <Text>No access to camera</Text>;
  }


 const pickImage = async () => {

  let result = await ImagePicker.launchImageLibraryAsync({
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  quality:1,
  })

  if(!result.cancelled){
  setImage(result.uri)
  }}

//This will transfer the file from local data to google storage
  const saveImage = async () => {
    let date = new Date
    const uploadImageRef = ref(storage, `images/universal/${user.uid}/${date.valueOf()}.jpg`);
    //date.valueOf will convert the date into a string of numbers
    // const uploadImageRef = ref(storage, '/images/universal/5L87UUfr2CWtQchoy1mSC0thqWp2/cant.jpg')
    // Compressing an image
    const compressedImage = await ImageManipulator.manipulateAsync(
      image,
      [{resize: {height: 500} }], // This method expects an array of transformations.
      // If JPEG, quality is indicated by compress, with 1 highest, 0 lowest
      { compress: 0, format: ImageManipulator.SaveFormat.JPEG }
  );

    // let file = await fetch(image)
    let file = await fetch(compressedImage.uri)
    let blob = await file.blob()

    uploadBytes(uploadImageRef, blob)
    setImage(null)
  }





  /*
  Notice the ref={{}}; the camera is simply unavailable without it.
  */
  return (
    <View style={styles.cameraContainer}>
      {image ?
      <>
      <Image source = {{uri: image}} style={{flex:1}}/>
      <Button title='Cancel' onPress={() => {setImage(null)}} />
      <Button title='Save' onPress = {() => saveImage()} />
      </>
      :
      <>
      <Camera
        style={styles.camera}
        type={type}
        ref={(ref) => {
          this.camera = ref;
        }}>
          <TouchableOpacity

          onPress={() => {
          setType(
          type === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
          );
          }}>
        <Text style={styles.text} > Flip </Text>
        </TouchableOpacity>



        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => takePicture()}>
            <Text style={styles.text}> Take </Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <Button title='Pick Image From Gallery' onPress = {() => pickImage()} />
      </>
      }
    </View>
  );
}
const styles = StyleSheet.create({
  cameraContainer: {
    width: windowWidth,
    height: windowWidth,
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
    flex: 0.2,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
