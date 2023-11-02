import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Input = ({placeholder,value,onChangeText}) => {
  return (
    <View>
     <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        KeyboardAvoidingView= {true}
        placeholderTextColor="#6C6C6C" 
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({

input:{
    width: 140,
    backgroundColor: 'white',
    borderWidth: 1,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    padding: 2,
    height:50
}

})