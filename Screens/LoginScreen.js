import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const navigation = useNavigation();

  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const onLogin = () => {
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    setEmail('');
    setPassword('');
  };

  return (
    <ImageBackground
      source={require('../img/backgroundPNG.png')}
      style={styles.conatinerBackground}>
      <View>
        <TouchableWithoutFeedback onPress={keyboardHide}>
          <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            <View style={{ ...styles.container, marginBottom: isShowKeyboard && 120 }}>
              <Text style={styles.title}>Увійти</Text>
              <TextInput
                value={email}
                onChangeText={emailHandler}
                placeholder="Адрес електронної почти"
                style={styles.input}
                onFocus={() => setIsShowKeyboard(true)}
              />
              <View>
                <TextInput
                  value={password}
                  onChangeText={passwordHandler}
                  placeholder="Пароль"
                  secureTextEntry={false}
                  style={styles.input}
                  onFocus={() => setIsShowKeyboard(true)}></TextInput>
                <TouchableOpacity style={styles.showPassword}>
                  <Text>Показати</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  keyboardHide(), onLogin();
                  navigation.navigate('Home');
                }}>
                <Text style={styles.buttonText}>Увійти</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Registration', {
                    screen: 'PostsScreen',
                  })
                }>
                <Text style={styles.link}>Немає акаунту? Зареєструватися</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  conatinerBackground: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    letterSpacing: 0.01,
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    minWidth: 100,
    border: '1px solid #000000',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    alignItems: 'center',
    backgroundColor: '#ffff',
    height: 489,
  },
  title: {
    marginTop: 32,
    marginBottom: 32,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
  },
  imgContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: -60,
  },
  imgSvg: {
    width: 25,
    height: 25,
    marginLeft: -12,
    marginTop: 81,
  },
  input: {
    minWidth: 343,
    height: 50,
    margin: 8,
    borderRadius: 15,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E8E8E8',
    marginBottom: 10,
    backgroundColor: '#F6F6F6',
  },
  showPassword: {
    position: 'absolute',
    marginTop: 22,
    marginLeft: 275,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 343,
    height: 50,
    margin: 16,
    backgroundColor: '#FF6C00',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
  },
  link: {
    color: '#1B4371',
  },
});
export default LoginScreen;
