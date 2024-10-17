import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

// Screens
import AdminDashboard from '../components/admin/AdminDashboard';
import Dashboard from './dashBoard';
import Search from './Search';

// User Role Context
import { useUserRole } from '../MyContext'; 


// Constants
const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');

const Home = () => {
  const { userRole } = useUserRole(); // Access the user role

  const tabBarIcon = (label, focused) => (
    <View style={styles.tabIconContainer}>
      <Text style={[styles.tabText, { color: focused ? '#fff' : '#000' }]}>{label}</Text>
    </View>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <LinearGradient
            colors={['#2D97DA', '#2249D6']}
            style={StyleSheet.absoluteFillObject}
          />
        ),
        tabBarShowLabel: false,
      }}
    >
      {userRole === 'Admin' ? (
        <Tab.Screen
          name="AdminDashboard"
          component={AdminDashboard}
          options={{
            tabBarIcon: ({ focused }) => tabBarIcon('Admin Dashboard', focused),
          }}
        />
      ) : (
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarIcon: ({ focused }) => tabBarIcon('Dashboard', focused),
          }}
        />
      )}

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => tabBarIcon('Search', focused),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;

// Styles
const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    height: hp('7%'),
    width: wp('100%'),
    borderTopWidth: 0,
    elevation: 5,
  },
  tabIconContainer: {
    alignItems: 'center',
  },
  tabText: {
    fontFamily: 'Roboto-Bold',
    fontSize: wp('4%'),
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
