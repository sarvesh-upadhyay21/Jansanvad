import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ComplaintScreen from './components/Complaint_Screen';
import GalleryScreen from './components/Gallery_Screen';
import ImageDetailScreen from './components/ImageDetailScreen';
import LeaderDetailsScreen from './components/LeaderDetails_Screen';
import MyInformationScreen from './components/MyInformation_Screen';
import ViewLeaderScreen from './components/ViewLeader_Screen';
import { Home, Welcome } from './screens';
import Dashboard from './screens/dashBoard';
import LoginScreen from './screens/VerificationScreen';


const Stack = createNativeStackNavigator();
const GradientHeader = () => (
    <LinearGradient
        colors={['#FF9933', '#FFFFFF', '#138808']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ flex: 1 }}
    />
);
function AlltabNavigation() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="GalleryScreen"
                component={GalleryScreen}
                options={{
                    headerShown: true,
                    headerTitle: 'Gallery',
                    headerBackground: GradientHeader,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        alignSelf: 'center',
                    },
                    headerTintColor: '#000',
                }}
            />
            <Stack.Screen
                name="ImageDetail"
                component={ImageDetailScreen}
                options={{
                    headerShown: true,
                    headerTitle: 'ImageDetail',
                    headerBackground: GradientHeader,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        alignSelf: 'center',
                    },
                    headerTintColor: '#000',
                }}
            />
            <Stack.Screen
                name="ViewLeaderScreen"
                component={ViewLeaderScreen}
                options={{
                    headerShown: true,
                    headerTitle: 'Leaders',
                    headerBackground: GradientHeader,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        alignSelf: 'center',
                    },
                    headerTintColor: '#000',
                }}
            />
            <Stack.Screen
                name="LeaderDetails"
                component={LeaderDetailsScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="ComplaintScreen"
                component={ComplaintScreen}
                options={{
                    headerShown: true,
                    headerTitle: 'Complaint Screen',
                    headerBackground: GradientHeader,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        alignSelf: 'center',
                    },
                    headerTintColor: '#000',
                }}
            />
            <Stack.Screen
                name="MyInformationScreen"
                component={MyInformationScreen}
                options={{
                    headerShown: true,
                    headerTitle: 'My Information',
                    headerBackground: GradientHeader,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        alignSelf: 'center',
                    },
                    headerTintColor: '#000',
                }}
            />
            <Stack.Screen
                name="VerificationScreen"
                component={LoginScreen}
                options={{
                    headerShown: true,
                    headerTitle: 'Verification',
                    headerBackground: GradientHeader,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        alignSelf: 'center',
                    },
                    headerTintColor: '#000',
                }}
            />

        </Stack.Navigator>
    );
}

export default AlltabNavigation;

const styles = StyleSheet.create({});
