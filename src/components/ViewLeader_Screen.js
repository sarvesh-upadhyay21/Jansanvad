// ViewLeaderScreen.js
import React, { useState } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomHeader from '../header/CustomHeader';
import HeaderProfile from '../header/Header_Screen';

const leaderData = [
    { id: 1, imageUrl: require('../assets/images/cm_images/billgates.png'), name: 'Bill Gates', designation: 'Co-founder of Microsoft', state: 'Seattle', details: 'Co-chair of the Bill & Melinda Gates Foundation' },
    { id: 3, imageUrl: require('../assets/images/cm_images/deepak.jpg'), name: 'Deepak Singh', designation: 'Software Developer', state: 'Delhi', details: 'New Delhi india' },
    { id: 2, imageUrl: require('../assets/images/cm_images/sarvesh.jpg'), name: 'Sarvesh Upadhyay', designation: 'Software Developer', state: 'Prayagraj', details: 'Prayagraj utter pradesh india' },
];

const ViewLeaderScreen = () => {
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
            {/* <CustomHeader title="Leaders" /> */}
            {/* <HeaderProfile title="Leaders" /> */}
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
        flexDirection: 'row',
        width: '100%',
        height: 120,
    },
    profileImage: {
        width: 100,
        height: 120,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    cardContent: {
        padding: 10,
        justifyContent: 'center',
        width: '70%',
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
