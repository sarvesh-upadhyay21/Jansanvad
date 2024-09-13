import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Search from './Search';
import Dashboard from './dashBoard';
import LinearGradient from 'react-native-linear-gradient';

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
          borderTopWidth: 0, // Optional: to remove border on the top of the tab bar
          ...styles.shadow,
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={['#2D97DA', '#2249D6']}
            style={StyleSheet.absoluteFillObject}
          />
        ),
        tabBarShowLabel: false,
      }}
    >
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
                  color: focused ? '#fff' : 'black',
                  fontFamily: 'Roboto-Bold',
                  fontSize: wp('4%'), // Adjusted font size for responsiveness
                }}
              >
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
            <View style={{ alignItems: 'center' }}>
              {/* <Icon
                name={focused ? 'search' : 'search-outline'}
                size={20}
                color={focused ? '#fff' : 'grey'}
              /> */}
              <Text
                style={{
                  color: focused ? '#fff' : 'black',
                  fontSize: wp('4%'), // Adjusted font size for responsiveness
                  fontFamily: 'Roboto-Bold',
                }}
              >
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
    backgroundColor: '#2249D6',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
