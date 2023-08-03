import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import MapPin from '../../../img/svg/mapPin';

const CreatePostsScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={setCameraRef}>
        <View style={styles.photoView}>
          <TouchableOpacity
            style={styles.flipContainer}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back,
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => {
              if (cameraRef) {
                const { uri } = await cameraRef.takePictureAsync();
                await MediaLibrary.createAssetAsync(uri);
              }
            }}>
            <View style={styles.takePhotoOut}>
              <View style={styles.takePhotoInner}></View>
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
      <Text>Завантажту фото</Text>
      <View>
        <TextInput
          placeholder="Назва..."
          secureTextEntry={false}
          style={styles.input}
          // onFocus={() => setIsShowKeyboard(true)}
        ></TextInput>
        <View style={styles.input}>
          <MapPin
            style={{
              width: 24,
              height: 24,
              marginRight: 4,
            }}
          />
          <TextInput
            placeholder="Місцевість..."
            secureTextEntry={false}

            // onFocus={() => setIsShowKeyboard(true)}
          ></TextInput>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // keyboardHide(), onLogin();
            // navigation.navigate('Home');
          }}>
          <Text style={styles.buttonText}>Опублікувати</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#ffff',
  },
  camera: {
    marginBottom: 32,
    marginTop: 32,
    width: 343,
    height: 267,
  },
  photoView: {
    flex: 0,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },

  flipContainer: {
    flex: 0.1,
    alignSelf: 'flex-end',
  },

  input: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    minWidth: 343,
    height: 50,
    margin: 8,
    padding: 10,
    borderBottomWidth: 2,
    borderColor: '#E8E8E8',
    marginBottom: 10,
    backgroundColor: '#F6F6F6',
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
  takePhotoOut: {
    borderWidth: 2,
    borderColor: 'white',
    height: 50,
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },

  takePhotoInner: {
    borderWidth: 2,
    borderColor: 'white',
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 50,
  },
});
