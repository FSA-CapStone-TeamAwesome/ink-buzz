import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import React from 'react';

const MainFeed = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.mainFeedText}>Main Feed</Text>
      <TouchableOpacity
        title="Press Me"
        onPress={() => {
          alert('You tapped');
        }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>PRESS ME</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  mainFeedText: {
    fontSize: 28,
  },
  button: {
    marginBottom: 30,
    marginTop: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 40,
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
});

export default MainFeed;
