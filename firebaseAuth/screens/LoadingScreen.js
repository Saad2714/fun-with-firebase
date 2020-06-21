
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import * as firebase from 'firebase';



firebase.initializeApp(firebaseConfig);


export default class HomeScreen extends React.Component{
    render(){
  return (
    <View style={styles.container}>
      <Text>Hey this is your Loading Screen !
      </Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});