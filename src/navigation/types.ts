import { Screens } from './constants';

export type ExternalStackParamList = {
    [Screens.ONBOARDING_WELCOME]: undefined;
    [Screens.ONBOARDING_CAROUSEL]: undefined;
    [Screens.EXTERNAL_PAYWALL]: undefined;
    [Screens.EXTERNAL_TERMS]: undefined;
    [Screens.EXTERNAL_PRIVACY]: undefined;
};

export type InternalTabParamList = {
    [Screens.HOME]: undefined;
    [Screens.DIAGNOSE]: undefined;
    [Screens.MY_GARDEN]: undefined;
    [Screens.PROFILE]: undefined;
    [Screens.SCAN]: undefined;
};
export type InternalStackParamList = {
    [Screens.HOME]: undefined;
    [Screens.DIAGNOSE]: undefined;
    [Screens.MY_GARDEN]: undefined;
    [Screens.PROFILE]: undefined;
    [Screens.SCAN]: undefined;
    [Screens.INTERNAL_TAB]: undefined;
    [Screens.ARTICLE_DETAIL]: { blogUrl: string };
    [Screens.INTERNAL_TERMS]: undefined;
    [Screens.INTERNAL_PRIVACY]: undefined;
    [Screens.INTERNAL_PAYWALL]: undefined;
};

export type RootStackParamList = {
    [Screens.ONBOARDING]: undefined;
    [Screens.INTERNAL_TAB]: undefined;
};
