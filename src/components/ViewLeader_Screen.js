import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const leaderData = [
    { id: 1, imageUrl: require('../assets/images/India.png'), name: 'Leader 1', designation: 'CEO', state: 'California', details: 'Details for Leader 1...' },
    { id: 2, imageUrl: require('../assets/images/India.png'), name: 'Leader 2', designation: 'CTO', state: 'New York', details: 'Details for Leader 2...' },
    { id: 3, imageUrl: require('../assets/images/India.png'), name: 'Leader 3', designation: 'COO', state: 'Texas', details: 'Details for Leader 3...' },
];

const ViewLeaderScreen = () => {
    const navigation = useNavigation();
    const [selectedLeader, setSelectedLeader] = useState(null);

    const displayedLeaders = [];
    for (let i = 0; i < 20; i++) {
        displayedLeaders.push(...leaderData);
    }

    const handleLeaderPress = (leader) => {
        const { id, imageUrl, name, designation, state, details } = leader;
        const imageIndex = id;
        const date = new Date().toString();
        navigation.navigate('LeaderDetailsScreen', { imageUrl, name, designation, state, details, imageIndex, date });
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Leaders</Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.leadersContainer}>
                    {displayedLeaders.map((leader, index) => (
                        <TouchableOpacity key={index} style={styles.leaderItem} onPress={() => handleLeaderPress(leader)}>
                            <View style={styles.card}>
                                <Image source={leader.imageUrl} resizeMode='cover' style={styles.profileImage} />
                                <View style={styles.cardContent}>
                                    <Text style={styles.leaderName}>{leader.name}</Text>
                                    <Text style={styles.leaderDesignation}>{leader.designation}</Text>
                                    <Text style={styles.leaderState}>{leader.state}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            {selectedLeader && (
                <View style={styles.selectedLeaderContainer}>
                    <Text style={styles.selectedLeaderName}>{selectedLeader.name}</Text>
                    <Text style={styles.selectedLeaderDetails}>{selectedLeader.details}</Text>
                </View>
            )}
        </View>
    );
};

export default ViewLeaderScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    leadersContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    leaderItem: {
        alignItems: 'center',
        margin: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardContent: {
        padding: 10,
    },
    leaderName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    leaderDesignation: {
        fontSize: 16,
    },
    leaderState: {
        fontSize: 14,
        color: '#888',
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingBottom: 20, // Adjust as needed
    },
    selectedLeaderContainer: {
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    selectedLeaderName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    selectedLeaderDetails: {
        fontSize: 16,
    },
});