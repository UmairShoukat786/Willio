import React from 'react';
import { StyleSheet, View, FlatList, Text, Image,TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Heading from '../components/Heading';



const items = [
    {
        id: 1,
        title: 'Hazel',
        displaypic: require('../assets/images/science.jpeg'),
        itempic: require('../assets/images/science.jpeg'),
        description: "Today's Doodle celebrates Pakistani artist, writer, and actor Farooq Qaiser",
    },
    {
        id: 2,
        title: 'Katherine',
        displaypic: require('../assets/images/science.jpeg'),
        itempic: require('../assets/images/science.jpeg'),
        description: "Today's Doodle celebrates Pakistani artist, writer, and actor Farooq Qaiser",
    },
    {
        id: 4,
        title: 'Alpha',
        displaypic: require('../assets/images/science.jpeg'),
        itempic: require('../assets/images/science.jpeg'),
        description: "Today's Doodle celebrates Pakistani artist, writer, and actor Farooq Qaiser",
    },
    {
        id: 5,
        title: 'Alpha',
        displaypic: require('../assets/images/science.jpeg'),
        itempic: require('../assets/images/science.jpeg'),
        description: "Today's Doodle celebrates Pakistani artist, writer, and actor Farooq Qaiser",
    },
    {
        id: 6,
        title: 'Alpha',
        displaypic: require('../assets/images/science.jpeg'),
        itempic: require('../assets/images/science.jpeg'),
        description: "Today's Doodle celebrates Pakistani artist, writer, and actor Farooq Qaiser",
    },
    {
        id: 7,
        title: 'Alpha',
        displaypic: require('../assets/images/science.jpeg'),
        itempic: require('../assets/images/science.jpeg'),
        description: "Today's Doodle celebrates Pakistani artist, writer, and actor Farooq Qaiser",
    },
    {
        id: 8,
        title: 'Alpha',
        displaypic: require('../assets/images/science.jpeg'),
        itempic: require('../assets/images/science.jpeg'),
        description: "Today's Doodle celebrates Pakistani artist, writer, and actor Farooq Qaiser",
    },
    {
        id: 9,
        title: 'Alpha',
        displaypic: require('../assets/images/science.jpeg'),
        itempic: require('../assets/images/science.jpeg'),
        description: "Today's Doodle celebrates Pakistani artist, writer, and actor Farooq Qaiser",
    },
];

const Itemlist = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Heading />
            <View style={{marginBottom:100}}>
            <FlatList
                data={items}
                numColumns={2} // Display two cards per row
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <TouchableOpacity onPress={() => navigation.navigate('Edititem',{item})}>
                        <Image source={item.itempic} style={styles.cardImage} />
                        <View style={styles.titleContainer}>
                            <Image source={item.displaypic} style={styles.displaypic} />
                            <Text style={styles.cardTitle}>{item.title}</Text>
                                <View style={item.id % 2 === 0 ? styles.iconEven : styles.iconOdd}>
                                    <Ionicons name='heart' size={12} style={styles.icon} />
                                </View>
                        </View>

                        <Text style={styles.cardDescription}>{item.description}</Text>
                        <Text style={styles.tags}>#des #sed #wed</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
            </View>
        
        </View>
    );
};

const styles = StyleSheet.create({
  container:{flex:1},
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginLeft: 7,
        marginTop: 10,
        width: '47%', // Adjust the width as needed
        borderWidth: 1,
        borderColor: 'black',
        borderBottomWidth: 4,
        borderRightWidth: 4,
        height: 'auto',
    },
    displaypic: {
        width: 30,
        height: 30,
        borderRadius: 50,
        margin: 5,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
     color:'black'
    },
    cardImage: {
        width: '100%', // Adjust the width as needed
        height: 180,
        borderRadius: 14,
    },
    cardDescription: {
        fontSize: 12,
        marginTop: 3,
        color:'black'
    },
    tags:{
        fontSize: 12,
        marginTop:2,
        color:'#4F99DD'
    },
    icon: {
        color: '#EE05AD', // Customize icon color
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconEven: {
        backgroundColor: '#FEB5FF',
        left: 17,
        borderRadius:5,
        borderWidth:0.5,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    width: 26,
    height: 26,
    paddingHorizontal:6,
    paddingVertical:6

    },
    iconOdd: {
        width: 26,
        height: 26,
        backgroundColor: '#FEB5FF',
        left: 40,
        borderRadius:5,
        borderWidth:0.5,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    paddingHorizontal:6,
    paddingVertical:6

    },
});

export default Itemlist;