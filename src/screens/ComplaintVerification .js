import React, { useState, useRef } from 'react';
import { View, StatusBar, Text, TouchableOpacity, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ComplaintVerification = () => {
    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [otpGenerated, setOtpGenerated] = useState(false);
    const refs = useRef([...Array(10)].map(() => React.createRef()));

    const handleGenerateOtp = () => {
        const generatedOtp = '123456';
        setOtp(generatedOtp);
        setOtpGenerated(true);
    };

    const handleVerifyOtp = () => {
        if (otp === '123456') {
            navigation.navigate('NextScreen');
        } else {
            Alert.alert('Invalid OTP', 'Please enter the correct OTP.');
        }
    };

    // Function to handle phone number input change
    const handlePhoneNumberChange = (text, index) => {
        // Check if the input contains only digits and has exactly 10 digits
        if (/^\d{0,1}$/.test(text) && phoneNumber.length < 10) {
            setPhoneNumber((prevPhoneNumber) => prevPhoneNumber.substring(0, index) + text + prevPhoneNumber.substring(index + 1));
        }
        // Move focus to the next input if a digit is entered
        if (text !== '' && index < 9) {
            refs.current[index + 1]?.focus();
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>User Verification</Text>
            <View style={styles.phoneNumberContainer}>
                {Array.from({ length: 10 }, (_, index) => (
                    <TextInput
                        key={index}
                        style={styles.phoneNumberInput}
                        keyboardType="phone-pad"
                        maxLength={1}
                        onChangeText={(text) => handlePhoneNumberChange(text, index)}
                        value={phoneNumber[index] || ''}
                        ref={(input) => (refs.current[index] = input)}
                    />
                ))}
            </View>
            <TouchableOpacity style={styles.button} onPress={handleGenerateOtp}>
                <Text style={styles.buttonText}>Generate OTP</Text>
            </TouchableOpacity>
            {otpGenerated && (
                <>
                    <TextInput
                        style={styles.input}
                        placeholder="OTP"
                        keyboardType="numeric"
                        onChangeText={setOtp}
                        value={otp}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
                        <Text style={styles.buttonText}>Verify OTP</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};

export default ComplaintVerification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f8f8', // Background color
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333', // Text color
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fff', // Input background color
    },
    button: {
        backgroundColor: '#007aff', // Button background color
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff', // Button text color
        fontSize: 16,
        fontWeight: 'bold',
    },
    phoneNumberContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 20,
    },
    phoneNumberInput: {
        width: '8%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        textAlign: 'center',
        backgroundColor: '#fff',
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 100,
        backgroundColor: '#007aff', // Header background color
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    backText: {
        color: '#000', // Text color
        fontSize: 16,
        marginTop:50
    },
});