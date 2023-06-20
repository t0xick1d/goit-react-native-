import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';

const App = () => {
  return (
    <ImageBackground source={require('./img/backgroundPNG.png')} style={styles.image}>
      <View style={styles.container}>
        <RegistrationScreen />
        {/* <LoginScreen /> */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    letterSpacing: 0.01,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default App;
