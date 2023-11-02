import React, { useState } from 'react';
import { Text, View } from 'react-native'; // Import KeyboardAvoidingView
import Btn from '../components/Btn';
import Header from '../components/Header';
import { TouchableOpacity } from 'react-native';
import LoginStyle from '../css/LoginStyle';
import CustomizedInput from '../components/Customizedinput';

const Login = () => {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const styles = LoginStyle;
    return (
        <View style={styles.main}>

            <Header names='heart' text='Log in' />
            <View style={styles.loginform}>

                <CustomizedInput
                    placeholder='Email'
                    value={email}
                    onChangeText={(text) => setemail(text)}
                />

                <CustomizedInput
                    placeholder='Password'
                    value={password}
                    onChangeText={(text) => setpassword(text)}
                    iconName='eye'
                />

                <TouchableOpacity style={styles.forgot}>
                    <Text style={styles.txt}>Forgot Password?</Text>
                </TouchableOpacity>

                <Btn text='Sign In' />

                <TouchableOpacity style={styles.already}>
                    <Text style={styles.txt}>Don't you have account?Signup</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}
export default Login;
