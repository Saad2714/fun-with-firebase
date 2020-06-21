import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import * as firebase from 'firebase';



// firebase.initializeApp(firebaseConfig);


export default class SignUp extends React.Component{
    render(){
  return (
    <View style={styles.container}>
      <Text>Hey this is your Home Screen !
      </Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100
  },
  form: {
    padding: 20,
    width: "100%"
  },
  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  },
  footer: {
    alignItems: "center"
  }
});