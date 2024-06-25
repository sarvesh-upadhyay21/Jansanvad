import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, StatusBar, ScrollView, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ActionCenter } from '../components';
import { dummyData } from '../constants';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
    const navigation = useNavigation();

    const handleComplaintPress = () => {
        navigation.navigate('ComplaintScreen');
    };

    const handleSuggestionPress = () => {
        navigation.navigate('ComplaintScreen');
    };

    const handleInvitePress = () => {
        navigation.navigate('ComplaintScreen');
    };

    const handleViewLeaderPress = () => {
        navigation.navigate('ViewLeaderScreen');
    };

    const handleGalleryPress = () => {
        navigation.navigate('GalleryScreen');
    };

    const handleInfoPress = () => {
        navigation.navigate('MyInformationScreen');
    };

    // Get current date
    const currentDate = new Date().toLocaleDateString();

    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle='light-content' translucent={true} backgroundColor='transparent' />
            <LinearGradient start={{ x: 0.0, y: 0.4 }} end={{ x: 0.5, y: 1.0 }} location={[0, 1]} colors={['#2D97DA', '#2249D6']} style={{ flex: 1.2, flexDirection: 'column' }}>
                <View style={{ flexDirection: 'column', marginTop: hp('10%'), paddingHorizontal: '5%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 16, color: '#fff' }}>Welcome to</Text>
                            <Text style={{ fontFamily: 'Roboto-Medium', color: '#fff', fontSize: 22 }}>Jansanvad</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/images/India.png')} resizeMode='cover' style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 15 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 25, justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ color: '#fff', fontSize: 28, fontFamily: 'Roboto-Bold' }}>{currentDate}</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
            <View style={{ flex: 2.5 }}>
                <View style={{ flexDirection: 'column', backgroundColor: '#fff', paddingHorizontal: wp('5%') }}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#fff', height: hp('13%'), width: '100%', alignItems: 'center', justifyContent: 'space-around', borderRadius: 10, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', elevation: 10, shadowColor: '#000', shadowRadius: 10, marginTop: -25 }}>
                        <View style={{ width: '33%' }}>
                            <ActionCenter img_src={require('../assets/icons/complain.png')} img_text="Complaint" onPress={handleComplaintPress} />
                        </View>
                        <View style={{ width: '33%' }}>
                            <ActionCenter img_src={require('../assets/icons/suggestions.png')} img_text="Suggestions" onPress={handleSuggestionPress} />
                        </View>
                        <View style={{ width: '33%' }}>
                            <ActionCenter img_src={require('../assets/icons/invitation.png')} img_text="Invite" onPress={handleInvitePress} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: '#fff', height: hp('13%'), width: '100%', alignItems: 'center', justifyContent: 'space-around', borderRadius: 10, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', elevation: 10, shadowColor: '#000', shadowRadius: 10, marginTop: 10 }}>
                        <View style={{ width: '33%' }}>
                            <ActionCenter img_src={require('../assets/icons/leader.png')} img_text="View Leader" onPress={handleViewLeaderPress} />
                        </View>
                        <View style={{ width: '33%' }}>
                            <ActionCenter img_src={require('../assets/icons/image-gallery.png')} img_text="Gallery" onPress={handleGalleryPress} />
                        </View>
                        <View style={{ width: '33%' }}>
                            <ActionCenter img_src={require('../assets/icons/resume.png')} img_text="My Info" onPress={handleInfoPress} />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, paddingHorizontal: 10 }}>
                        <Text style={{ fontFamily: 'Roboto-Medium', color: '#333', fontSize: 22 }}>Events</Text>
                        <TouchableOpacity onPress={() => console.log('see all')}>
                            <Text style={{ fontFamily: 'Roboto-Medium', color: '#2249DA', fontSize: 20 }}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        keyExtractor={(item) => item.id}
                        data={dummyData.coins}
                        renderItem={({ item }) => (
                            <View style={{ position: 'relative', flexDirection: 'column', height: hp('30%'), width: wp('70%'), borderWidth: 1, borderColor: '#ddd', backgroundColor: '#fff', borderRadius: 15, marginRight: 10, marginTop: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingTop: 15 }}>
                                    <Image style={{ height: 25, width: 25 }} source={item.image} />
                                    <Text style={{ fontFamily: 'Roboto-Bold', color: '#333', fontSize: 18 }}> {item.currency}</Text>
                                    <Text style={{ marginHorizontal: 10, fontFamily: 'Roboto-Regular-Italic', fontSize: 14 }}>2 mins ago</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-around', alignItems: 'center', padding: 5 }}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={{ fontFamily: 'Roboto-Bold', color: '#333', fontSize: 20 }}>{item.amount}</Text>
                                    </View>
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

});