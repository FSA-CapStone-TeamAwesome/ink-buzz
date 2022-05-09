import { Camera } from 'expo-camera'
import * as ImagePicker from 'expo-image-picker'
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ImagePickerIOS } from 'react-native';


export default function CamComp () {
  const [cameraAccess, setCameraAccess] = useState(null)
  const [galleryAccess, setGalleryAccess] = useState(null)
  const [camera, setCam] = useState(null)
  const [image, setImage] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)

  useEffect(() => {
    (async () => {
      const cam = await Camera.requestCameraPermissionsAsync();
      setCameraAccess(cam.status === 'granted');

      const gallery = await ImagePicker.requestMediaLibraryPermissionsAsync()
      setGalleryAccess(gallery.status === 'granted')

      if (galleryAccess !== 'granted') {
        alert('Cannot Access')
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality:1,
    })

    if(!result.cancelled){
      setImage(result.uri)
    }
  }

  if (cameraAccess === null) {
    return <View />;
  }
  if (cameraAccess === false) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
    if(camera){
      let data = await camera.takePictureAsync(null)
      console.log(data.uri)
      setImage(data.uri)
    }
  }
  return (
    <View style={{flex:1}}>
      <Camera style={{flex:1}} type={type}>
        <View style={{flex:1}}>
          <TouchableOpacity

            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text > Flip </Text>
          </TouchableOpacity>
          <Button title='Take a Photo' onPress={() => takePhoto()} />
          <Button title='Pick Image From Gallery' onPress = {() => pickImage()} />

        </View>
      </Camera>
      {image ? <Image source = {{uri: image}} />: <></> }
    </View>
  );
}




