import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import * as firebase from 'firebase';



var firebaseConfig = {
  apiKey: "AIzaSyBpLsMc3e-LPkXNWOPLq0qx7Xhdow7sswo",
  authDomain: "projectc2714.firebaseapp.com",
  databaseURL: "https://projectc2714.firebaseio.com",
  projectId: "projectc2714",
  storageBucket: "projectc2714.appspot.com",
  messagingSenderId: "515506029920",
  appId: "1:515506029920:web:d30c7743eaca802958ca05",
  measurementId: "G-XDTT64C3T6"
};

firebase.initializeApp(firebaseConfig);


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
});