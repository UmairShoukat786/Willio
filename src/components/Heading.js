import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';

const Heading = () => {
  const [activeTab, setActiveTab] = useState('Following');

  // You can use useEffect to set the default active tab when the component is initialized
  useEffect(() => {
    // Set the default active tab to "ForYou" when the component is initialized
    setActiveTab('ForYou');
  }, []);

  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={[
          styles.tab,
          activeTab === 'ForYou' ? styles.activeTab : null,
        ]}
        activeOpacity={0.6}
        onPress={() => setActiveTab('ForYou')}
      >
        <Text style={styles.tabText}>For you</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.tab,
          activeTab === 'Following' ? styles.activeTab : null,
        ]}
        activeOpacity={0.6}
        onPress={() => setActiveTab('Following')}
      >
        <Text style={styles.tabText}>Following</Text>
      </TouchableOpacity>
    </View>
  );
};


export default Heading;

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
      borderBottomWidth: 4,
      borderRightWidth: 4,
      height: 58,
      alignItems: 'center',
      marginHorizontal: 20,
      marginVertical: 20,
    },
    tab: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height:40,
      
    },
    tabText: {
      fontSize: 16,
      color:'black',
      fontWeight:'bold'
    },
    activeTab: {
      backgroundColor: '#CDF886', 
      borderRadius:10,
      borderWidth:1
    },
    
  });