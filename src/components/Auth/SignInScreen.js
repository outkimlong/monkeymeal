import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../../navigators/AuthProvider';

    const SignIn = ({ navigation }) => {
        const { login } = useContext(AuthContext);
        const [parames, setParames] = useState({
            email: null,
            password: null,
        });
        return( 
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container} >
                <ScrollView contentContainerStyle={{ flex: 1 }} bounces={false}>
                    <View style={styles.formControl}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                            <Text style={{ fontSize: 30, bottom: 20, fontWeight: '700' }}>Sign In</Text>
                            <Text style={{ fontSize: 14 }}>Add your details to sign in</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TextInput placeholder="Your Email" style={styles.textInput} 
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
                            <TouchableOpacity onPress={() => login(parames.email, parames.password)}>
                                <View style={{ padding: 8, width: 320, borderRadius: 28, backgroundColor: '#FC6011', marginTop: 10, alignItems: 'center' }}>
                                    <Text style={{ color: '#FFFFFF', padding: 10, fontSize: 16, fontWeight: '700' }}> Sign In </Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ margin: 20, top: 10 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('OTPSendScreen')}>
                                    <Text style={{ color: 'blue', fontWeight: '500' }}>Forgot your password?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.btnGroup}>
                            <Text style={{ color: 'black', marginTop: 15 }}>or Login With</Text>
                            <TouchableOpacity>
                                 <View style={styles.btnFb}>
                                     <Icon name='facebook' size={20} color='#FFFFFF' />
                                     <Text style={{ color: '#FFFFFF', marginStart: 30, fontSize: 12, fontWeight: '700' }}>Login with Facebook</Text>
                                 </View>
                             </TouchableOpacity>
                             <View style={{ marginTop: 29 }}>
                                 <Text>Don't have an account?  
                                    <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                                        <Text style={{ color: '#FC6011', fontSize: 14, fontWeight: 'bold', top: 2 }}> Sign Up </Text>
                                    </TouchableOpacity>
                                 </Text>
                             </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    };
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#FFFFFF',
        },
        formControl: {
            flex: 1,
            justifyContent: 'center',
            marginTop: 20,
        },
        textInput: {
            padding: 20,
            width: 320, 
            borderRadius: 28, 
            backgroundColor: '#F2F2F2', 
            margin: 15
        },
        btnGroup: {
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 20
        },
        btnFb: {
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            padding: 20,
            borderRadius: 28,
            backgroundColor: '#367FC0',
            width: 320,
            marginTop: 20
        }
    });
export { SignIn };
