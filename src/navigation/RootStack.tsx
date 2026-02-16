import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
    NativeStackOptionsArgs,
} from '@react-navigation/native-stack';
import ExternalStack from './ExternalStack';
import { RootStackParamList } from './types';
import { Screens } from './constants';
import { navigationRef } from './RootNavigation';
import InternalStack from './InternalStack';
import store from '@/store/Store';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
    const { screenBuilder } = useScreenBuilder();
    const onboardingCompleted = store.getState().onboarding.completed;
    const initialRouteName = onboardingCompleted ? Screens.INTERNAL_TAB : Screens.ONBOARDING;
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName={initialRouteName} screenOptions={screenBuilder()}>
                <Stack.Screen name={Screens.ONBOARDING} component={ExternalStack} />
                <Stack.Screen name={Screens.INTERNAL_TAB} component={InternalStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const useScreenBuilder = () => {
    const options: Partial<Record<keyof RootStackParamList, NativeStackNavigationOptions>> = {
        [Screens.ONBOARDING]: {
            headerShown: false,
        },
        [Screens.INTERNAL_TAB]: {
            headerShown: false,
            gestureEnabled: false,
        },
    };

    const commonOptions = (
        route: NativeStackOptionsArgs<RootStackParamList>['route'],
    ): NativeStackNavigationOptions => ({
        headerShown: false,
    });

    const screenBuilder =
        () =>
        ({ route }: NativeStackOptionsArgs<RootStackParamList>): NativeStackNavigationOptions => ({
            ...commonOptions(route),
            ...options[route.name],
        });

    return { screenBuilder };
};

export default RootStack;
