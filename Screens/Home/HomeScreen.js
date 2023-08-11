import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import LogOut from '../../img/svg/logOut';
import Grid from '../../img/svg/Grid';
import Union from '../../img/svg/Union';
import User from '../../img/svg/User';

// import PostsScreen from './Pages/PostsScreen';
import Profile from './Pages/ProfileScreen';
import Comments from './Pages/CommentsScreen';
import CreatePostsScreen from './Components/CreatePostsScreen';

const Tabs = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();
  const ArrowLeft = () => <Icon name="arrowleft" size={24} color="rgba(33, 33, 33, 0.7)" light />;
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarOptions: {
          showLabel: false,
        },
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
        tabBarIcon: ({ focused }) => {
          const styleSVG = focused ? styles.activeSvg : styles.noneActiveSvg;
          const focusedColor = focused ? '#fff' : 'rgba(33, 33, 33, 0.8)';
          if (route.name === 'Публікації') {
            return (
              <View style={styleSVG}>
                <Grid focusedcolor={focusedColor} />
              </View>
            );
          }
          if (route.name === 'Створити публікацію') {
            return (
              <View style={styleSVG}>
                <Union focusedcolor={focusedColor} />
              </View>
            );
          }
          if (route.name === 'Профіль') {
            return (
              <View style={styleSVG}>
                <User focusedcolor={focusedColor} />
              </View>
            );
          }
        },
      })}>
      <Tabs.Screen
        name="Публікації"
        component={Comments}
        options={{
          headerRight: () => (
            <TouchableOpacity
              style={styles.containerSVG}
              onPress={() => {
                navigation.navigate('Login', {
                  screen: 'PostsScreen',
                });
              }}>
              <LogOut />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              style={styles.containerSVGPublic}
              onPress={() => {
                navigation.navigate('Публікації', {
                  screen: 'Comments',
                });
              }}>
              <ArrowLeft />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen name="Профіль" component={Profile} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  containerSVG: {
    marginRight: 16,
    marginBottom: 10,
    width: 24,
    height: 24,
  },
  containerSVGPublic: {
    marginLeft: 16,
    width: 24,
    height: 24,
  },
  noneActiveSvg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fill: 'rgba(33, 33, 33, 0.8)',
    width: 70,
    height: 40,
  },
  activeSvg: {
    width: 70,
    height: 40,
    borderRadius: '20',
    backgroundColor: '#FF6C00',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
