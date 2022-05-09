import React from 'react';
import { View, Text } from 'react-native';

const MessagesScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        onPress={() => navigation.navigate('Home')}
        style={{ fontSize: 26, fontWeight: 'bold' }}>
        Messages Screen
      </Text>
    </View>
  );
};

export default MessagesScreen;
