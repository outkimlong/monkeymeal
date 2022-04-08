import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View, Text, TouchableOpacity, TextInput, ScrollView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icons from 'react-native-vector-icons/AntDesign';
    const ItemDetails = ({ route, navigation }) => {
        const header = route.params.item;
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar animated={true} backgroundColor="#FFFFFF" barStyle={'dark-content'} showHideTransition={'slide'} />
                <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingTop: 10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name='chevron-left' size={40} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: '600',  color: '#000000', marginStart: 10, marginTop: 3 }}>{header}</Text>
                </View>
                <View style={styles.search}>
                    <Icon name='search' size={30} />
                    <TextInput style={{ flex: 1, fontSize: 15, padding: 5 }} placeholder="Search food"/>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.boxImage}>
                        <ImageBackground source={{ uri: "https://images.deliveryhero.io/image/fd-kh/LH/xlz1-listing.jpg?width=400&height=292|https://images.deliveryhero.io/image/fd-kh/LH/xlz1-listing.jpg?width=800&height=584" }} 
                            resizeMode='cover' style={{ flex: 1, justifyContent: "center" }}> 
                            <View style={{ justifyContent:  'flex-end',  flexDirection: 'column', flex: 1 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FFFFFF', marginHorizontal: 20, }}>French Apple Pie</Text>
                                <View style={{ flexDirection: 'row', marginHorizontal: 20, marginVertical: 10 }}>
                                    <Icons name='star' color="#FC6011" size={14} />
                                    <Text style={{ color: '#FC6011', fontWeight: '700'}}> 8.2</Text>
                                    <Text style={{ fontSize: 12, color: '#FFFFFF', fontWeight: '700' }}> (124 ratings) Café    Western Food</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>

                    <View style={styles.boxImage}>
                        <ImageBackground source={{ uri: "https://images.deliveryhero.io/image/fd-kh/LH/dcua-listing.jpg?width=400&height=292|https://images.deliveryhero.io/image/fd-kh/LH/dcua-listing.jpg?width=800&height=584" }} 
                            resizeMode='cover' style={{ flex: 1, justifyContent: "center" }}> 
                            <View style={{ justifyContent:  'flex-end',  flexDirection: 'column', flex: 1 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FFFFFF', marginHorizontal: 20, }}>French Apple Pie</Text>
                                <View style={{ flexDirection: 'row', marginHorizontal: 20, marginVertical: 10 }}>
                                    <Icons name='star' color="#FC6011" size={14} />
                                    <Text style={{ color: '#FC6011', fontWeight: '700'}}> 8.2</Text>
                                    <Text style={{ fontSize: 12, color: '#FFFFFF', fontWeight: '700' }}> (124 ratings) Café    Western Food</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>

                    <View style={styles.boxImage}>
                        <ImageBackground source={{ uri: "https://images.deliveryhero.io/image/fd-kh/LH/u7yi-listing.jpg?width=400&height=292|https://images.deliveryhero.io/image/fd-kh/LH/u7yi-listing.jpg?width=800&height=584" }} 
                            resizeMode='cover' style={{ flex: 1, justifyContent: "center" }}> 
                            <View style={{ justifyContent:  'flex-end',  flexDirection: 'column', flex: 1 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FFFFFF', marginHorizontal: 20, }}>French Apple Pie</Text>
                                <View style={{ flexDirection: 'row', marginHorizontal: 20, marginVertical: 10 }}>
                                    <Icons name='star' color="#FC6011" size={14} />
                                    <Text style={{ color: '#FC6011', fontWeight: '700'}}> 8.2</Text>
                                    <Text style={{ fontSize: 12, color: '#FFFFFF', fontWeight: '700' }}> (124 ratings) Café    Western Food</Text>
                                </View>
                            </View>
                        </ImageBackground>
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
        search: {
            backgroundColor: '#F2F2F2',
            flexDirection: 'row', 
            alignItems: 'center', 
            marginHorizontal: 10, 
            borderRadius: 25,
            padding: 10,
            marginTop: 20,
            marginBottom: 10
        },
        boxImage: {
            height: 250,
            backgroundColor: 'green',
            marginTop: 8,
        }
    });
    export { ItemDetails }