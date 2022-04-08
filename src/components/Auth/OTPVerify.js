import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
    const OTPVerify = ({ navigation }) => {
        return( 
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={{ marginHorizontal: 20}}>
                        <Text style={{ fontSize: 25, textAlign: 'center', lineHeight: 33, bottom: 10, }}>We have send an OTP to your Email</Text>
                        <Text style={{ fontSize: 14, textAlign: 'center', lineHeight: 21 }}>Please check your mobile number 071*****12  continue to reset your password</Text>
                    </View>
                </View>
                <View style={styles.formControl}>
                    <View style={{ alignItems: 'center' }}>
                        <TextInput placeholder="Your Email" style={styles.textInput} />
                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                            <View style={{ padding: 8, width: 320, borderRadius: 28, backgroundColor: '#FC6011', marginTop: 20, alignItems: 'center' }}>
                                <Text style={{ color: '#FFFFFF', padding: 10, fontSize: 16 }}>Next</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
                        <Text>Didn't Receive? 
                            <TouchableOpacity onPress={() => alert('try')}>
                                <Text style={{ color: '#FC6011', fontSize: 14, fontWeight: 'bold', top: 2 }}>   Click Here</Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    };
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#FFFFFF',
            justifyContent: 'center',
        },
        header: {
            flex: .5,
            justifyContent: 'center',
        },
        formControl: {
            flex: 1,
        },
        textInput: {
            padding: 20,
            width: 320, 
            borderRadius: 28, 
            backgroundColor: '#F2F2F2',
        },
    });
    export { OTPVerify };