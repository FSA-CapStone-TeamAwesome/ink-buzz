import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import CameraApp from './CameraApp';
import { useAuthentication } from '../../utils/hooks/useAuthentication';
import { getAuth, signOut } from 'firebase/auth';

const HomeScreen = () => {
  const auth = getAuth();
  const { user } = useAuthentication();
  return (
    <View>
      <Text>Welcome {user?.email}!</Text>
      <CameraApp />
      <Button
        title="Sign Out"
        style={styles.button}
        onPress={() => signOut(auth)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: 10,
    width: 100,
    height: 100,
  },
  button: {
    marginTop: 10,
  },
});

export default HomeScreen;
