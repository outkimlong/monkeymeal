import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
    const PaymentScreen = ({ route, navigation }) => {
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
                <View style={{ flex: 1, marginTop: 40 }}>
                    <View style={{ margin: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Customize your payment method</Text>
                        <View style={{ borderWidth: .5, borderColor: '#D3D3D3', marginTop: 15 }}/>
                    </View>

                    <View style={{
                        backgroundColor: '#F7F7F7',
                        height: 200,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 7,
                        },
                        shadowOpacity: 0.40,
                        shadowRadius: 9.50,
                        elevation: 15,
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 30, marginTop: 20 }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Customize your payment method</Text>
                            <Icon name='check' size={30} color='#FC6011' />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 25, justifyContent: 'space-between', borderBottomWidth: .5, borderTopWidth: .5, padding: 15, borderColor: '#D3D3D3', }}>
                            <Image source={require('../../assets/logo/visa-mastercard.png')} 
                                resizeMode='contain'
                                style={{ width: 90, height: 40, left: 15 }}
                            />
                            <Text style={{ alignSelf: 'center', fontSize: 13 }}>**** ****</Text>
                            <Text style={{ alignSelf: 'center', fontSize: 13 }}>21889</Text>
                            <TouchableOpacity onPress={() => alert('Delete')}>
                                <View style={{ borderRadius: 30, borderColor: '#FC6011', borderWidth: .5, justifyContent: 'center', padding: 10, right: 15 }}>
                                    <Text style={{ fontSize: 11, alignSelf: 'center', color: '#FC6011' }}>Delete Card</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ padding: 20 }}>
                            <Text style={{ fontSize: 12, fontWeight: '700' }}>Other Methods</Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => alert('Add Another Credit/Debit Card')}>
                        <View style={{ 
                            padding: 15,
                            flexDirection: 'row',
                            alignItems: 'center',
                            alignSelf: 'center',
                            backgroundColor: '#FC6011',
                            borderRadius: 30,
                            marginTop: 50,
                        }}>
                            <Icon name='pencil' size={30} color='#FFFFFF'/>
                            <Text style={{ color: '#FFFFFF', fontSize: 15, marginStart: 15 }}>Add Another Credit/Debit Card</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    };
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#FFFFFF',
        },
    });
    export { PaymentScreen };