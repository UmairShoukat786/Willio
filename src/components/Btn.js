import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import React from 'react'

const Btn = ({ text }) => {
    return (
        <View>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txt}>{text}</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Btn

const styles = StyleSheet.create({
    btn: {
        width: '90%',
        backgroundColor: '#CDF886',
        opacity: 0.9,
        borderWidth: 1,
        borderBottomWidth: 4,
        borderRightWidth: 4,
        borderColor: 'black',
        borderRadius: 10,
        height: 50
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
       marginTop:8,
       marginLeft:130
    }
})