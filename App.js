import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Stacked from './src/Navigation/Stack';
const App = () => {
  return (
    
        <NavigationContainer>
        <Stacked />
      </NavigationContainer>
 
  )
}

export default App

const styles = StyleSheet.create({})