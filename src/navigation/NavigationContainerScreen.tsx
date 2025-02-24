import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import DetailScreen from '../screens/detailScreen/DetailScreen';

export default function NavigationContainerScreen() {
  const Stack = createNativeStackNavigator();

  function RootStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={Tabs} options = {{header :()=>null}} />
        <Stack.Screen name="DetailScreen" component={DetailScreen}  options = {{header :()=>null}}/>

      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <RootStack/>
    </NavigationContainer>
  );
}