import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { AuthContext } from '../../navigators/AuthProvider';

    const SignUp = ({ navigation }) => {
        const { register } = useContext(AuthContext);
        const [parames, setParames] = useState({
            email: null,
            password: null,
            confirm_password: null,
        });

        return( 
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container} >
                <ScrollView contentContainerStyle={{ flex: 1 }} bounces={false}>
                    <View style={styles.formControl}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', bottom: 30 }}>
                            <Text style={{ fontSize: 30, bottom: 20, fontWeight: '700' }}>Sign Up</Text>
                            <Text style={{ fontSize: 14 }}>Add your details to sign up</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TextInput placeholder="Email" style={styles.textInput} 
                                value={parames.email}
                                keyboardType='email-address' 
                                autoCapitalize='none' 
                                autoCorrect={false}
                                onChangeText={(email) => setParames({ ...parames, email })}
                            />
                            <TextInput placeholder="Password" style={styles.textInput}
                                value={parames.password}
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={true}
                                onChangeText={(password) => setParames({ ...parames, password })}
                            />
                            <TextInput placeholder="Confirm Password" style={styles.textInput}
                                value={parames.confirm_password}
                                autoCapitalize='none'
                                autoCorrect={false} 
                                secureTextEntry={true} 
                                onChangeText={(confirm_password) => setParames({ ...parames, confirm_password })}
                            />
                            <TouchableOpacity onPress={() => register(parames.email, parames.password )}>
                                <View style={{ padding: 8, width: 320, borderRadius: 28, backgroundColor: '#FC6011', marginTop: 20, alignItems: 'center' }}>
                                    <Text style={{ color: '#FFFFFF', padding: 10, fontSize: 16, fontWeight: '700' }}>Sign Up</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                            <Text>Already have an Account? 
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <Text style={{ color: '#FC6011', fontSize: 14, fontWeight: 'bold', top: 2 }}> Sign In</Text>
                                </TouchableOpacity>
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    };
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        formControl: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
            marginTop: 20,
        },
        textInput: {
            padding: 20,
            width: 320, 
            borderRadius: 28, 
            backgroundColor: '#F2F2F2', 
            marginTop: 10,
        },
    });
    export { SignUp };