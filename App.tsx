import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Home, Welcome } from './src/screens/';
import GalleryScreen from './src/components/Gallery_Screen';
import ImageDetailScreen from './src/components/ImageDetailScreen';
import ViewLeaderScreen from './src/components/ViewLeader_Screen';
import LeaderDetailsScreen from './src/components/LeaderDetails_Screen';
import ComplaintScreen from './src/components/Complaint_Screen';
import MyInformationScreen from './src/components/MyInformation_Screen';

const App = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Welcome' component={Welcome} />
                <Stack.Screen name='Home' component={Home} />
                {/* <Stack.Screen name='login_Screen' component={login_Screen} /> */}
                <Stack.Screen name='ComplaintScreen' component={ComplaintScreen} />
                <Stack.Screen name='GalleryScreen' component={GalleryScreen} />
                <Stack.Screen name='ImageDetail' component={ImageDetailScreen} />
                <Stack.Screen name='MyInformationScreen' component={MyInformationScreen} />
                <Stack.Screen name='ViewLeaderScreen' component={ViewLeaderScreen } />
                <Stack.Screen name='LeaderDetailsScreen' component={LeaderDetailsScreen } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;