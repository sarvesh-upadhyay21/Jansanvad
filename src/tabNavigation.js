import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { default as Dashboard } from './screens/dashBoard';
import HeaderProfile from './header/header';

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

function AlltabNavigation() {
    return (
        <>
            <Drawer.Navigator
            // Profile={props => <Profile{...props} />}
            >
                <Drawer.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={({ navigation }) => ({
                        header: () => <HeaderProfile navigation={'navigation'} />,
                    })}

                />
            </Drawer.Navigator>
        </>
    );
};
export default AlltabNavigation;

const styles = StyleSheet.create({})

