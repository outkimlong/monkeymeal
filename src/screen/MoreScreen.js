import React, {useContext} from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../navigators/AuthProvider';

const MoreScreen = ({ navigation }) =>  {
    const { logout } = useContext(AuthContext);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true} backgroundColor="#FFFFFF" barStyle={'dark-content'} showHideTransition={'slide'} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, paddingTop: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 10, color: '#000000' }}>More</Text>
                <TouchableOpacity onPress={() => logout()}>
                    <Icon name='log-out-outline' size={30} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, marginTop: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate('PaymentScreen', { item: 'Payment Details' })}>
                    <View style={styles.card}>
                        <View style={{ borderRadius: 35, backgroundColor: '#D8D8D8', padding: 10, }}>
                            <Icon name='ios-cash-outline' size={40}/>
                        </View>
                        <View style={{ justifyContent: 'center', marginStart: 20 }}>
                            <Text style={{ fontSize: 15, color: 'black' }}>Payment Details</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('OrderScreen', { item: 'My Orders' })}>
                    <View style={styles.card}>
                        <View style={{ borderRadius: 35, backgroundColor: '#D8D8D8', padding: 10, }}>
                            <Icon name='md-cart-outline' size={40}/>
                        </View>
                        <View style={{ justifyContent: 'center', marginStart: 20 }}>
                            <Text style={{ fontSize: 15, color: 'black' }}>My Orders</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen', { item: 'Notifications' })}>
                    <View style={styles.card}>
                        <View style={{ borderRadius: 35, backgroundColor: '#D8D8D8', padding: 10, }}>
                            <Icon name='ios-notifications-outline' size={40}/>
                        </View>
                        <View style={{ justifyContent: 'space-between', marginStart: 20, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, color: 'black' }}>Notifications</Text>
                            <View style={{ borderRadius: 30, borderColor: 'red', backgroundColor: 'red', padding: 4 }}>
                                <Text style={{ color: '#FFFFFF', fontSize: 10 }}>15</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('InboxScreen', { item: 'Inbox' })}>
                    <View style={styles.card}>
                        <View style={{ borderRadius: 35, backgroundColor: '#D8D8D8', padding: 10, }}>
                            <Icon name='md-chatbubbles-outline' size={40}/>
                        </View>
                        <View style={{ justifyContent: 'center', marginStart: 20 }}>
                            <Text style={{ fontSize: 15, color: 'black' }}>Inbox</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AboutScreen', { item: 'About Us' })}>
                    <View style={styles.card}>
                        <View style={{ borderRadius: 35, backgroundColor: '#D8D8D8', padding: 10, }}>
                            <Icon name='md-information-outline' size={40}/>
                        </View>
                        <View style={{ justifyContent: 'center', marginStart: 20 }}>
                            <Text style={{ fontSize: 15, color: 'black' }}>About Us</Text>
                        </View>
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
    card: {
        padding: 10,
        backgroundColor: '#F2F2F2',
        margin: 15,
        flexDirection: 'row',
        borderRadius: 10,
    }
});
export { MoreScreen };