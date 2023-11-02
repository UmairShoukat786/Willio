import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({ names, text }) => {
  return (
    <View style={styles.mainHeader}>
      <View style={styles.headOne}>
       <Image
       source={require('../assets/images/Maskgroup.png')}
       style={styles.headOne}/>

      </View>
      <View style={styles.headTwo}>
        <Text style={styles.txt}>{text}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainHeader: {
    flexDirection: 'row',
    backgroundColor: '#EAFF87',
    width: 430,
    height: 283,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  headOne: {
    width: 121,
    height: 135.42,
    top: 40,
    left: 20
    
  },
  headTwo: {
    width: 119,
    height: 60,
    top: 112,
    left:50
  },
  txt: {
    fontFamily: 'Poppins',
    fontSize: 40,
    fontWeight: 'bold', // Use a string for fontWeight
    lineHeight: 60,
    letterSpacing: 0, // Set your desired letter spacing
    textAlign: 'left',
    color:'#000000'
  },
});
