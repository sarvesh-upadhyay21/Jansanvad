
import React, { useState } from 'react';
import { View, StatusBar, Text, TouchableOpacity, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker'; // Import Picker from @react-native-picker/picker

const ComplaintScreen = () => {
    const navigation = useNavigation();
    const [selectedCM, setSelectedCM] = useState('');
    const [complaint, setComplaint] = useState('');
    const [isComplaintEnabled, setIsComplaintEnabled] = useState(false);

    const CMList = [
        'Mr. Mulayam Singh Yadav',
        'Ms. Mayawati',
        'Mr. Kalyan Singh',
        'Shri Ram Prakash',
        'Shri Rajnath Singh',
        'Ms. Mayawati',
        'Mr. Mulayam Singh Yadav',
        'Ms. Mayawati',
        'Mr. Akhilesh Yadav',
        'Yogi Adityanath',
        'Yogi Adityanath'
    ];
    
    const handleCMChange = (value) => {
        setSelectedCM(value);
        setIsComplaintEnabled(!!value); // Enable complaint box if a CM is selected
    };

    const handleComplaintSubmit = () => {
        if (!selectedCM || !complaint) {
            Alert.alert('Error', 'Please select a CM and provide a complaint.');
            return;
        }
        // Handle complaint submission
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Select Leader:</Text>
            <Picker
                selectedValue={selectedCM}
                onValueChange={(itemValue, itemIndex) => handleCMChange(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Select Leader" value="" />
                {CMList.map((cm, index) => (
                    <Picker.Item key={index} label={cm} value={cm} />
                ))}
            </Picker>
            <Text style={styles.label}>Enter your complaint:</Text>
            <TextInput
                style={[styles.input, !isComplaintEnabled && styles.disabledInput]}
                placeholder="Type your complaint here"
                value={complaint}
                onChangeText={(text) => setComplaint(text)}
                editable={isComplaintEnabled}
                multiline={true}
                numberOfLines={4} // Adjust the number of lines to fit the content
            />
            <Button
                title="Submit Complaint"
                onPress={handleComplaintSubmit}
                disabled={!isComplaintEnabled}
            />
        </View>
    );
};

export default ComplaintScreen;

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
        height: 120,
        width: '80%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10, // Increased border radius
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fff', // Input background color
    },
    disabledInput: {
        backgroundColor: '#eee', // Disabled input background color
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333', // Text color
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
        marginTop: 50
    },
    picker: {
        height: 50,
        width: '80%',
        marginBottom: 20,
        backgroundColor: '#fff', // Picker background color
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
});
