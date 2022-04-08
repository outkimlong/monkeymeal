import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
    const Popular = () => {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 1 }}>
                    <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, fontWeight: '300' }}>Popular Restaurents</Text>
                        <TouchableOpacity onPress={() => alert('View all')}>
                            <Text style={{ fontSize: 13, color: "#FC6011", marginTop: 5 }}>View all</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, marginBottom: 20 }}>
                        <Image source={{ uri: 'https://images.deliveryhero.io/image/fd-kh/LH/towh-listing.jpg' }} style={{ width: '100%', height: 200 }} />
                        <View style={{ padding: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 16, fontWeight: '500', bottom: 5, }}>Cafe Noir</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='star' color="#FC6011" size={14} />
                                <Text style={{ color: '#FC6011'}}> 8.2</Text>
                                <Text style={{ fontSize: 12 }}> (124 ratings) Café    Western Food</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1, marginBottom: 20 }}>
                        <Image source={{ uri: 'https://images.deliveryhero.io/image/fd-kh/LH/yarg-listing.jpg' }} style={{ width: '100%', height: 200 }} />
                        <View style={{ padding: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 16, fontWeight: '500', bottom: 5, }}>Cafe Noir</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='star' color="#FC6011" size={14} />
                                <Text style={{ color: '#FC6011'}}> 8.2</Text>
                                <Text style={{ fontSize: 12 }}> (124 ratings) Café    Western Food</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1, marginBottom: 20 }}>
                        <Image source={{ uri: 'https://images.deliveryhero.io/image/fd-kh/LH/dn76-listing.jpg' }} style={{ width: '100%', height: 200 }} />
                        <View style={{ padding: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 16, fontWeight: '500', bottom: 5, }}>Cafe Noir</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='star' color="#FC6011" size={14} />
                                <Text style={{ color: '#FC6011'}}> 8.2</Text>
                                <Text style={{ fontSize: 12 }}> (124 ratings) Café    Western Food</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                        <Text style={{ fontSize: 20, fontWeight: '300' }}>Most Popular</Text>
                        <TouchableOpacity onPress={() => alert('View all')}>
                            <Text style={{ fontSize: 13, color: "#FC6011", marginTop: 5 }}>View all</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true} style={{ flex: 1 }} showsHorizontalScrollIndicator={false}>
                        <View style={{ flexDirection: 'column', padding: 15 }}>
                            <Image source={{ uri: 'https://images.deliveryhero.io/image/fd-kh/LH/wrf3-listing.jpg' }} 
                                style={{ width: 228, height: 135, borderRadius: 10 }} />
                            <View style={{ padding: 10, marginTop: 5 }}>
                                <Text style={{ fontSize: 16, fontWeight: '500', bottom: 5, }}>Cafe Noir</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 12 }}>Café   Western Food </Text>
                                    <Icon name='star' color="#FC6011" size={14} /> 
                                    <Text style={{ color: '#FC6011'}}> 8.2</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column', padding: 15 }}>
                            <Image source={{ uri: 'https://images.deliveryhero.io/image/fd-kh/LH/iswa-listing.jpg' }} 
                                style={{ width: 228, height: 135, borderRadius: 10 }} />
                            <View style={{ padding: 10, marginTop: 5 }}>
                                <Text style={{ fontSize: 16, fontWeight: '500', bottom: 5, }}>Cafe Noir</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 12 }}>The Box Coffee Bar </Text>
                                    <Icon name='star' color="#FC6011" size={14} /> 
                                    <Text style={{ color: '#FC6011'}}> 8.2</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{ marginBottom: 100 }}>
                        <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                            <Text style={{ fontSize: 20, fontWeight: '300' }}>Recent Items</Text>
                            <TouchableOpacity onPress={() => alert('View all')}>
                                <Text style={{ fontSize: 13, color: "#FC6011", marginTop: 5 }}>View all</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', height: 80, margin: 10, padding: 5 }}>
                            <View style={{ justifyContent: 'center', marginEnd: 30 }}>
                                <Image source={{ uri: 'https://images.deliveryhero.io/image/fd-kh/LH/iswa-listing.jpg' }} 
                                    style={{ width: 75, height: 75, borderRadius: 10 }} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 18, fontWeight: '500', lineHeight: 30 }}>Mulberry Pizza by Josh</Text>
                                <Text style={{ fontSize: 12 }}>Café  Western Food</Text>
                                <Text style={{ color: '#FC6011', lineHeight: 30 }}><Icon name='star' color="#FC6011" size={14} />  8.2</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', height: 80, margin: 10, padding: 5 }}>
                            <View style={{ justifyContent: 'center', marginEnd: 30 }}>
                                <Image source={{ uri: 'https://images.deliveryhero.io/image/fd-kh/LH/iswa-listing.jpg' }} 
                                    style={{ width: 75, height: 75, borderRadius: 10 }} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 18, fontWeight: '500', lineHeight: 30 }}>Barita</Text>
                                <Text style={{ fontSize: 12 }}>Café  Western Food</Text>
                                <Text style={{ color: '#FC6011', lineHeight: 30 }}><Icon name='star' color="#FC6011" size={14} />  8.2</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', height: 80, margin: 10, padding: 5 }}>
                            <View style={{ justifyContent: 'center', marginEnd: 30 }}>
                                <Image source={{ uri: 'https://images.deliveryhero.io/image/fd-kh/LH/iswa-listing.jpg' }} 
                                    style={{ width: 75, height: 75, borderRadius: 10 }} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 18, fontWeight: '500', lineHeight: 30 }}>Pizza Rush Hour</Text>
                                <Text style={{ fontSize: 12 }}>Café  Western Food</Text>
                                <Text style={{ color: '#FC6011', lineHeight: 30 }}><Icon name='star' color="#FC6011" size={14} />  8.2</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#FFFFFF',
        },
    });
export { Popular }