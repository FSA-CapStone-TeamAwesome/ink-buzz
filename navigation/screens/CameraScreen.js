import React from 'react';
import { View, Text } from 'react-native';
import CameraApp from './CameraApp';

const CameraScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CameraApp />
    </View>
  );
};

export default CameraScreen;
