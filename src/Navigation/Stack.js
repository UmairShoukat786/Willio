import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from '../screens/Signup';
import Bottom from './Bottom';
import Additems from '../screens/Itemslist';




const Stack = createStackNavigator();

const Stacked = () => {
    //   const [user, setUser] = useState(null);

    //   useEffect(() => {

    //     const unsubscribe = auth().onAuthStateChanged((userAuth) => {

    //       setUser(userAuth);
    //     });


    //     return () => unsubscribe();
    //   }, []);
    return (
        <Stack.Navigator>

            <Stack.Screen name="Additems" component={Bottom} options={{ headerShown: false }}  />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Bottom} options={{ headerShown: false }} />
            <Stack.Screen name="Bottom" component={Bottom} />


        </Stack.Navigator>
    );
};

export default Stacked;
