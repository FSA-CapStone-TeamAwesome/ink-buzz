import React from 'react';
import { View, Text, Button } from 'react-native';

import { auth, db, app } from "../../config/firebase";

import { collection, addDoc, Timestamp } from "firebase/firestore";


// userIds

// chat2@chat.com
// L814iNPsM1h7WE99xnRi0v74zFI3

// chat1@chat.com
// JotxkdT73WZxdfVuw00itwp2GWr1





const MessagesScreen = ({ navigation }) => {

  console.log(auth.currentUser)

  const recipient = 'L814iNPsM1h7WE99xnRi0v74zFI3'


  const sendMessage = () => {

    addDoc(collection(db,
      `messages/queue/${recipient}`),
      {artReference: null,
      content: "Yo and lo.",
      fromName: auth.currentUser.email,
      fromId: auth.currentUser.uid,
      photoUrl: null,
      timestamp: Timestamp.fromMillis(Date.now())})

  }


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        onPress={() => navigation.navigate('Home')}
        style={{ fontSize: 26, fontWeight: 'bold' }}>
        Messages Screen
      </Text>
      <Button title='Send' onPress={() => {sendMessage()}} />
    </View>
  );
};

export default MessagesScreen;
