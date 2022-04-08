import React, {useEffect, useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { OnboardingScreen, SignIn, SignUp, ForgotPassword, OTPSend, OTPVerify } from '../components/Auth'

const Stack = createNativeStackNavigator();
const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;
    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if(value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        })
    },[]);
    if(isFirstLaunch === null) {
        return null;
    } else if (isFirstLaunch === true) {
        routeName = 'OnboardingScreen';
    } else {
        routeName = 'SignInScreen';
    }
    return(
        <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen name='OnboardingScreen' component={OnboardingScreen}
                options={({}) => ({ 
                    headerShown: false
                })}
            />
            <Stack.Screen name='SignInScreen' component={SignIn} 
                options={({}) => ({ 
                    headerShown: false
                })}
            />
            <Stack.Screen name='SignUpScreen' component={SignUp} 
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    headerStyle: {
                        backgroundColor: '#FFFFF',
                        shadowColor: 'green',
                        elevation: 0
                    },
                    headerLeft: () => (
                        <View style={{ maginLeft: 20 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                                <Icon name='arrowleft' color='red' size={25} />
                            </TouchableOpacity>
                        </View>
                    )
                })}
            />
            <Stack.Screen name='OTPSendScreen' component={OTPSend} />
            <Stack.Screen name='OTPVerifyScreen' component={OTPVerify} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
        </Stack.Navigator>
    )
}
export default AuthStack;