
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';


import * as firebase from 'firebase';



// firebase.initializeApp(firebaseConfig);


export default class LoadingScreen extends React.Component{

    static navigationOptions = {
        title : "Loading",
        header : null

    };

    //  Firebase auth
    componentDidMount(){
        firebase.auth().onAuthStateChanged( (authenticate) => {

            if(authenticate){
                // No turning back to loading screen so replace not popping up
                this.props.navigation.replace("Home")
            }
            else {
                this.props.navigation.replace("SignIn")

            }
        })

    }


    render(){
  return (
    <View style={styles.container}>
      

      
      <ActivityIndicator size="large" />

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