import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [token, setToken] = useState('');

    const staticToken = '123456'; // Replace with your static token

    const handleLogin = async () => {
        if (token === staticToken) {
            await AsyncStorage.setItem('verifiedToken', token);
            navigation.replace('Home'); // Replace with the name of your home screen
        } else {
            Alert.alert('Error', 'Invalid token. Please try again.');
        }
    };

    const isPhoneNumberEntered = phoneNumber.length === 10;
    const showHelpAlert = () => {
        Alert.alert('सहायता', 'कृपया अपना मोबाइल नंबर दर्ज करें। संदेश प्राप्त करने के बाद, एक बार का पासवर्ड (OTP) दर्ज करें। फिर Verify बटन पर क्लिक करें। उसके बाद, आप अपना डैशबोर्ड देख सकते हैं।');
    };
    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' />
            <View style={styles.header}>
                {/* Add any header content if needed */}
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Login</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.countryCode}>+91</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Mobile number"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        keyboardType="phone-pad"
                        maxLength={10}
                        placeholderTextColor="#888"
                    />
                </View>
                <View style={[styles.inputContainer, !isPhoneNumberEntered && styles.disabledInputContainer]}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter verification code"
                        value={token}
                        onChangeText={setToken}
                        keyboardType="numeric"
                        maxLength={6}
                        placeholderTextColor="#888"
                        editable={isPhoneNumberEntered}
                    />
                </View>
                <Text style={styles.countryCode}>Code: 123456</Text>
                <TouchableOpacity
                    style={[styles.button, !isPhoneNumberEntered && styles.disabledButton]}
                    onPress={handleLogin}
                    disabled={!isPhoneNumberEntered}
                >
                    <Text style={styles.buttonText}>Verify</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={showHelpAlert}>
                    <Text style={styles.helpText}>Having trouble logging in? <Text style={styles.helpLink}>Get Help</Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A0E21',
        paddingHorizontal: wp('5%'),
        paddingVertical: hp('5%'),
    },
    header: {
        // Optional header styles
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: wp('6%'),
        color: '#fff',
        marginBottom: hp('3%'),
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp('2%'),
        borderBottomWidth: 1,
        borderBottomColor: '#888',
    },
    disabledInputContainer: {
        borderBottomColor: '#555',
    },
    countryCode: {
        color: '#fff',
        fontSize: wp('5%'),
        marginRight: wp('2%'),
    },
    input: {
        flex: 1,
        color: '#fff',
        fontSize: wp('5%'),
    },
    button: {
        width: wp('35%'),
        height: wp('15%'),
        borderRadius: wp('7.5%'),
        backgroundColor: '#007aff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('2%'),
    },
    disabledButton: {
        backgroundColor: '#555',
    },
    buttonText: {
        color: '#fff',
        fontSize: wp('6%'),
    },
    helpText: {
        color: '#888',
        marginTop: hp('2%'),
    },
    helpLink: {
        color: '#007aff',
    },
});


// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, StatusBar } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const LoginScreen = () => {
//     const navigation = useNavigation();
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [token, setToken] = useState('');

//     const staticToken = '123456'; // Replace with your static token

//     const handleLogin = async () => {
//         if (token === staticToken) {
//             await AsyncStorage.setItem('verifiedToken', token);
//             navigation.replace('Home'); // Replace with the name of your home screen
//         } else {
//             Alert.alert('Error', 'Invalid token. Please try again.');
//         }
//     };

//     const isPhoneNumberEntered = phoneNumber.length === 10;

//     const showHelpAlert = () => {
//         Alert.alert('सहायता', 'कृपया अपना मोबाइल नंबर दर्ज करें। संदेश प्राप्त करने के बाद, एक बार का पासवर्ड (OTP) दर्ज करें। फिर Verify बटन पर क्लिक करें। उसके बाद, आप अपना डैशबोर्ड देख सकते हैं।');
//     };

//     return (
//         <View style={styles.container}>
//             <StatusBar barStyle='light-content' />
//             <View style={styles.header}>
//                 {/* Add any header content if needed */}
//             </View>
//             <View style={styles.content}>
//                 <Text style={styles.title}>लॉग इन करें</Text>
//                 <View style={styles.inputContainer}>
//                     <Text style={styles.countryCode}>+91</Text>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="मोबाइल नंबर"
//                         value={phoneNumber}
//                         onChangeText={setPhoneNumber}
//                         keyboardType="phone-pad"
//                         maxLength={10}
//                         placeholderTextColor="#888"
//                     />
//                 </View>
//                 <View style={[styles.inputContainer, !isPhoneNumberEntered && styles.disabledInputContainer]}>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="वेरीफिकेशन कोड दर्ज करें"
//                         value={token}
//                         onChangeText={setToken}
//                         keyboardType="numeric"
//                         maxLength={6}
//                         placeholderTextColor="#888"
//                         editable={isPhoneNumberEntered}
//                     />
//                 </View>
//                 <Text style={styles.countryCode}>कोड: 123456</Text>
//                 <TouchableOpacity
//                     style={[styles.button, !isPhoneNumberEntered && styles.disabledButton]}
//                     onPress={handleLogin}
//                     disabled={!isPhoneNumberEntered}
//                 >
//                     <Text style={styles.buttonText}>वेरीफाई करें</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={showHelpAlert}>
//                     <Text style={styles.helpText}>लॉग इन करने में परेशानी हो रही है? <Text style={styles.helpLink}>सहायता प्राप्त करें</Text></Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#0A0E21',
//         paddingHorizontal: wp('5%'),
//         paddingVertical: hp('5%'),
//     },
//     header: {
//         // Optional header styles
//     },
//     content: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     title: {
//         fontSize: wp('6%'),
//         color: '#fff',
//         marginBottom: hp('3%'),
//     },
//     inputContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: hp('2%'),
//         borderBottomWidth: 1,
//         borderBottomColor: '#888',
//     },
//     disabledInputContainer: {
//         borderBottomColor: '#555',
//     },
//     countryCode: {
//         color: '#fff',
//         fontSize: wp('5%'),
//         marginRight: wp('2%'),
//     },
//     input: {
//         flex: 1,
//         color: '#fff',
//         fontSize: wp('5%'),
//     },
//     button: {
//         width: wp('35%'),
//         height: wp('15%'),
//         borderRadius: wp('7.5%'),
//         backgroundColor: '#007aff',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: hp('2%'),
//     },
//     disabledButton: {
//         backgroundColor: '#555',
//     },
//     buttonText: {
//         color: '#fff',
//         fontSize: wp('6%'),
//     },
//     helpText: {
//         color: '#888',
//         marginTop: hp('2%'),
//     },
//     helpLink: {
//         color: '#007aff',
//     },
// });

