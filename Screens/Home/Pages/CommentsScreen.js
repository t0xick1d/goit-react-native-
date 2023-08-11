import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from '@react-navigation/native';

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <Link to={{ screen: 'Створити публікацію' }}>
        <View style={styles.profile}>
          <Image style={styles.avatar} source={require('../../../img/AvatarSmall.png')} />
          <View style={styles.profileInfo}>
            <Text style={styles.nameProfile}>Natali Romanova</Text>
            <Text style={styles.emailProfile}>email@example.com</Text>
          </View>
        </View>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#ffff',
  },
  profile: {
    width: '100%',
    paddingTop: 32,
    paddingLeft: 16,
    flexDirection: 'row',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginRight: 8,
  },
  profileInfo: {
    justifyContent: 'center',
  },
  nameProfile: {
    fontWeight: '700',
    fontSize: 13,
  },
  emailProfile: {
    fontWeight: '400',
    fontSize: 11,
    color: 'rgba(33, 33, 33, 0.8)',
  },
});

export default CommentsScreen;
