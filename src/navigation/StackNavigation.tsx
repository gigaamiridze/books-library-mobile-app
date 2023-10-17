import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Services, Categories, Selection, Contact } from '../screens';
import { Routes } from '../constants';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.CATEGORIES} component={Categories} />
      <Stack.Screen name={Routes.SELECTION} component={Selection} />
      <Stack.Screen name={Routes.SERVICES} component={Services} />
      <Stack.Screen name={Routes.CONTACT} component={Contact} />
    </Stack.Navigator>
  )
}

export default StackNavigation;
