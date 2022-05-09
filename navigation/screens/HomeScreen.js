import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://reactjs.org/logo-og.png' }}
          style={styles.logo}
        />
        <Image
          source={{ uri: 'https://reactjs.org/logo-og.png' }}
          style={styles.logo}
        />
      </View>

      {/* <Text
        onPress={() => alert('This is the Home Screen')}
        style={{ fontSize: 26, fontWeight: 'bold' }}>
        Home Screen
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
  },
  logo: {
    marginTop: 10,
    width: 100,
    height: 100,
  },
});

export default HomeScreen;
