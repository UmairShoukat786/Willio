import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CustomizedInput = ({ placeholder, value, onChangeText, iconName, style }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={iconName === 'eye' ? !isPasswordVisible : false}
          style={[styles.input, style]}
          placeholderTextColor="#6C6C6C"
          KeyboardAvoidingView= {true}
        />
        {iconName === 'eye' && (
          <FontAwesome
            name={isPasswordVisible ? 'eye' : 'eye-slash'}
            size={20}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={styles.icon}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '90%',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    padding: 2,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    height: 50,
  },
  inputIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
  },
  icon: {
    alignSelf: 'center',
    paddingRight: 10,
  },
});

export default CustomizedInput;
