import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

const New_Registration = ({ navigation }) => {
    const [formFields, setFormFields] = useState({
        username: '',
        dob: '',
        mobile: '',
        email: '',
        address: '',
        password: '',
    });
    const [isFormValid, setIsFormValid] = useState(false);

    const handleRegistration = () => {
        // Handle registration logic
        console.log('Registering...');
    };

    // Validation function to check if all fields are filled
    const validateForm = () => {
        setIsFormValid(Object.values(formFields).every(value => value.trim() !== ''));
    };

    // Function to handle changes in form fields
    const handleInputChange = (value, field) => {
        setFormFields({ ...formFields, [field]: value });
        // Validate form after each input change
        validateForm();
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.backButton}>Back</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>New Registration</Text>
            </View>

            <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputLabel}>Username</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your username"
                        value={formFields.username}
                        onChangeText={(value) => handleInputChange(value, 'username')}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputLabel}>Date of Birth</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your date of birth"
                        value={formFields.dob}
                        onChangeText={(value) => handleInputChange(value, 'dob')}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputLabel}>Mobile</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your mobile number"
                        value={formFields.mobile}
                        onChangeText={(value) => handleInputChange(value, 'mobile')}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email"
                        value={formFields.email}
                        onChangeText={(value) => handleInputChange(value, 'email')}
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputLabel}>Address</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your address"
                        value={formFields.address}
                        onChangeText={(value) => handleInputChange(value, 'address')}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        value={formFields.password}
                        onChangeText={(value) => handleInputChange(value, 'password')}
                        secureTextEntry
                    />
                </View>
                <Button title="Register" onPress={handleRegistration} disabled={!isFormValid} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    inputContainer: {
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#4cc1e1',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    backButton: {
        color: 'white',
    },
    inputWrapper: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        backgroundColor: '#f9f9f9',
    },
});

export default New_Registration;
