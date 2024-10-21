import React, { useState } from 'react';
import {
  Dimensions,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  StatusBar,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUserRole } from '../MyContext'; // Import user role context
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
  const navigation = useNavigation();
  const { setUserRole } = useUserRole(); // Use the setUserRole function
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');

  // Automatically handle screen dimensions with useWindowDimensions
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();

  const handleLogin = async () => {
    if (!mobileNumber || !password) {
      Alert.alert('Error', 'Mobile number and password are required.');
      return;
    }

    try {
      const response = await fetch(
        'http://13.201.123.93/api/UserRegistration/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            accept: '*/*',
          },
          body: JSON.stringify({
            mobileNumber: mobileNumber,
            password: password,
          }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        if (data.token) {
          await AsyncStorage.setItem('userToken', data.token); // Store token
        }
        if (data.role === 'Admin') {
          setUserRole('Admin');
          Alert.alert('Login Successful', 'Welcome Admin!');
          navigation.replace('Home'); // Navigate to Admin Dashboard
        } else if (data.role === 'User') {
          await AsyncStorage.setItem('verifiedUserRole', 'User');
          setUserRole('User');
          Alert.alert('Login Successful', 'Welcome User!');
          navigation.replace('Home'); // Navigate to User Home
        } else if (data.role === 'Leader') {
          await AsyncStorage.setItem('verifiedUserRole', 'Leader');
          setUserRole('Leader');
          Alert.alert('Login Successful', 'Welcome Leader!');
          navigation.replace('Home'); // Navigate to Leader Dashboard or Home
        } else {
          Alert.alert('Error', 'Invalid role.');
        }
      } else {
        Alert.alert(
          'Error',
          data.message || 'Invalid credentials. Please try again.',
        );
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };

  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };

  const isMobileNumberEntered = mobileNumber.length > 0;
  const isPasswordEntered = password.length > 0;
  const isLandscape = screenWidth > screenHeight;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={[styles.image, isLandscape ? styles.imageLandscape : null]}
          source={require('../assets/images/Image-1.jpeg')}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Mobile Number<Text style={styles.requiredField}>*</Text></Text>
          <TextInput
            style={styles.input}
            placeholder="Enter mobile number"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            keyboardType="phone-pad"
            placeholderTextColor="#888"
          />
        </View>

        <View
          style={[
            styles.inputWrapper,
            !isMobileNumberEntered && styles.disabledInputContainer,
          ]}>
          <Text style={styles.label}>Password<Text style={styles.requiredField}>*</Text></Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#888"
            editable={isMobileNumberEntered}
          />
        </View>

        <TouchableOpacity
          style={[
            styles.button,
            !(isMobileNumberEntered && isPasswordEntered) &&
            styles.disabledButton,
          ]}
          onPress={handleLogin}
          disabled={!(isMobileNumberEntered && isPasswordEntered)}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRegisterPress}>
          <Text style={styles.helpText}>
            Register? <Text style={styles.helpLink}>Register</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('5%'),
  },
  imageContainer: {
    flex: 0.5,
  },
  image: {
    width: '100%',
    height: hp('20%'),
  },
  imageLandscape: {
    width: wp('50%'),
    height: hp('20%'),
  },
  content: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: wp('8%'),
    color: '#007aff',
    fontWeight: 'bold',
    marginBottom: hp('2%'),
  },
  inputWrapper: {
    width: '100%',
    marginBottom: height * 0.02,
  },
  label: {
    fontSize: width * 0.045, // Responsive font size
    color: '#333',
    marginBottom: height * 0.01,
  },
  requiredField: {
    color: 'red',
  },
  input: {
    height: height * 0.06, // Responsive height
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
    color: '000000',  // Set input text color to black
  },
  button: {
    width: '100%',
    backgroundColor: '#2284c4',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  disabledButton: {
    backgroundColor: '#555',
  },
  buttonText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 15,
    color: '#fff',
  },
  helpText: {
    color: '#888',
    marginTop: hp('2%'),
  },
  helpLink: {
    color: '#007aff',
    fontWeight: 'bold',
  },
  requiredField: {
    color: 'red', // Set the color of the asterisk to red
  },
});

