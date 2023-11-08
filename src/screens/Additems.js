import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Input from '../components/Input';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Additems = () => {
  const [Discription, setDiscription] = useState('');
  const [Hashtag, setHashtag] = useState('');
  const [name, setname] = useState('Alizbeth');
  const [propic, setpropic] = useState(null);

  const handleImageUpload = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('Image picker canceled');
      } else if (response.error) {
        console.error('Image picker error:', response.error);
      } else {
        setpropic(response.uri);
        storeImage(response.uri);
      }
    });
  };

  const storeImage = async (uri) => {
    try {
      await AsyncStorage.setItem('propic', uri);
    } catch (error) {
      console.error('Error storing image:', error);
    }
  };

  useEffect(() => {
    const loadImage = async () => {
      try {
        const uri = await AsyncStorage.getItem('propic');
        if (uri) {
          setpropic(uri);
        }
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };

    loadImage();
  }, []);

  return (
    <View>
      <Text>Additems</Text>

      <TouchableOpacity style={styles.imageContainer} onPress={handleImageUpload}>
        {propic ? (
          <Image source={{ uri: propic }} style={styles.image} />
        ) : (
          <Text style={styles.plusSign}>+</Text>
        )}
      </TouchableOpacity>

      <Input value="Alizbeth" onChangeText={(text) => setname(text)} />

      <Input
        placeholder="Add Description"
        value={Discription}
        onChangeText={(text) => setDiscription(text)}
      />
      <Input
        placeholder="Add Hashtag"
        value={Hashtag}
        onChangeText={(text) => setHashtag(text)}
        multiline
        numberOfLines={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 100,
    height: 100,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    margin: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  plusSign: {
    fontSize: 36,
    color: 'gray',
  },
});

export default Additems;
