import React, { useState } from 'react';
import { View, StatusBar, Text, TouchableOpacity, StyleSheet, TextInput, Button, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ComplaintScreen = () => {
    const navigation = useNavigation();
    const [selectedState, setSelectedState] = useState('');
    const [selectedCM, setSelectedCM] = useState('');
    const [complaint, setComplaint] = useState('');
    const [isComplaintEnabled, setIsComplaintEnabled] = useState(false);

    const stateList = [
        'Andhra Pradesh',
        'Arunachal Pradesh',
        'Assam',
        'Bihar',
        'Chhattisgarh',
        'Goa',
        'Gujarat',
        'Haryana',
        'Himachal Pradesh',
        'Jharkhand',
        'Karnataka',
        'Kerala',
        'Madhya Pradesh',
        'Maharashtra',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Nagaland',
        'Odisha',
        'Punjab',
        'Rajasthan',
        'Sikkim',
        'Tamil Nadu',
        'Telangana',
        'Tripura',
        'Uttar Pradesh',
        'Uttarakhand',
        'West Bengal',
    ];

    const CMList = {
        'Andhra Pradesh': ['Y. S. Jagan Mohan Reddy'],
        'Arunachal Pradesh': ['Pema Khandu'],
        'Assam': ['Himanta Biswa Sarma'],
        'Bihar': ['Nitish Kumar'],
        'Chhattisgarh': ['Bhupesh Baghel'],
        'Goa': ['Pramod Sawant'],
        'Gujarat': ['Bhupendra Patel'],
        'Haryana': ['Manohar Lal Khattar'],
        'Himachal Pradesh': ['Sukhvinder Singh Sukhu'],
        'Jharkhand': ['Hemant Soren'],
        'Karnataka': ['Basavaraj Bommai'],
        'Kerala': ['Pinarayi Vijayan'],
        'Madhya Pradesh': ['Shivraj Singh Chouhan'],
        'Maharashtra': ['Eknath Shinde', 'Uddhav Thackeray', 'Devendra Fadnavis'],
        'Manipur': ['N. Biren Singh'],
        'Meghalaya': ['Conrad Sangma'],
        'Mizoram': ['Zoramthanga'],
        'Nagaland': ['Neiphiu Rio'],
        'Odisha': ['Naveen Patnaik'],
        'Punjab': ['Bhagwant Mann'],
        'Rajasthan': ['Ashok Gehlot'],
        'Sikkim': ['Prem Singh Tamang'],
        'Tamil Nadu': ['M. K. Stalin'],
        'Telangana': ['K. Chandrashekar Rao'],
        'Tripura': ['Manik Saha'],
        'Uttar Pradesh': ['Yogi Adityanath', 'Akhilesh Yadav', 'Mayawati'],
        'Uttarakhand': ['Pushkar Singh Dhami'],
        'West Bengal': ['Mamata Banerjee'],
    };

    const MAX_ITEMS_TO_SHOW = 5; // Adjust the number of items to show initially

    const handleStateChange = (value) => {
        setSelectedState(value);
        setSelectedCM('');
        setIsComplaintEnabled(false);
    };

    const handleCMChange = (value) => {
        setSelectedCM(value);
        setIsComplaintEnabled(!!value);
    };

    const handleComplaintSubmit = () => {
        if (!selectedState || !selectedCM || !complaint) {
            Alert.alert('Error', 'Please select a state, a CM, and provide a complaint.');
            return;
        }
        // Handle complaint submission
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select State:<Text style={styles.asterisk}>*</Text></Text>
            <Picker
                selectedValue={selectedState}
                onValueChange={(itemValue) => handleStateChange(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Select State" value="" />
                {stateList.map((state, index) => (
                    <Picker.Item key={index} label={state} value={state} />
                ))}
            </Picker>
            {selectedState ? (
                <>
                    <Text style={styles.title}>Select Leader:<Text style={styles.asterisk}>*</Text></Text>
                    <Picker
                        selectedValue={selectedCM}
                        onValueChange={(itemValue) => handleCMChange(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Select Leader" value="" />
                        {CMList[selectedState].length > MAX_ITEMS_TO_SHOW ? (
                            <ScrollView style={styles.scrollView} nestedScrollEnabled={true}>
                                {CMList[selectedState].map((cm, index) => (
                                    <Picker.Item key={index} label={cm} value={cm} />
                                ))}
                            </ScrollView>
                        ) : (
                            CMList[selectedState].map((cm, index) => (
                                <Picker.Item key={index} label={cm} value={cm} />
                            ))
                        )}
                    </Picker>
                </>
            ) : null}
            <Text style={styles.label}>Enter your complaint:<Text style={styles.asterisk}>*</Text></Text>
            <TextInput
                style={[styles.input, !isComplaintEnabled && styles.disabledInput]}
                placeholder="Type your complaint here"
                value={complaint}
                onChangeText={(text) => setComplaint(text)}
                editable={isComplaintEnabled}
                multiline={true}
                numberOfLines={4}
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
        backgroundColor: '#f8f8f8',
        paddingHorizontal: wp('5%'), // Responsive padding
    },
    title: {
        fontSize: wp('4%'), // Responsive font size
        fontWeight: 'bold',
        marginBottom: hp('2%'), // Responsive margin
        color: '#000',
        alignSelf: 'flex-start', // Align text to the left
    },
    input: {
        height: hp('15%'), // Responsive height
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: hp('2%'), // Responsive margin
        paddingHorizontal: wp('2%'), // Responsive padding
        backgroundColor: '#fff',
        color: '#000', // Text color
    },
    disabledInput: {
        backgroundColor: '#eee',
    },
    label: {
        fontSize: wp('4.5%'), // Responsive font size
        marginBottom: hp('1%'), // Responsive margin
        color: '#000',
        alignSelf: 'flex-start', // Align text to the left
    },
    asterisk: {
        color: 'red',
    },
    button: {
        backgroundColor: '#007aff',
        paddingVertical: hp('1.5%'), // Responsive padding
        paddingHorizontal: wp('5%'), // Responsive padding
        borderRadius: 5,
    },
    picker: {
        height: hp('6%'), // Responsive height
        width: '100%',
        marginBottom: hp('2%'), // Responsive margin
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        color: '#000', // Text color
    },
    scrollView: {
        maxHeight: hp('20%'), // Adjust height as needed
    },
});

