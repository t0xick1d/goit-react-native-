import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet } from 'react-native';
import LogOut from '../../img/logOut';

import PostsScreen from './Pages/PostsScreen';
import Profile from './Pages/ProfileScreen';
import Comments from './Pages/CommentsScreen';

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'PostsScreen') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          } else if (route.name === 'Comments') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tabs.Screen
        name="Публікації"
        component={PostsScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity style={styles.containerSVG}>
              <LogOut />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen name="Profile" component={Profile} />
      <Tabs.Screen name="Comments" component={Comments} />
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
});

export default Home;
