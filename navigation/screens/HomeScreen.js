import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  SafeAreaView,
  FlatList,
  StatusBar,
} from 'react-native';
import { useAuthentication } from '../../utils/hooks/useAuthentication';
import { getAuth, signOut } from 'firebase/auth';

const DATA = [
  {
    id: 1,
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'First Image',
  },
  {
    id: 2,
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'Second Image',
  },
  {
    id: 3,
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'Third Image',
  },
  {
    id: 4,
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'Third Image',
  },
  {
    id: 5,
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'Third Image',
  },
  {
    id: 6,
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'Third Image',
  },
  {
    id: 7,
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'Third Image',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const HomeScreen = () => {
  const auth = getAuth();
  const { user } = useAuthentication();

  const renderItem = ({ item }) => {
    return (
      <Image
        style={{ height: 100, width: 100, margin: 3 }}
        source={{ uri: item.uri }}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.text}>Welcome {user?.email}!</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button
        title="Sign Out"
        style={styles.button}
        onPress={() => signOut(auth)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 10,
  },
  logo: {
    marginTop: 10,
    width: 50,
    height: 50,
  },
  content: {
    width: 250,
    height: 250,
  },
  button: {
    marginTop: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  image: {
    width: 250,
    height: 250,
  },
});

export default HomeScreen;
