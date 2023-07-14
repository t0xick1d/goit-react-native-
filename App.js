import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import Home from './Screens/Home/HomeScreen';

const MainStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Registration"
        screenOptions={{
          headerShown: false,
        }}>
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Home" component={Home} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
