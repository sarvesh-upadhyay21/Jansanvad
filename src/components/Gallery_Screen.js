import React from 'react';
import { ScrollView, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GalleryScreen = () => {
    const navigation = useNavigation();

    // Define the number of static images you want to display
    const numberOfImages = 20;

    // Array of dates corresponding to each image (for demonstration)
    const imageDates = [
        '2024-05-01',
        '2024-05-02',
        '2024-05-02',
        '2024-05-02',
        '2024-05-02',
        '2024-05-02',
        '2024-05-02',
        '2024-05-02',
        '2024-05-02',
        '2024-05-02',
        '2024-05-02',
        '2024-05-02',
        '2024-05-02',
        '2024-05-02',
        '2024-05-02',
        '2024-05-02',
        '2024-05-02',
        '2024-05-02',
        '2024-05-02',
        '2024-05-02',
        '2024-05-02',
        '2024-05-02',
        '2024-05-02',
        '2024-05-02',
        // Add more dates here corresponding to each image
    ];

    // Function to render each static image item
    const renderStaticImageItem = (index) => (
        <TouchableOpacity key={index} style={styles.imageContainer} onPress={() => navigateToImageDetail(index)}>
            <Image source={require('../assets/images/cm_images/sarvesh.jpg')} resizeMode='cover' style={styles.image} />
            <Text style={styles.dateLabel}>{imageDates[index]}</Text>
        </TouchableOpacity>
    );

    const navigateToImageDetail = (imageIndex, date) => {
        navigation.navigate('ImageDetail', { imageIndex, date });
    }
    

    return (
        <View style={styles.container}>           
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.imageList}>
                    {/* Render multiple static images */}
                    {Array.from({ length: numberOfImages }, (_, index) => renderStaticImageItem(index))}
                </View>
            </ScrollView>
        </View >
    );
};

export default GalleryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    scrollViewContent: {
        flexGrow: 1,
        alignItems: 'center',
        paddingBottom: 10,
    },
    imageList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 15,
    },
    imageContainer: {
        margin: 5,
        padding: 5,
        marginTop: 10,
        alignItems: 'center', // Center the date label horizontally
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    dateLabel: {
        marginTop: 5,
        fontSize: 12,
        color: '#555',
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
});