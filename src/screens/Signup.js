import React, { useState } from 'react';
import { Text, View } from 'react-native'; // Import KeyboardAvoidingView
import Input from '../components/Input';
import Btn from '../components/Btn';
import Header from '../components/Header';
import { TouchableOpacity } from 'react-native';
import LoginStyle from '../css/LoginStyle';
import Customizedinput from '../components/Customizedinput';

const Signup = () => {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [confirmpassword, setconfirmpassword] = useState();
    const [firstname, setfirstname] = useState();
    const [lastname, setlastname] = useState();

    const styles = LoginStyle;
    return (
        <View style={styles.main}>

            <Header names='heart' text='Sign Up' />
            <View style={styles.loginform}>

                <View style={{flexDirection:'row'}}>
                   <View>
                   <Input
                        placeholder='First Name'
                        value={firstname}
                        onChangeText={(text) => setfirstname(text)}
                    />
                   </View>
                    <View style={{marginLeft:10}}>
                    <Input
                        placeholder='Last Name'
                        value={lastname}
                        onChangeText={(text) => setlastname(text)}
                    />
                    </View>
                    
                </View>

                <Customizedinput
                    placeholder='Email'
                    value={email}
                    onChangeText={(text) => setemail(text)}
                />

                <Customizedinput
                    placeholder='Password'
                    value={password}
                    onChangeText={(text) => setpassword(text)}
                    iconName='eye'

                />
                <Customizedinput
                    placeholder='Confirm Password'
                    value={confirmpassword}
                    onChangeText={(text) => setconfirmpassword(text)}
                    iconName='eye'
                />


                <Btn text='Sign up' />

                <TouchableOpacity style={styles.already}>
                    <Text style={styles.txt}>Do you have account?Sign in</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}
export default Signup;
