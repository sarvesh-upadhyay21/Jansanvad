import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

const ImageDetailScreen = ({ route }) => {
    const { imageIndex, date } = route.params;
    const imageUrl = '../assets/images/cm_images/sarvesh.jpg'; // Example image URL

    return (
        <View style={styles.container}>
            <Image source={require(imageUrl)} style={styles.image} resizeMode="contain" />
            <Text style={styles.dateText}>{date}</Text>
        </View>
    );
};

export default ImageDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    dateText: {
        color: '#fff',
        fontSize: 16,
        marginTop: 10,
    },
});