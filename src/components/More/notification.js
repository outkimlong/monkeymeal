import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
    const NotificationScreen = ({ route, navigation }) => {
        const header = route.params.item;
        return (
            <SafeAreaView>
                <StatusBar animated={true} backgroundColor="#FFFFFF" barStyle={'dark-content'} showHideTransition={'slide'} />
                <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingTop: 10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name='chevron-left' size={40} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: '600',  color: '#000000', marginStart: 10, marginTop: 3 }}>{header}</Text>
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
    export { NotificationScreen };