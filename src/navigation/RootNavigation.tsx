import React, { createRef } from 'react';
import RootStack from './RootStack';
import { NavigationContainerRef } from '@react-navigation/native';

import { Screens } from './constants';
import { ExternalStackParamList, InternalStackParamList, InternalTabParamList, RootStackParamList } from './types';

export type NavigationParamList = ExternalStackParamList &
    InternalStackParamList &
    InternalTabParamList &
    RootStackParamList;

export const navigationRef = createRef<NavigationContainerRef<NavigationParamList>>();

export const navigate = <T extends Screens>(name: T, params: NavigationParamList[T]): void => {
    // @ts-ignore
    navigationRef.current?.navigate(name, params);
};

const RootNavigation = () => {
    return <RootStack />;
};

export const getActiveStack = (): Screens.ONBOARDING | Screens.INTERNAL_TAB | undefined => {
    const state = navigationRef.current?.getRootState();
    const routeName = state?.routes[state.index]?.name;

    if (routeName === Screens.ONBOARDING) {
        return Screens.ONBOARDING;
    } else if (routeName === Screens.INTERNAL_TAB) {
        return Screens.INTERNAL_TAB;
    }
    return undefined;
};

export default RootNavigation;
