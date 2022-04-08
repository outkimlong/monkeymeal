import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
    const OTPSend = ({ navigation }) => {
        return( 
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={{ fontSize: 30, bottom: 10 }}>Reset Password</Text>
                    <Text style={{ fontSize: 14, textAlign: 'center', lineHeight: 25 }}>Please enter your email to receive a link to  create a new password via email</Text>
                </View>
                <View style={styles.formControl}>
                    <View style={{ flex: .8, alignItems: 'center' }}>
                        <TextInput placeholder="Your Email" style={styles.textInput} />
                        <TouchableOpacity onPress={() => navigation.navigate('OTPVerifyScreen')}>
                            <View style={{ padding: 8, width: 320, borderRadius: 28, backgroundColor: '#FC6011', marginTop: 30, alignItems: 'center' }}>
                                <Text style={{ color: '#FFFFFF', padding: 10, fontSize: 16 }}>Send</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    };
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#FFFFFF',
        },
        header: {
            flex: .5,
            justifyContent: 'center',
            alignItems: 'center',
            top: 20,
            marginHorizontal: 30
        },
        formControl: {
            flex: 1,
            justifyContent: 'center',
        },
        textInput: {
            padding: 20,
            width: 320, 
            borderRadius: 28, 
            backgroundColor: '#F2F2F2', 
            marginTop: 20,
        },
    });
    export { OTPSend };