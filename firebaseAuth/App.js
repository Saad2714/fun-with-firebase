import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import * as firebase from 'firebase';

// Import Screens

import HomeScreen from './screens/HomeScreen'
import SignUpScreen from'./screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen'
import LoadingScreen from './screens/LoadingScreen'





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

const MainNavigator = createStackNavigator(
  {
    Loading: {screen : LoadingScreen},
    SignIn: {screen : SignInScreen},
    SignUp: {screen : SignUpScreen},
    Home: {screen : HomeScreen},
  },
  {
    // Launching Screen
    initialRouteName: "Loading"
  }
)

// Creating App Container

const App = createAppContainer(MainNavigator) ;

export default App;
