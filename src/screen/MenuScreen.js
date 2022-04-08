import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Item } from '../components/Menu/index';
const MenuScreen = () =>  {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true} backgroundColor="#FFFFFF" barStyle={'dark-content'} showHideTransition={'slide'} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, paddingTop: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 10, color: '#000000' }}>Menu</Text>
                <TouchableOpacity onPress={() => alert('cart')}>
                    <Icon name='cart' size={30} />
                </TouchableOpacity>
            </View>
            <View style={styles.search}>
                <Icon name='search' size={30} />
                <TextInput style={{ flex: 1, fontSize: 15, padding: 5 }} placeholder="Search food"/>
            </View>
            <Item />
        </SafeAreaView>    
    )
};
const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    search: {
        backgroundColor: '#F2F2F2',
        flexDirection: 'row', 
        alignItems: 'center', 
        marginHorizontal: 10, 
        borderRadius: 25,
        padding: 10,
        marginTop: 20,
        marginBottom: 30
    }
});
export { MenuScreen };