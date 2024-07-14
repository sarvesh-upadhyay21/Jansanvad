import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const imageUrl = '../assets/images/India.png';

const MyInformationScreen = () => {
    const navigation = useNavigation();

    const user = {
        profileImageUrl: imageUrl, 
        name: 'Sarvesh Upadhyay',
        phoneNumber: '91-8601027823',
        gender: 'Male',
        state: 'Uttar Pradesh',
        district: 'Prayagraj',
        block: 'Dhanupur',
        pincode: '221503',
        village: 'Sirsa'
    };
    

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image source={require('../assets/images/India.png')} resizeMode='cover' style={styles.profileImage} />
                <Text style={styles.name}>{user.name}</Text>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Phone Number:</Text>
                    <Text style={styles.info}>{user.phoneNumber}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Gender:</Text>
                    <Text style={styles.info}>{user.gender}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>State:</Text>
                    <Text style={styles.info}>{`${user.state}`}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>District:</Text>
                    <Text style={styles.info}>{` ${user.district}`}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Block:</Text>
                    <Text style={styles.info}>{` ${user.block}`}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Village:</Text>
                    <Text style={styles.info}>{user.village}</Text>
                </View>
               
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Pincode:</Text>
                    <Text style={styles.info}>{`${user.pincode}`}</Text>
                </View>
                {/* Add other information here */}
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
        borderBottomColor: '#ccc'
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
    },
    info: {
        fontSize: 16,
    },
    header: {
        height: 100,
        backgroundColor: '#007aff',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    backText: {
        color: '#fff',
        fontSize: 16,
        marginTop: 30,
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});