import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './app/Home';
import Ejercicio1 from './app/Ejercicio1';
import Ejercicio2 from './app/Ejercicio2';
import Ejercicio3 from './app/Ejercicio3';
import Ejercicio4 from './app/Ejercicio4';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Ejercicio1" component={Ejercicio1} />
        <Stack.Screen name="Ejercicio2" component={Ejercicio2} />
        <Stack.Screen name="Ejercicio3" component={Ejercicio3} />
        <Stack.Screen name="Ejercicio4" component={Ejercicio4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
