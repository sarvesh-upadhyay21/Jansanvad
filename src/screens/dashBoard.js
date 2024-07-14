import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ActionCenter } from '../components';
import { dummyData } from '../constants';

const Dashboard = () => {
    const navigation = useNavigation();
    const [isVerified, setIsVerified] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('verifiedToken');
            console.log('tokentoken==>', token)
            if (token === '123456') {
                setIsVerified(true);
            } else {
                navigation.replace('VerificationScreen');
            }
        };

        checkToken();
    }, []);

    const handleComplaintPress = () => {
        if (isVerified) {
            navigation.navigate('ComplaintScreen');
        } else {
            navigation.navigate('VerificationScreen');
        }
    };

    const handleSuggestionPress = () => {
        if (isVerified) {
            navigation.navigate('ComplaintScreen');
        } else {
            navigation.navigate('VerificationScreen');
        }
    };

    const handleInvitePress = () => {
        if (isVerified) {
            navigation.navigate('ComplaintScreen');
        } else {
            navigation.navigate('VerificationScreen');
        }
    };

    const handleViewLeaderPress = () => {
        if (isVerified) {
            navigation.navigate('ViewLeaderScreen');
        } else {
            navigation.navigate('VerificationScreen');
        }
    };

    const handleGalleryPress = () => {
        if (isVerified) {
            navigation.navigate('GalleryScreen');
        } else {
            navigation.navigate('VerificationScreen');
        }
    };

    const handleInfoPress = () => {
        if (isVerified) {
            navigation.navigate('MyInformationScreen');
        } else {
            navigation.navigate('VerificationScreen');
        }
    };

    // Get current date
    const currentDate = new Date().toLocaleDateString();

    const handleLogout = async () => {
        await AsyncStorage.removeItem('verifiedToken');
        setIsVerified(false);
        navigation.replace('VerificationScreen');
        // navigation.replace('Home');
    };


    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };
    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' translucent={true} backgroundColor='transparent' />
            <LinearGradient start={{ x: 0.0, y: 0.4 }} end={{ x: 0.5, y: 1.0 }} location={[0, 1]} colors={['#2D97DA', '#2249D6']} style={styles.header}>
                <View style={styles.headerContent}>
                    <View style={styles.headerRow}>
                        <View style={styles.headerTextContainer}>
                            <Text style={styles.welcomeText}>Welcome to</Text>
                            <Text style={styles.appName}>Jansanvad</Text>
                        </View>
                        {/* <View style={styles.flagContainer}>
                            <Image source={require('../assets/images/India.png')} resizeMode='cover' style={styles.flag} />
                        </View> */}

                        <View style={styles.flagContainer}>
                            <TouchableOpacity onPress={toggleDropdown}>
                                <Image source={require('../assets/images/India.png')} resizeMode='cover' style={styles.flag} />
                            </TouchableOpacity>
                            {isDropdownVisible && (
                                <TouchableOpacity onPress={handleLogout} style={styles.logoutContainer}>
                                    <Text style={styles.logoutText}>Logout</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                    <View style={styles.dateRow}>
                        <Text style={styles.dateText}>{currentDate}</Text>
                    </View>
                </View>
            </LinearGradient>
            <View style={styles.mainContent}>
                <View style={styles.actionCenterContainer}>
                    <View style={styles.actionCenterRow}>
                        <View style={styles.actionCenterItem}>
                            <ActionCenter
                                img_src={require('../assets/icons/complain.png')}
                                img_text="Complaint"
                                onPress={handleComplaintPress}
                                color="#2249DA"
                            />
                        </View>
                        <View style={styles.actionCenterItem}>
                            <ActionCenter img_src={require('../assets/icons/suggestions.png')} img_text="Suggestions" onPress={handleSuggestionPress} color="#2249DA" />
                        </View>
                        <View style={styles.actionCenterItem}>
                            <ActionCenter img_src={require('../assets/icons/invitation.png')} img_text="Invite" onPress={handleInvitePress} color="#2249DA" />
                        </View>
                        <View style={styles.actionCenterItem}>
                            <ActionCenter img_src={require('../assets/icons/leader.png')} img_text="View Leader" onPress={handleViewLeaderPress} color="#2249DA" />
                        </View>
                        <View style={styles.actionCenterItem}>
                            <ActionCenter img_src={require('../assets/icons/image-gallery.png')} img_text="Gallery" onPress={handleGalleryPress} color="#2249DA" />
                        </View>
                        <View style={styles.actionCenterItem}>
                            <ActionCenter img_src={require('../assets/icons/resume.png')} img_text="My Info" onPress={handleInfoPress} color="#2249DA" />
                        </View>
                    </View>

                </View>
                <View style={styles.eventsContainer}>
                    <View style={styles.eventsHeader}>
                        <Text style={styles.eventsTitle}>Events</Text>
                        <TouchableOpacity onPress={() => console.log('see all')}>
                            <Text style={styles.seeAllText}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        keyExtractor={(item) => item.id}
                        data={dummyData.eventsData}
                        renderItem={({ item }) => (
                            <View style={styles.eventItem}>
                                <Text style={styles.eventTitle}>{item.title}</Text>
                                <Text style={styles.eventDetails}>
                                    {item.news_details.length > 150
                                        ? item.news_details.slice(0, 150) + '...'
                                        : item.news_details}
                                </Text>
                                <View style={styles.eventFooter}>
                                    <Text style={styles.eventCategory}>Space</Text>
                                    <Text style={styles.eventTime}>3 hours ago</Text>
                                    <Image style={styles.eventAvatar} source={item.image} />
                                </View>
                            </View>
                        )}
                        horizontal={true}
                    />
                </View>


            </View>
        </View>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1.2,
        flexDirection: 'column',
    },
    headerContent: {
        flexDirection: 'column',
        marginTop: hp('10%'),
        paddingHorizontal: wp('5%'),
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    headerTextContainer: {
        flexDirection: 'column',
    },
    welcomeText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: '#fff',
    },
    appName: {
        fontFamily: 'Roboto-Medium',
        color: '#fff',
        fontSize: 22,
    },
    flagContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    flag: {
        width: wp('10%'),
        height: wp('10%'),
        borderRadius: wp('5%'),
        marginLeft: wp('4%'),
    },
    logoutContainer: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: wp('2%'),
        position: 'absolute',
        top: wp('14%'),
        alignItems: 'center',
    },
    logoutText: {
        fontSize: wp('4%'),
        color: '#333',
    },
    dropdownContainer: {
        marginTop: 10,
    },
    selectedText: {
        fontSize: 16,
        color: '#333',
    },
    placeholderText: {
        fontSize: 16,
        color: '#aaa',
    },
    dateRow: {
        flexDirection: 'row',
        marginTop: 25,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dateText: {
        color: '#fff',
        fontSize: 28,
        fontFamily: 'Roboto-Bold',
    },
    mainContent: {
        flex: 2.5,
    },
    actionCenterContainer: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        paddingHorizontal: wp('5%'),
    },
    actionCenterRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        height: hp('28%'), // adjusted height for two rows
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
        elevation: 10,
        shadowColor: '#000',
        shadowRadius: 10,
        marginTop: -25,
    },
    actionCenterItem: {
        width: '30%', // adjusted width to fit 3 items per row
        marginVertical: 10,
    },
    eventsContainer: {
        flexDirection: 'column',
    },
    eventsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginTop: 10,
        paddingHorizontal: 10,
        // marginBottom:20,
    },
    eventsTitle: {
        fontFamily: 'Roboto-Medium',
        color: '#333',
        fontSize: 22,
    },
    seeAllText: {
        fontFamily: 'Roboto-Medium',
        color: '#2249DA',
        fontSize: 20,
    },
    eventItem: {
        position: 'relative',
        flexDirection: 'column',
        height: hp('25%'),
        width: wp('70%'),
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        borderRadius: 15,
        marginRight: 10,
        marginTop: 10,
        padding: 10,
    },
    eventTitle: {
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        color: '#333',
    },
    eventDetails: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: '#666',
        marginTop: 5,
        marginBottom: 10,
    },
    eventFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    eventCategory: {
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        color: '#333',
    },
    eventTime: {
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        color: '#999',
    },
    eventAvatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
});
