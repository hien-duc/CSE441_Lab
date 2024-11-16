import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AddServiceScreen from './screens/AddServiceScreen';
import ServiceDetailScreen from './screens/ServiceDetailScreen';
import EditServiceScreen from './screens/EditServiceScreen';
import DeleteServiceScreen from './screens/DeleteServiceScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerLeft: null }} />
        <Stack.Screen name="AddService" component={AddServiceScreen} options={{ title: 'Add Service' }} />
        <Stack.Screen name="ServiceDetail" component={ServiceDetailScreen} options={{ title: 'Service Detail' }} />
        <Stack.Screen name="EditService" component={EditServiceScreen} options={{ title: 'Edit Service' }} />
        <Stack.Screen name="DeleteService" component={DeleteServiceScreen} options={{ title: 'Delete Service' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
