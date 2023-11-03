import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Itemlist from '../screens/Itemslist';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

const Tab = createBottomTabNavigator();

const Bottom = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: '#121212',
                tabBarLabelStyle: {
                    fontSize: 10,

                },
                tabBarStyle: {
                    backgroundColor: 'white', // Background color of the tab bar
            
                    height: 40,
                   
                },
            }}
        >
            <Tab.Screen
                name="Itemlist"
                component={Itemlist}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="add" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Signup"
                component={Signup}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default Bottom;
