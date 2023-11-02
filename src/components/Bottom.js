import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Bottom = () => {
  const [activeTab, setActiveTab] = useState('Home');

  // Use useEffect to set the default active tab when the component is initialized
  useEffect(() => {
    // Set the default active tab to "Home" when the component is initialized
    setActiveTab('Home');
  }, []);

  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={[
          styles.tab,
          activeTab === 'Home' ? styles.activeTab : null,
        ]}
        activeOpacity={0.6}
        onPress={() => setActiveTab('Home')}
      >
        <Ionicons name='home' style={activeTab === 'Home' ? styles.activeIcon : styles.icon} />
        <Text style={styles.tabText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.tab,
          activeTab === 'Addition' ? styles.activeTab : null,
        ]}
        activeOpacity={0.6}
        onPress={() => setActiveTab('Addition')}
      >
        <AntDesign name='plus' style={activeTab === 'Addition' ? styles.activeIcon : styles.icon} />
        <Text style={styles.tabText}>Addition</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.tab,
          activeTab === 'Profile' ? styles.activeTab : null,
        ]}
        activeOpacity={0.6}
        onPress={() => setActiveTab('Profile')}
      >
        <FontAwesome5 name='user' style={activeTab === 'Profile' ? styles.activeIcon : styles.icon} />
        <Text style={styles.tabText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  main: {
    width: '90%',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 15,
    padding: 2,
    height: 80,
    alignItems: 'center',

   
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  tabText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  activeTab: {
    backgroundColor: '#CDF886',
  },
  icon: {
    color: 'black',
    fontSize: 20,
  },
  activeIcon: {
    color: 'black', // Change icon color on press
    fontSize: 20,
    borderColor:'black'
  },
});
