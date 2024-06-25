import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DashboardScreen from '../screens/dashBoard';
import LeaveRequestModal from '../dashBoard/leaveModal/leaveRequestModal';
import HeaderProfile from '../header/header';
import Profile from '../dashBoard/userProfile/profile';
const Drawer = createDrawerNavigator();

const SideDrower = () => {
  return (
    <>
      <Drawer.Navigator
        // Profile={props => <Profile{...props} />}
      >
        <Drawer.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={({ navigation }) => ({
            header: () => <HeaderProfile navigation={navigation} />,
          })}

        />
        <Drawer.Screen
          name="Leave Request"
          component={LeaveRequestModal}
          options={({ navigation }) => ({
            header: () => <HeaderProfile navigation={navigation} />,
          })}
        />
      </Drawer.Navigator>

    </>
  )
}

export default SideDrower

const styles = StyleSheet.create({})