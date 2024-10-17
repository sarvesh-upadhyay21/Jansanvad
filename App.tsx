// App.js
import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AlltabNavigation from './src/tabNavigation';
import { UserRoleProvider } from './src/MyContext';

const App = () => {
  return (
    <>
      {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
      <UserRoleProvider>
        <NavigationContainer>
          <AlltabNavigation />
        </NavigationContainer>
      </UserRoleProvider>
    </>
  );
};

export default App;
