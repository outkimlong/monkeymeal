
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native';
import { HomeScreen, MenuScreen, MoreScreen } from '../screen/index';
import { ItemDetails } from '../components/Menu/index';
import { PaymentScreen, OrderScreen, NotificationScreen, InboxScreen, AboutScreen } from '../components/More/index';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );
};

function Menu() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Menu">
            <Stack.Screen name="MenuScreen" component={MenuScreen} />
            <Stack.Screen name="ItemDetails" component={ItemDetails} />
        </Stack.Navigator>
    );
};

function More() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="More">
            <Stack.Screen name="MoreScreen" component={MoreScreen} />
            <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
            <Stack.Screen name="OrderScreen" component={OrderScreen} />
            <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
            <Stack.Screen name="InboxScreen" component={InboxScreen} />
            <Stack.Screen name="AboutScreen" component={AboutScreen} />
        </Stack.Navigator>
    );
};

const AppStack = () => {
    const CustomTabBarButton = ({ children, onPress }) => (
        <TouchableOpacity style={{ 
               top: Platform.OS == 'ios' ? -20 : -40,
               justifyContent: 'center',
               alignItems: 'center',
               ...styles.shadow,
           }}
           onPress={onPress}
        >
            <View style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: '#DCDCDC'
            }}>
               {children}
            </View>
        </TouchableOpacity>
    );

    return (
        <Tab.Navigator 
            screenOptions={{
                headerShown: false, 
                tabBarShowLabel: false,
                tabBarStyle: { 
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 80,
                    ...styles.shadow
                },
            }}
            initialRouteName='Home'
        >   
            <Tab.Screen name="Menu" component={Menu} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Icon name={focused ? 'ios-grid': 'ios-grid-outline'} size={20} color={focused ? '#FC6011' : '#B6B7B7' } />
                            <Text style={{ fontSize: 12, color: focused ? '#FC6011' : '#B6B7B7' }}>Menu</Text>
                        </View>
                    )
                }}
            />

            <Tab.Screen name="Home" component={Home} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <Icon name={focused ? 'ios-home': 'ios-home-outline'} size={30} color={focused ? '#FC6011' : '#B6B7B7' } />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props}/>
                    )
                }}
            />
        
            <Tab.Screen name="More" component={More} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Icon name={focused ? 'md-list': 'md-list-sharp'} size={20} color={focused ? '#FC6011' : '#B6B7B7' } />
                            <Text style={{ fontSize: 12, color: focused ? '#FC6011' : '#B6B7B7' }}>More</Text>
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    );
};
const styles = StyleSheet.create( {
    shadow: {
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});
export default AppStack;