import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
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
          height: 50,
          width: width,
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
                  fontSize: 15,
                }}>
                Dashboard
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
                  fontSize: 15,
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
