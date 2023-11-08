import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert, TextInput, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Evilicons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Edititem = ({ navigation, route }) => {
    const { item } = route.params;
    const [isHovered, setIsHovered] = useState(false);
    return (
        <View>
            <View style={{ flexDirection: 'row', margin: 10 }}>
                {Array(5).fill().map((_, index) => (
                    <TouchableOpacity
                        key={index}
                        onPressIn={() => setIsHovered(true)}
                        onPressOut={() => setIsHovered(false)}
                    >
                        <Image
                            source={item.displaypic}
                            style={isHovered ? styles.hoveredImage : styles.defaultImage}
                        />
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.cardContainer}>
                <Image source={item.itempic} style={styles.itemImage} />
                <View style={styles.itemInfo}>
                    <View style={styles.descriptioncontain}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={item.displaypic} style={styles.displaypic} />
                            <Text style={styles.itemTitle}>{item.title}</Text>
                        </View>

                        <View>
                            <Text style={styles.itemDescription}>{item.description}</Text>
                            <Text style={styles.tags}>#des #sed #wed</Text>
                        </View>
                    </View>

                    <View style={styles.iconcontain}>
                        <View style={[styles.iconOdd, { backgroundColor: '#FEB5FF' }]}>
                            <Ionicons name='heart' size={18} color="#EE05AD" />
                        </View>
                        <Text>------</Text>
                        <View style={[styles.iconOdd, { backgroundColor: '#EAFF87' }]}>
                            <Evilicons name='pencil' size={20} color='#93EC00'/>
                        </View>
                        <Text>------</Text>
                        <View style={[styles.iconOdd, { backgroundColor: '#FFFFFF' }]}>
                            <MaterialCommunityIcons name='dots-horizontal' size={18} color='#000000'/>
                        </View>
                        <Text>------</Text>
                    </View>
                </View>
            </View>
       
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        margin: 5,
        borderWidth: 1,
        borderColor: 'black',
        height: 'auto',
        borderBottomWidth: 4,
        borderRightWidth: 4,
    },
    defaultImage: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginLeft: 8,
    },
    hoveredImage: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    displaypic: {
        width: 40,
        height: 40,
        borderRadius: 50,
        margin: 5,
    },
    itemImage: {
        width: '100%',
        height: 380,
        borderRadius: 10,
    },
    tags: {
        fontSize: 15,
        marginTop: 2,
        color: '#4F99DD',
    },
    itemInfo: {
        marginTop: 10,
        flexDirection: 'row',
    },
    itemTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 8,
    },
    itemDescription: {
        fontSize: 14,
        color: 'black',
        margin: 5,
    },
    iconOdd: {
        width: 30,
        height: 30,
        borderRadius: 5,
        borderWidth: 0.5,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        paddingHorizontal: 4.5,
        paddingVertical: 4,
    },
    icon: {
        color: '#EE05AD',
    },
    descriptioncontain: {
        width: '80%',
    },
    iconcontain: {
        left: 35,
    },
});

export default Edititem;
