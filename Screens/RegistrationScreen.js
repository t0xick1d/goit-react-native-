import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import SvgComponent from '../img/plusSvg';

const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = (text) => setLogin(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  const logIn = () => {
    console.log(`Login: ${login}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    setLogin('');
    setEmail('');
    setPassword('');
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <View style={{ ...styles.container, marginBottom: isShowKeyboard ? -200 : 0 }}>
          <View style={styles.imgContainer}>
            <Image source={require('../img/defaultImg.png')} />
            <SvgComponent style={styles.imgSvg} />
          </View>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput
            value={login}
            onChangeText={loginHandler}
            placeholder="Логін"
            style={styles.input}
            onFocus={() => setIsShowKeyboard(true)}
          />
          <TextInput
            value={email}
            onChangeText={emailHandler}
            placeholder="Адрес електроної почти"
            style={styles.input}
            onFocus={() => setIsShowKeyboard(true)}
          />
          <View>
            <TextInput
              value={password}
              onChangeText={passwordHandler}
              placeholder="Пароль"
              secureTextEntry={true}
              style={styles.input}
              onFocus={() => setIsShowKeyboard(true)}
            />
            <TouchableOpacity style={styles.showPassword}>
              <Text>Показати</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              keyboardHide(), logIn();
            }}>
            <Text style={styles.buttonText}>Зареєструватися</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.link}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 100,
    border: '1px solid #000000',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    alignItems: 'center',
    backgroundColor: '#ffff',
    height: 559,
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
export default RegistrationScreen;