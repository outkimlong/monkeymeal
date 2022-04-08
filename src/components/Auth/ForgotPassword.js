import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
    const ForgotPassword = ({ navigation }) => {
        return( 
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={{ marginHorizontal: 20}}>
                        <Text style={{ fontSize: 25, textAlign: 'center', lineHeight: 33, bottom: 10, }}>New Password</Text>
                        <Text style={{ fontSize: 14, textAlign: 'center', lineHeight: 21 }}>Please enter your email to receive a link to  create a new password via email</Text>
                    </View>
                </View>
                <View style={styles.formControl}>
                    <View style={{ alignItems: 'center' }}>
                        <TextInput placeholder="New Password" style={styles.textInput} />
                        <TextInput placeholder="Confirm Password" style={styles.textInput} />
                        <TouchableOpacity onPress={() => alert('Hello World')}>
                            <View style={{ padding: 8, width: 320, borderRadius: 28, backgroundColor: '#FC6011', marginTop: 20, alignItems: 'center' }}>
                                <Text style={{ color: '#FFFFFF', padding: 10, fontSize: 16 }}>Next</Text>
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
            marginTop: 20,
        },
    });
export { ForgotPassword };