import React from 'react';
import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
    NativeStackOptionsArgs,
} from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/Onboarding/WelcomeScreen';
import OnboardingCarouselScreen from '../screens/Onboarding/OnboardingCarouselScreen';
import { Screens } from './constants';
import { InternalStackParamList } from './types';
import PaywallScreen from '@/screens/PaywallScreen/PaywallScreen';
import TermsOfUseScreen from '@/screens/TermsOfUseScreen/TermsOfUseScreen';
import PrivacyPolicyScreen from '@/screens/PrivacyPolicyScreen/PrivacyPolicyScreen';
import HomeTabNavigator from './HomeTabNavigator';
import Scancreen from '../screens/ScanScreen/ScanScreen';
import ArticleDetailScreen from '../screens/ArticleDetailScreen/ArticleDetailScreen';
const Stack = createNativeStackNavigator<InternalStackParamList>();

const ExternalStack = () => {
    const { screenBuilder } = useScreenBuilder();

    return (
        <Stack.Navigator initialRouteName={Screens.INTERNAL_TAB} screenOptions={screenBuilder()}>
            <Stack.Screen name={Screens.INTERNAL_TAB} component={HomeTabNavigator} />
            <Stack.Screen name={Screens.HOME} component={OnboardingCarouselScreen} />
            <Stack.Screen name={Screens.DIAGNOSE} component={PaywallScreen} />
            <Stack.Screen name={Screens.MY_GARDEN} component={TermsOfUseScreen} />
            <Stack.Screen name={Screens.PROFILE} component={PrivacyPolicyScreen} />
            <Stack.Screen name={Screens.SCAN} component={Scancreen} />
            <Stack.Screen name={Screens.ARTICLE_DETAIL} component={ArticleDetailScreen} />
            <Stack.Screen name={Screens.INTERNAL_TERMS} component={TermsOfUseScreen} />
            <Stack.Screen name={Screens.INTERNAL_PRIVACY} component={PrivacyPolicyScreen} />
            <Stack.Screen name={Screens.INTERNAL_PAYWALL} component={PaywallScreen} />
        </Stack.Navigator>
    );
};

const useScreenBuilder = () => {
    const options: Partial<Record<keyof InternalStackParamList, NativeStackNavigationOptions>> = {
        [Screens.HOME]: {
            headerShown: false,
        },
        [Screens.DIAGNOSE]: {
            headerShown: false,
        },
        [Screens.MY_GARDEN]: {
            animation: 'slide_from_bottom',
            animationDuration: 300,
        },
        [Screens.PROFILE]: {
            animation: 'slide_from_bottom',
            animationDuration: 300,
        },
        [Screens.INTERNAL_PAYWALL]: {
            animation: 'slide_from_bottom',
            animationDuration: 300,
        },
        [Screens.INTERNAL_TERMS]: {
            animation: 'slide_from_bottom',
            animationDuration: 300,
        },
        [Screens.INTERNAL_PRIVACY]: {
            animation: 'slide_from_bottom',
            animationDuration: 300,
        },
        [Screens.SCAN]: {
            animation: 'slide_from_bottom',
            animationDuration: 300,
        },
    };

    const commonOptions = (
        route: NativeStackOptionsArgs<InternalStackParamList>['route'],
    ): NativeStackNavigationOptions => ({
        headerShown: false,
    });

    const screenBuilder =
        () =>
        ({ route }: NativeStackOptionsArgs<InternalStackParamList>): NativeStackNavigationOptions => ({
            ...commonOptions(route),
            ...options[route.name],
        });

    return { screenBuilder };
};

export default ExternalStack;
