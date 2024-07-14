import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AlltabNavigation from './src/tabNavigation';

const App = () => {
  return (
    <>
      {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
      <NavigationContainer>
        <AlltabNavigation />
      </NavigationContainer>
    </>
  );
};

export default App;
