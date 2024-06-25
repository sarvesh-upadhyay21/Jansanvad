import React from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { dummyData } from '../constants';

const Search = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar barStyle='dark-content' translucent={true} />
            <View style={{ flex: 1, flexDirection: 'column' }} >
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                        <Text style={styles.backText}>Back</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Leader Details</Text>
                </View>

                <View style={styles.searchBar}>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder='Search..' placeholderTextColor="#999" />
                    </View>
                </View>

                <View style={styles.listContainer}>
                    <FlatList
                        keyExtractor={(item) => item.id}
                        data={dummyData.coins}
                        renderItem={({ item }) => (
                            <View style={styles.itemContainer}>
                                <Image style={styles.avatar} resizeMode="cover" source={item.image} />
                                <View style={styles.textContainer}>
                                    <Text style={styles.nameText}>Er. Deepak kumar</Text>
                                    <Text style={styles.detailsText}>Software Developer NIC HQ</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'center'
    },
    backText: {
        marginLeft: 10,
        fontSize: 16,
        color: '#007bff'
    },
    headerText: {
        flex: 1,
        textAlign: 'center',
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        color: '#333'
    },
    searchBar: {
        flex: 0.5,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        paddingHorizontal: '2%'
    },
    inputContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 20,
        height: 50,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 20
    },
    input: {
        flex: 1,
        color: '#333',
        fontSize: 16
    },
    listContainer: {
        flex: 4,
        backgroundColor: '#fff',
        paddingHorizontal: '2%'
    },
    itemContainer: {
        flexDirection: 'row',
        height: hp('12%'),
        width: '100%',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 15,
        justifyContent: 'space-between',
        paddingRight: 10,
        marginBottom: 15
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 25,
        margin: 20
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginRight: 10
    },
    nameText: {
        fontFamily: 'Roboto-Medium',
        color: '#333',
        fontSize: 18
    },
    detailsText: {
        color: '#777',
        fontSize: 14
    }
});

export default Search;
