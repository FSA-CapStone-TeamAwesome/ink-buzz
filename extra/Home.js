import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button } from 'react-native-elements';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
// import CrudApp from './CrudApp';
import MainFeed from './MainFeed';
import CameraApp from '../navigation/screens/CameraApp';

export default function HomeScreen() {
  const { user } = useAuthentication();

  return (
    <View style={styles.container}>
      <Text>Welcome {user?.email}!</Text>
      {/* <CrudApp /> */}
      <CameraApp />
      {/* <StorageApp /> */}
      <MainFeed />
      <Button
        title="Sign Out"
        style={styles.button}
        onPress={() => signOut(auth)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
  },
});
