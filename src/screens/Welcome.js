import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Welcome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
            <LinearGradient start={{ x: 0.0, y: 0.4 }} end={{ x: 0.5, y: 1.0 }} location={[0, 1]} colors={['#fff', '#fff']} style={styles.gradient}>
                <View style={styles.imageContainer}>
                    <Image resizeMode='contain' style={styles.image} source={require('../assets/images/Image-1.jpeg')} />
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.textBox}>
                        <Text style={styles.title}>Welcome to Jansanvad</Text>
                        <Text style={styles.subtitle}>Engage in Meaningful Public Discourse with Us</Text>
                        <Text style={styles.description}>This app is Powered by "Digimarps" a leading Digital Marketing Company</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
                            <Text style={styles.buttonText}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    gradient: {
        flex: 1,
    },
    imageContainer: {
        flex: 2.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    image: {
        width: wp('100%'),
        height: hp('60%'),
    },
    textContainer: {
        flex: 2,
        justifyContent: 'center',
        paddingHorizontal: wp('5%'),
    },
    textBox: {
        position: 'relative',
        flexDirection: 'column',
        backgroundColor: 'rgba(255,255,255,0.8)',
        height: hp('35%'),
        borderRadius: 15,
        paddingTop: 20,
        paddingHorizontal: wp('5%'),
    },
    title: {
        fontFamily: 'Roboto-Black',
        fontSize: 25,
        color: '#000',
        alignSelf: 'center',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 13,
        fontFamily: 'Roboto-Regular',
        alignSelf: 'center',
        paddingTop: 20,
        color: '#000',
        textAlign: 'center',
    },
    description: {
        fontSize: 15,
        fontFamily: 'Roboto-Regular',
        alignSelf: 'center',
        paddingTop: 20,
        color: '#000',
        textAlign: 'center',
    },
    button: {
        position: 'relative',
        width: '100%',
        backgroundColor: '#2284c4',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    buttonText: {
        fontFamily: 'Roboto-Bold',
        fontSize: 15,
        color: '#fff',
    },
});
