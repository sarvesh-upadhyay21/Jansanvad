import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';
const imageUrl = '../assets/images/India.png';

const MyInformationScreen = () => {
  const [userData, setDataUser] = useState([]);
  console.log(userData, 'userData');

  const getUserDetails = async () => {
    try {
      const response = await axios.get(
        'https://jansamvad-server-production.up.railway.app/api/user/65d0a18764f8ece962e3b23c'
      );
      setDataUser(response?.data);
      console.log(response?.data, "User Data");
    } catch (error) {
      console.error('Error fetching user details:', error.message);
      if (error.response) {
        console.log('Server responded with:', error.response.status, error.response.data);
      } else if (error.request) {
        console.log('No response received:', error.request);
      } else {
        console.log('Request error:', error.message);
      }
    }
  };
  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/images/cm_images/sarvesh.jpg')}
          resizeMode="cover"
          style={styles.profileImage}
        />
        <Text style={styles.name}>{userData?.username}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Phone Number:</Text>
          <Text style={styles.info}>{userData?.mobile}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>DOB:</Text>
          <Text style={styles.info}>{userData?.dob}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.info}>{`${userData?.email}`}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.info}>{` ${userData?.address}`}</Text>
        </View>
      </View>
    </View>
  );
};

export default MyInformationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
    margin: 20,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  info: {
    fontSize: 16,
    color: '#000',
  },
});

// import React, { useEffect, useState } from 'react';
// import { Image, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { getUserDetails } from '../screens/services/auth.service';

// const MyInformationScreen = () => {
//     const navigation = useNavigation();
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchUserDetails = async () => {
//             try {
//                 const data = await getUserDetails();
//                 setUser(data);
//             } catch (err) {
//                 setError(err);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         console.log(getUserDetails)
//         fetchUserDetails();
//     }, []);

//     if (loading) {
//         return (
//             <View style={styles.container}>
//                 <ActivityIndicator size="large" color="#0000ff" />
//             </View>
//         );
//     }

//     if (error) {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.errorText}>Error: {error.message}</Text>
//             </View>
//         );
//     }

//     return (
//         <View style={styles.container}>
//             <View style={styles.profileContainer}>
//                 <Image
//                     source={{ uri: user?.profileImageUrl || imageUrl }}
//                     resizeMode='cover'
//                     style={styles.profileImage}
//                 />
//                 <Text style={styles.name}>{user?.username}</Text>
//             </View>
//             <View style={styles.infoContainer}>
//                 <View style={styles.infoRow}>
//                     <Text style={styles.label}>Phone Number:</Text>
//                     <Text style={styles.info}>{user?.mobile}</Text>
//                 </View>
//                 <View style={styles.infoRow}>
//                     <Text style={styles.label}>Email:</Text>
//                     <Text style={styles.info}>{user?.email}</Text>
//                 </View>
//                 <View style={styles.infoRow}>
//                     <Text style={styles.label}>Address:</Text>
//                     <Text style={styles.info}>{user?.address}</Text>
//                 </View>
//                 {/* You can add additional fields here if needed, like DOB */}
//             </View>
//         </View>
//     );
// };

// export default MyInformationScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
//     profileContainer: {
//         alignItems: 'center',
//         margin: 20,
//         padding: 5,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ccc',
//     },
//     profileImage: {
//         width: 100,
//         height: 100,
//         borderRadius: 50,
//         marginBottom: 10,
//     },
//     name: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#000',
//     },
//     infoContainer: {
//         flex: 1,
//         paddingHorizontal: 20,
//     },
//     infoRow: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginBottom: 10,
//     },
//     label: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#000',
//     },
//     info: {
//         fontSize: 16,
//         color: '#000',
//     },
//     errorText: {
//         fontSize: 18,
//         color: 'red',
//         textAlign: 'center',
//         marginTop: 20,
//     },
// });
