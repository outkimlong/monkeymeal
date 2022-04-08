import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
    const Item = () => {
        const navigation = useNavigation();
        return(
            <View style={styles.cardImages}>
                <View style={styles.cardItems}>
                    <View style={{ flex: 1,  flexDirection: 'row' }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Image source={{ uri: 'https://images.deliveryhero.io/image/fd-kh/LH/w11e-listing.jpg' }} 
                                style={{ width: 80, height: 80, borderRadius: 40 }} />
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('ItemDetails', { item: 'Food' })} style={{ flex: 1 }}>
                            <View style={styles.card}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 22, fontWeight: 'bold', lineHeight: 35 }}>Food</Text>
                                    <Text style={{ fontSize: 11, color: '#B6B7B7' }}>120 Items</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.cardItems}>
                    <View style={{ flex: 1,  flexDirection: 'row' }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Image source={{ uri: 'https://images.deliveryhero.io/image/fd-kh/LH/c7uu-listing.jpg' }} 
                                style={{ width: 80, height: 80, borderRadius: 40 }} />
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('ItemDetails', { item: 'Beverages' })} style={{ flex: 1 }}>
                            <View style={styles.card}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 22, fontWeight: 'bold', lineHeight: 35 }}>Beverages</Text>
                                    <Text style={{ fontSize: 11, color: '#B6B7B7' }}>220 Items</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.cardItems}>
                    <View style={{ flex: 1,  flexDirection: 'row' }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Image source={{ uri: 'https://images.deliveryhero.io/image/fd-kh/LH/dnwy-listing.jpg' }} 
                                style={{ width: 80, height: 80, borderRadius: 40 }} />
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('ItemDetails', { item: 'Desserts' })} style={{ flex: 1 }}>
                            <View style={styles.card}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 22, fontWeight: 'bold', lineHeight: 35 }}>Desserts</Text>
                                    <Text style={{ fontSize: 11, color: '#B6B7B7' }}>155 Items</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.cardItems}>
                    <View style={{ flex: 1,  flexDirection: 'row' }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Image source={{ uri: 'https://images.deliveryhero.io/image/fd-kh/LH/qfsc-listing.jpg' }} 
                                style={{ width: 80, height: 80, borderRadius: 40 }} />
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('ItemDetails', { item: 'Promotions' })} style={{ flex: 1 }}>
                            <View style={styles.card}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 22, fontWeight: 'bold', lineHeight: 35 }}>Promotions</Text>
                                    <Text style={{ fontSize: 11, color: '#B6B7B7' }}>25 Items</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    const styles = StyleSheet.create({
        cardImages: {
            width: 100,
            height: 485,
            borderTopEndRadius: 39,
            borderBottomEndRadius: 38,
            backgroundColor: "#FC6011",
        },
        cardItems: {
            width: 360, 
            height: 87,
            marginTop: 28,
            marginLeft: 10,
        },
        card: {
            flex: 1,
            backgroundColor: '#F2F2F2', 
            borderTopStartRadius: 40,
            borderBottomStartRadius: 40,
            marginStart: 15,
        }
    });
    export { Item }