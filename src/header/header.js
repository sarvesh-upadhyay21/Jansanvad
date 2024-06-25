import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderProfile = () => {
  const navigation = useNavigation();
  const isTablet = Dimensions.get('window').width >= 600;
  const [notificationCount, setNotificationCount] = useState('')
  const isDashboardOpen = navigation.getState().index;
  const [notificationData, setNotificationData] = useState(null);

  const handleNavigation = (index) => {
    navigation.goBack();
  }

//   useFocusEffect(
//     React.useCallback(() => {
//       fetchNotificationData();
//     }, [])
//   );

  // const fetchNotificationData = async () => {
  //   try {
  //     // setLoading(true);
  //     const response = await GetNotification(GET_HEADER_NOTIFICATION);
  //     const { data } = response;
  //     if (data && data.unReadNotificationCount && data.unReadNotificationCount.totalUnReadNotification) {
  //       setNotificationCount(data.unReadNotificationCount.totalUnReadNotification);
  //       setNotificationData(data);
  //     } else {
  //       console.warn('Invalid or missing unReadNotificationCount data in the response.');
  //     }
  //     // setLoading(false);
  //   } catch (error) {
  //     console.error('Error fetching notification data:', error);
  //     // setLoading(false);
  //   }
  // };

  // const navigateToNotification = () => {
  //   if (notificationData) {
  //     navigation.navigate('NotificationScreen', {
  //       notificationData: notificationData,
  //     });
  //   } else {
  //     console.error('Notification data is not available yet.');
  //   }
  // };

//   const fetchNotificationData = async () => {
//     try {
//       const response = await GetNotification(GET_HEADER_NOTIFICATION);
//       const { data } = response;
//       if (data && data?.unReadNotificationCount && data?.unReadNotificationCount?.totalUnReadNotification) {
//         setNotificationCount(data?.unReadNotificationCount?.totalUnReadNotification);
//       } else {
//         // console.warn('Invalid or missing unReadNotificationCount data in the response.');
//       }
//     } catch (error) {
//       console.error('Error fetching notification data:', error);
//     }
//   };


//   const navigateToNotification = () => {
//     navigation.navigate('NotificationScreen', {
//       notificationData: 'This is the notification data',
//     });
//   };

  return (
    <View style={[styles.header, isTablet && styles.headerTablet]}>
      <TouchableOpacity
        onPress={() => {
          if (isDashboardOpen === 0) {
            navigation.dispatch(DrawerActions.openDrawer());
          } else {
            handleNavigation(isDashboardOpen)
          }
        }}
        style={styles.drawerIcon}
      >
        <Icon name={(isDashboardOpen === 0) ? "bars" : "arrow-left"} color="#000" style={styles.toggleIcon} />
      </TouchableOpacity>
      <Text style={[styles.appName, isTablet && styles.appNameTablet]}>{'JANSAMVAD'}</Text>
      <TouchableOpacity
        style={styles.drawerIcon}
        onPress={'navigateToNotification'}>
        <Icon name="bell" color="#000" style={styles.toggleIcon} />
        {notificationCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{'notificationCount'}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1b98d2',
    paddingHorizontal: 16,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerTablet: {
    paddingHorizontal: 32,
  },
  drawerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  appNameTablet: {
    fontSize: 28,
  },
  badge: {
    backgroundColor: 'red',
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  badgeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  messageText: {
    color: '#000',
    fontSize: 14,
    paddingVertical: 2,
  },
});

export default HeaderProfile;
