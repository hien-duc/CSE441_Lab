import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import LoginScreen from './src/LoginScreen';
import HomeScreen from './src/HomeScreen';
import AddServiceScreen from './src/AddServiceScreen';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View>
      {/* <LoginScreen/> */}
      <HomeScreen/>
      {/* <AddServiceScreen/> */}
    </View>
      
  );
};

export default App;
