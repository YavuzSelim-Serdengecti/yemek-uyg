import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { FavoritesProvider } from './src/context/FavoritesContext';

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </FavoritesProvider>
  );
}
