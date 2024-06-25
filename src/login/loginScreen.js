// import React, { useState } from 'react';
// import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
// import { LOGIN_SUCCESS_MESSAGE } from '../common/constant';

// const LoginScreen = ({ navigation }) => {
//     const [data, setData] = useState();
//     const [userName, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [userValidation, setUserValidation] = useState('')
//     const [passwordValidation, setPasswordValidation] = useState('')

//     const userLogin = async () => {
//         if (!userName) { setUserValidation(true) }
//         else { setUserValidation(false) }
//         if (!password) { setPasswordValidation(true) }
//         else { setPasswordValidation(false) }
//         if (!userName || !password) { return false }
//         try {
//             const responce = await fetch('http://timesheet.kasproit.com/api/AppAuth/Login', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ userName, password })
//             });
//             const data = await responce.json();
//             setData(data)

//             if (responce.status == 200) {
//                 await AsyncStorage.setItem('token', data.data.token);

//                 Alert.alert(data.message || { LOGIN_SUCCESS_MESSAGE })
//                 navigation.navigate("SideDrower");

//             } else {
//                 Alert.alert(responce.message || "Wrong Details!")
//             }
//         }
//         catch (err) {
//             console.log(err)

//         }
//     }

//     const handleRegistrationPress = () => {
//         navigation.navigate("New_Registration");
//     };

//     return (

//         <View style={styles.container}>
//             <View style={styles.welcomeContainer}>
//                 <Image source={require('../images/jansamvadLogo.png')}
//                     style={styles.logo}
//                 />

//             </View>
//             <View style={styles.inputContainer}>
//                 <View style={styles.inputBox}>
//                     <Text style={styles.inputLable}>Username</Text>
//                     <TextInput
//                         style={styles.loginTitle}
//                         placeholder='Username'
//                         value={userName}
//                         onChangeText={setUsername}
//                     />
//                     {userValidation ?
//                         <Text style={styles.errorValidation}>
//                             Email Address Is Required!
//                         </Text>
//                         : null}
//                     <Text style={styles.inputLable}>Password</Text>
//                     <TextInput
//                         style={styles.loginTitle}
//                         placeholder='password'
//                         value={password}
//                         onChangeText={setPassword}
//                         secureTextEntry
//                     />
//                     {passwordValidation ?
//                         <Text style={styles.errorValidation}>
//                             Password Is Required!
//                         </Text>
//                         : null}
//                 </View>
//                 <View style={styles.loginBtnContainer}>
//                     <Button
//                         color="#4cc1e1"
//                         title="Sign in"
//                         onPress={userLogin} />
//                 </View>
//                 <View style={styles.checkboxContainer}>
//                     <Text style={styles.label}>Remember Me</Text>
//                     <TouchableHighlight onPress={handleRegistrationPress} underlayColor="transparent" style={{ marginLeft: 10 }}>
//                         <Text style={{ color: 'blue', marginTop: 10 }}>New Registration</Text>
//                     </TouchableHighlight>
//                 </View>

//             </View>
//         </View>
//     )
// }

// export default LoginScreen

// const styles = StyleSheet.create({
//     container: {
//         flex: 0,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     inputLable: {
//         marginLeft: 12
//     },
//     welcomeContainer: {
//         backgroundColor: "#fff",
//         padding: 90,
//         backgroundColor: "#fff",
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     logo: {
//         width: 200, // Adjust the width as needed
//         height: 100, // Adjust the height as needed
//     },
//     accountTitle: {
//         fontWeight: "bold",
//         fontSize: 20,
//         color: "#000000",
//         margin: 20,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     loginTitle: {
//         height: 40,
//         margin: 12,
//         borderWidth: 1,
//         padding: 10,
//         color: "#000",
//         borderRadius: 5,
//         backgroundColor: "#fff",

//     },
//     loginBtnContainer: {
//         paddingHorizontal: 13,
//     },
//     inputContainer: {
//         width: '100%',
//         paddingHorizontal: 30,
//         // borderWidth: 1,
//         // borderColor: "gray",
//         padding: 20,
//         height: '64%',
//         backgroundColor: "#fff"
//     }, inputBox: {

//     },
//     checkbox: {
//         alignSelf: 'center',
//     },
//     checkboxContainer: {
//         flexDirection: 'row',
//         marginBottom: 20,
//     },
//     label: {
//         margin: 12,
//     },
//     errorValidation: {
//         margin: 0,
//         color: 'red',
//         marginLeft: 12,
//         marginTop: -5,
//         marginBottom: 10
//     }
// })