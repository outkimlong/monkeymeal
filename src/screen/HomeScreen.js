import React, {useContext, useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, StatusBar, View, Text, TouchableOpacity, TextInput, Image, Dimensions, Platform } from 'react-native';
import { AuthContext } from '../navigators/AuthProvider';
import Icon from 'react-native-vector-icons/EvilIcons';
import moment from 'moment';
import { Popular } from '../components/Home/index'

const HomeScreen = () =>  {
    const { user } = useContext(AuthContext);
    const [greeting, setGreeting] = useState();
    useEffect(() => {
        greetingText();
    },[])
    greetingText = () => {
        const now = moment()
        const currentHour = now.hour();
        if (currentHour >= 3 && currentHour < 12) return setGreeting("Good Morning");
        else if (currentHour >= 12 && currentHour < 15) return setGreeting("Good Afternoon");
        else return setGreeting("Good Evening");
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true} backgroundColor="#FFFFFF" barStyle={'dark-content'} showHideTransition={'slide'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, paddingTop: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 10, color: '#000000' }}>{greeting} </Text>
                    <TouchableOpacity onPress={() => alert("shoppingcart")}>
                        <Icon name='cart' size={30} />
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 15, marginStart: 10, paddingBottom: 20 }}>{user.email} !</Text>
                <View style={{ flex: 1 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ color: '#B6B7B7', fontSize: 11 }}>Delivering to</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: '500', marginEnd: 10, color: 'black' }}>Current Location</Text>
                            <Icon name='chevron-down' color="#FC6011" style={{ bottom: 2 }} size={30}/>
                        </View>
                    </View>
                    <View style={{ 
                        backgroundColor: '#F2F2F2',
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        marginHorizontal: 10, 
                        borderRadius: 25,
                        padding: 10,
                        marginTop: 20
                    }}>
                        <Icon name='search' size={30} />
                        <TextInput style={{ flex: 1, fontSize: 15, padding: 5 }} placeholder="Search food"/>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <ScrollView horizontal={true} contentContainerStyle={{ flex: 1 }}>
                            <View style={{ margin: 8, width: 88, height: 113 }}>
                                <Image source={{ uri: 'https://images.deliveryhero.io/image/fd-kh/LH/wa30-listing.jpg' }} 
                                    style={{ width: 88, height: 88, borderRadius: 10 }} />
                                <Text style={{ top: 5, alignSelf: 'center', justifyContent: 'center', fontWeight: '600', fontSize: 14 }}>Offers</Text>
                            </View>
                            <View style={{ margin: 8, width: 88, height: 113 }}>
                                <Image source={{ uri: 'https://images.deliveryhero.io/image/fd-kh/LH/z8r6-listing.jpg' }} 
                                    style={{ width: 88, height: 88, borderRadius: 10 }} />
                                <Text style={{ top: 5, alignSelf: 'center', justifyContent: 'center', fontWeight: '600', fontSize: 14 }}>Sri Lankan</Text>
                            </View>
                            <View style={{ margin: 8, width: 88, height: 113 }}>
                                <Image source={{ uri: 'https://images.deliveryhero.io/image/fd-kh/LH/dcua-listing.jpg' }} 
                                    style={{ width: 88, height: 88, borderRadius: 10 }} />
                                <Text style={{ top: 5, alignSelf: 'center', justifyContent: 'center', fontWeight: '600', fontSize: 14 }}>Italian</Text>
                            </View>
                            <View style={{ margin: 8, width: 88, height: 113 }}>
                                <Image source={{ uri: 'https://images.deliveryhero.io/image/fd-kh/LH/k0r2-listing.jpg' }} 
                                    style={{ width: 88, height: 88, borderRadius: 10 }} />
                                <Text style={{ top: 5, alignSelf: 'center', justifyContent: 'center', fontWeight: '600', fontSize: 14 }}>Indian</Text>
                            </View>
                        </ScrollView>
                    </View>
                    <Popular />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
});
export { HomeScreen };