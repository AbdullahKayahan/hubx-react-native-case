import React from 'react';
import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
    NativeStackOptionsArgs,
} from '@react-navigation/native-stack';

import WelcomeScreen from '@screens/Onboarding/WelcomeScreen';
import OnboardingCarouselScreen from '@screens/Onboarding/OnboardingCarouselScreen';
import { Screens } from './constants';
import { ExternalStackParamList } from './types';
import PaywallScreen from '@/screens/PaywallScreen/PaywallScreen';
import TermsOfUseScreen from '@/screens/TermsOfUseScreen/TermsOfUseScreen';
import PrivacyPolicyScreen from '@/screens/PrivacyPolicyScreen/PrivacyPolicyScreen';
const Stack = createNativeStackNavigator<ExternalStackParamList>();

const ExternalStack = () => {
    const { screenBuilder } = useScreenBuilder();

    return (
        <Stack.Navigator initialRouteName={Screens.ONBOARDING_WELCOME} screenOptions={screenBuilder()}>
            <Stack.Screen name={Screens.ONBOARDING_WELCOME} component={WelcomeScreen} />
            <Stack.Screen name={Screens.ONBOARDING_CAROUSEL} component={OnboardingCarouselScreen} />
            <Stack.Screen name={Screens.EXTERNAL_PAYWALL} component={PaywallScreen} />
            <Stack.Screen name={Screens.EXTERNAL_TERMS} component={TermsOfUseScreen} />
            <Stack.Screen name={Screens.EXTERNAL_PRIVACY} component={PrivacyPolicyScreen} />
        </Stack.Navigator>
    );
};

const useScreenBuilder = () => {
    const options: Partial<Record<keyof ExternalStackParamList, NativeStackNavigationOptions>> = {
        [Screens.ONBOARDING_WELCOME]: {
            headerShown: false,
        },
        [Screens.ONBOARDING_CAROUSEL]: {
            headerShown: false,
        },
        [Screens.EXTERNAL_PAYWALL]: {
            animation: 'slide_from_bottom',
            animationDuration: 300,
        },
        [Screens.EXTERNAL_TERMS]: {
            animation: 'slide_from_bottom',
            animationDuration: 300,
        },
        [Screens.EXTERNAL_PRIVACY]: {
            animation: 'slide_from_bottom',
            animationDuration: 300,
        },
    };

    const commonOptions = (
        route: NativeStackOptionsArgs<ExternalStackParamList>['route'],
    ): NativeStackNavigationOptions => ({
        headerShown: false,
    });

    const screenBuilder =
        () =>
        ({ route }: NativeStackOptionsArgs<ExternalStackParamList>): NativeStackNavigationOptions => ({
            ...commonOptions(route),
            ...options[route.name],
        });

    return { screenBuilder };
};

export default ExternalStack;
