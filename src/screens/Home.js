import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Search from './Search';
import Dashboard from './dashBoard';

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          height: hp('7%'), // Adjusted height for responsiveness
          width: wp('100%'), // Adjusted width for responsiveness
          ...styles.shadow,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              {/* <Icon
                name={focused ? 'home' : 'home-outline'}
                size={20}
                color={focused ? '#fff' : 'grey'}
              /> */}
              <Text
                style={{
                  color: focused ? '#fff' : 'grey',
                  fontFamily: 'Roboto-Bold',
                  fontSize: wp('4%'), // Adjusted font size for responsiveness
                }}>
                Home
              </Text>
            </View>
          ),
        }}
        name="Dashboard"
        component={Dashboard}
      /> 
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {/* <Icon
                name={focused ? 'search' : 'search-outline'}
                size={20}
                color={focused ? '#fff' : 'grey'}
              /> */}
              <Text
                style={{
                  color: focused ? '#fff' : 'grey',
                  fontSize: wp('4%'), // Adjusted font size for responsiveness
                  fontFamily: 'Roboto-Bold',
                }}>
                Search
              </Text>
            </View>
          ),
        }}
        name="Search"
        component={Search}
      />
    </Tab.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  shadow: {
    elevation: 5,
    shadowColor: '#000',
    backgroundColor: '#00003f',
    borderWidth: 1,
    borderColor: 'transparent',
  },
});
