import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import store from './src/Store';

import Contacts from './src/screens/Contacts';
import Favorites from './src/screens/Favorites';
import ProfileContact from './src/screens/ProfileContact';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Contacts') {
          iconName = 'contacts';
        } else if (route.name === 'Favorites') {
          iconName = 'star';
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#e91e63',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen 
      name="Contacts" 
      component={Contacts}
      options={{ title: 'All Contacts' }}
    />
    <Tab.Screen 
      name="Favorites" 
      component={Favorites}
      options={{ title: 'Favorites' }}
    />
  </Tab.Navigator>
);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="MainTabs" 
            component={TabNavigator} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="ProfileContact" 
            component={ProfileContact}
            options={{ title: 'Contact Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;