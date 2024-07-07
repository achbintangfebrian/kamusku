import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator}  from '@react-navigation/stack';
import Home from './Home';
import Detail from './Detail';

Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                options={{headerShown: false}}
                name="Home"
                component={Home}
                />
                <Stack.Screen options={{headerShown: false}} name="Detail" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;