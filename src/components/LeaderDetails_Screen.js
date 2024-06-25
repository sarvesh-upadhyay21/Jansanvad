import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const LeaderDetailsScreen = ({ route }) => {
    const { imageUrl, name, designation, state, details, imageIndex, date } = route.params;
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={imageUrl} style={styles.image} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.designation}>{designation}</Text>
            <Text style={styles.state}>{state}</Text>
            <Text style={styles.details}>{details}</Text>
            <Text style={styles.info}>Image Index: {imageIndex}</Text>
            <Text style={styles.info}>Date: {date}</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    designation: {
        fontSize: 18,
        marginBottom: 10,
    },
    state: {
        fontSize: 16,
        marginBottom: 10,
    },
    details: {
        fontSize: 14,
        marginBottom: 10,
    },
    info: {
        fontSize: 12,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LeaderDetailsScreen;