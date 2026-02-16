import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import {
    BottomTabNavigationOptions,
    BottomTabScreenProps,
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DiagnoseScreen from '../screens/DiagnoseScreen/DiagnoseScreen';
import MyGardenScreen from '../screens/MyGardenScreen/MyGardenScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import { Screens } from './constants';
import { InternalTabParamList } from './types';
import { ParamListBase } from '@react-navigation/native';
import Tabbar from './TabBar';
import Scancreen from '../screens/ScanScreen/ScanScreen';

const Tab = createBottomTabNavigator<InternalTabParamList>();

const HomeTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName={Screens.HOME}
            tabBar={(props) => <Tabbar {...props} />}
            screenOptions={screenBuilder()}>
            <Tab.Screen name={Screens.HOME} component={HomeScreen} />
            <Tab.Screen name={Screens.DIAGNOSE} component={DiagnoseScreen} />
            <Tab.Screen name={Screens.SCAN} component={Scancreen} />
            <Tab.Screen name={Screens.MY_GARDEN} component={MyGardenScreen} />
            <Tab.Screen name={Screens.PROFILE} component={ProfileScreen} />
        </Tab.Navigator>
    );
};

const options = (): { [key in keyof typeof Screens]?: BottomTabNavigationOptions } => ({
    HOME: {
        tabBarLabel: 'Home',
    },
    DIAGNOSE: {
        tabBarLabel: 'Diagnose',
    },
    MY_GARDEN: {
        tabBarLabel: 'My Garden',
    },
    PROFILE: {
        tabBarLabel: 'Profile',
    },
});

const screenBuilder =
    () =>
    ({ route }: BottomTabScreenProps<ParamListBase>): BottomTabNavigationOptions => ({
        ...options()[route.name as Screens],
        headerShown: false,
    });

export default HomeTabNavigator;
