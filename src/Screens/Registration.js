import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Modal, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import {
  responsiveFontSize as rf,
  responsiveHeight as rh,
  responsiveWidth as rw,
} from 'react-native-responsive-dimensions';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const pickImage = async (source) => {
    let result;
    if (source === 'camera') {
      result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
    } else {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
    }

    if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageCircledefault} onPress={() => setModalVisible(true)}>
        {image ? (
          <Image source={{ uri: image }} style={styles.imageCirclewithpicture} />
        ) : (
          <FontAwesome name="camera" size={rf(4)} style={{justifyContent:'center'}} color="#17B169" />
        )}
        <FontAwesome name='plus' style={{position:'absolute',right:0,top:0}} size={rf(3)}/>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Register Now</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.alreadyAccountText}>Already have an account? Sign In</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.modalButton} onPress={() => pickImage('camera')}>
            <Text style={styles.modalButtonText}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={() => pickImage('gallery')}>
            <Text style={styles.modalButtonText}>Choose from Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.modalButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: rf(2),
  },
  imageCircledefault: {
    width: rw(20),
    flexDirection:'row',
    height: rw(20),
    borderRadius: rw(10),
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: rh(3),
  },
  imageCirclewithpicture: {
    width: rw(20),
    flexDirection:'row',
    height: rw(20),
    borderRadius: rw(10),
    backgroundColor: '#e0e0e0',
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginBottom: rh(3),
  },
  input: {
    width: rw(80),
    height: rh(6),
    borderColor: '#17B169',
    borderWidth: 1,
    borderRadius: rf(1),
    padding: rf(1),
    marginBottom: rh(2),
    fontSize: rf(2),
  },
  registerButton: {
    width: rw(80),
    height: rh(6),
    backgroundColor: '#17B169',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: rf(1),
    marginBottom: rh(2),
    marginTop: rh(5),
  },
  registerButtonText: {
    color: '#fff',
    fontSize: rf(2.5),
    fontWeight: 'bold',
  },
  alreadyAccountText: {
    color: '#17B169',
    fontSize: rf(2),
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalButton: {
    width: rw(80),
    height: rh(6),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: rf(1),
    marginBottom: rh(2),
  },
  modalButtonText: {
    color: '#17B169',
    fontSize: rf(2.5),
    fontWeight: 'bold',
  },
});

export default Registration;