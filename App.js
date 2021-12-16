import React from 'react';
import { StyleSheet } from 'react-native';
import Homescreen from './Screens/Homescreen';
import Secondscreen from './Screens/Secondscreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#101010'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: '#ffd700'
        }}
      >
        <Stack.Screen name="Home" component={Homescreen} options={{ headerShown: false }} />
        <Stack.Screen name="Second" component={Secondscreen} options={{ title: 'Account' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
