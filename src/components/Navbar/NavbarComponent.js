import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from '../../screens/HomeScreen';
// import ProfileScreen from '../../screens/ProfileScreen';
// import SettingScreen from '../../screens/SettingScreen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {SearchIcon, HeartIcon, UserIcon} from 'react-native-heroicons/outline';
import Icon  from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../../screens/HomeScreen';
import SearchScreen from '../../screens/SearchScreen';
import WishlistScreen from '../../screens/WishlistScreen';
import HotelScreen from '../../screens/HotelScreen';
import BookingScreen from '../../screens/BookingScreen';
import LoginScreen from '../../screens/LoginScreen';
import SettingScreen from '../../screens/SettingScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {store} from '../../stores/store';
import {Provider} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// const Tab = createBottomTabNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        TabBarStyle: {
          paddingTop: 8,
          paddingBottom: 12,
          backgroundColor: '#0A1931',
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        // component={Search}
        component={HomeScreen}
        options={{
          TabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Icon
                size={20}
                name="search-outline"
                color="#FFC947"
                opacity={focused ? 1 : 0.6}
              />
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 10,
                  lineHeight: 12,
                  letterSpacing: -0.2,
                  color: '#FFC947',
                  opacity: focused ? 1 : 0.6,
                }}>
                Search
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          TabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Icon
                size={20}
                name="heart-outline"
                color="#FFC947"
                opacity={focused ? 1 : 0.6}
              />
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 10,
                  lineHeight: 12,
                  letterSpacing: -0.2,
                  color: '#FFC947',
                  opacity: focused ? 1 : 0.6,
                }}>
                Wishlist
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          TabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <UserIcon size={20} color="#FFC947" opacity={focused ? 1 : 0.6} />
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 10,
                  lineHeight: 12,
                  letterSpacing: -0.2,
                  color: '#FFC947',
                  opacity: focused ? 1 : 0.6,
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const NavbarComponent = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Hotel"
          component={HotelScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Booking"
          component={BookingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Setting"
          component={SettingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  // <NavigationContainer>
  //     <Tab.Navigator>
  //         <Tab.Screen name="Home" component={HomeScreen} />
  //         <Tab.Screen name="Profile" component={ProfileScreen} />
  //         <Tab.Screen name="Setting" component={SettingScreen} />
  //     </Tab.Navigator>
  // </NavigationContainer>
);

export default NavbarComponent;
