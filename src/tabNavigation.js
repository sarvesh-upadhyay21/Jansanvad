import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';

import ComplaintScreen from './components/Complaint_Screen';
import GalleryScreen from './components/Gallery_Screen';
import ImageDetailScreen from './components/ImageDetailScreen';
import LeaderDetailsScreen from './components/LeaderDetails_Screen';
import MyInformationScreen from './components/MyInformation_Screen';
import ViewLeaderScreen from './components/ViewLeader_Screen';
import { Home, Welcome } from './screens';
import LoginScreen from './screens/Login';
import Register from './screens/Register';

import AdminDashboard from './components/admin/AdminDashboard';
import { useUserRole } from './MyContext'; // Import context

const Stack = createNativeStackNavigator();

// Common header style to reduce repetition
const commonHeaderStyle = {
  backgroundColor: '#FFFFFF',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 3,
  elevation: 5,
};

const commonHeaderTitleStyle = {
  fontWeight: 'bold',
  textAlign: 'center',
};

function AlltabNavigation() {
  const { userRole } = useUserRole(); // Get the user role from context

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: true,
          headerTitle: 'Register',
          headerStyle: commonHeaderStyle,
          headerTitleAlign: 'center',
          headerTitleStyle: commonHeaderTitleStyle,
          headerTintColor: '#000',
        }}
      />

      {/* Conditionally render screens based on role */}
      {userRole === 'Admin' && (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AdminDashboard"
            component={AdminDashboard}
            options={{ headerShown: false }}
          />
        </>
      )}

      {userRole === 'User' && (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ComplaintScreen"
            component={ComplaintScreen}
            options={{
              headerShown: true,
              headerTitle: 'Complaint Screen',
              headerStyle: commonHeaderStyle,
              headerTitleAlign: 'center',
              headerTitleStyle: commonHeaderTitleStyle,
              headerTintColor: '#000',
            }}
          />
          <Stack.Screen
            name="MyInformationScreen"
            component={MyInformationScreen}
            options={{
              headerShown: true,
              headerTitle: 'My Information',
              headerStyle: commonHeaderStyle,
              headerTitleAlign: 'center',
              headerTitleStyle: commonHeaderTitleStyle,
              headerTintColor: '#000',
            }}
          />
          <Stack.Screen
            name="GalleryScreen"
            component={GalleryScreen}
            options={{
              headerShown: true,
              headerTitle: 'Gallery',
              headerStyle: commonHeaderStyle,
              headerTitleAlign: 'center',
              headerTitleStyle: commonHeaderTitleStyle,
              headerTintColor: '#000',
            }}
          />
          <Stack.Screen
            name="ImageDetail"
            component={ImageDetailScreen}
            options={{
              headerShown: true,
              headerTitle: 'Image Detail',
              headerStyle: commonHeaderStyle,
              headerTitleAlign: 'center',
              headerTitleStyle: commonHeaderTitleStyle,
              headerTintColor: '#000',
            }}
          />
          <Stack.Screen
            name="ViewLeaderScreen"
            component={ViewLeaderScreen}
            options={{
              headerShown: true,
              headerTitle: 'Leaders',
              headerStyle: commonHeaderStyle,
              headerTitleAlign: 'center',
              headerTitleStyle: commonHeaderTitleStyle,
              headerTintColor: '#000',
            }}
          />
          <Stack.Screen
            name="LeaderDetailsScreen"
            component={LeaderDetailsScreen}
            options={{ headerShown: false }}
          />
        </>
      )}

      {userRole === 'Leader' && (
        <>
          <Stack.Screen
            name="LeaderDetailsScreen"
            component={LeaderDetailsScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}




export default AlltabNavigation;

const styles = StyleSheet.create({});
