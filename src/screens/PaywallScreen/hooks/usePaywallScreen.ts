import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '@/store/hooks';
import { completeOnboarding } from '@/store/OnboardingReducer';
import { Screens } from '@/navigation/constants';
import { getActiveStack } from '@/navigation/RootNavigation';
import { subscribe } from '@/store/SubscriptionReducer';
import Store from '@/store/Store';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';

const packageIds = ['plantapp.monthly.direct', 'plantapp.yearly.ft'] as const;

type PackageId = (typeof packageIds)[number];

interface IPackageInfo {
    title: string;
    description: string;
    freeTrialDays?: number;
    freeTrialAvailable?: boolean;
    tag?: string;
}

type PackageData = Record<PackageId, IPackageInfo>;

const packageData: PackageData = {
    'plantapp.monthly.direct': {
        title: '1 Month',
        description: '$2.99/month, *auto renewable*',
        freeTrialAvailable: false,
        tag: undefined,
    },
    'plantapp.yearly.ft': {
        title: '1 Year',
        description: 'First 3 days free, then $529,99/year',
        freeTrialDays: 3,
        freeTrialAvailable: true,
        tag: 'Save 50%',
    },
};

const PURCHASE_SIMULATION_DELAY = 2500;

type usePaywallScreen = () => {
    selectedPackageId: 'plantapp.monthly.direct' | 'plantapp.yearly.ft';
    isPurchasing: boolean;
    packageIds: readonly ['plantapp.monthly.direct', 'plantapp.yearly.ft'];
    packageData: PackageData;
    handlePackageSelect: (packageId: string) => void;
    onPurchasePress: () => Promise<void>;
    onRestorePress: () => Promise<void>;
    onClose: () => void;
    freeTrialAvailable?: boolean;
    freeTrialDays?: number;
};

const usePaywallScreen: usePaywallScreen = () => {
    const [selectedPackageId, setSelectedPackageId] = useState<PackageId>('plantapp.yearly.ft');
    const [isPurchasing, setIsPurchasing] = useState(false);
    const { goBack, navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const dispatch = useAppDispatch();

    const onClose = () => {
        const activeStack = getActiveStack();

        if (activeStack === Screens.INTERNAL_TAB) {
            goBack();
            return;
        }

        if (Store.getState().onboarding.completed) {
            goBack();
        }

        navigate(Screens.INTERNAL_TAB);
        dispatch(completeOnboarding());
    };

    const onPurchaseComplete = () => {
        dispatch(subscribe());
        onClose();
    };
    const onRestorePress = async (): Promise<void> => {
        await onPurchasePress();
    };

    const onPurchasePress = async (): Promise<void> => {
        setIsPurchasing(true);
        await sleep(PURCHASE_SIMULATION_DELAY);
        setIsPurchasing(false);

        Alert.alert("You're all set.", 'Purchase Successful', [{ onPress: onPurchaseComplete }], {
            cancelable: false,
        });
    };
    const freeTrialAvailable = packageData[selectedPackageId].freeTrialAvailable;
    const freeTrialDays = packageData[selectedPackageId].freeTrialDays;

    const handlePackageSelect = (packageId: string) => {
        setSelectedPackageId(packageId as PackageId);
    };

    const sleep = (duration: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, duration));

    return {
        selectedPackageId,
        isPurchasing,
        packageIds,
        packageData,
        freeTrialAvailable,
        freeTrialDays,
        handlePackageSelect,
        onPurchasePress,
        onRestorePress,
        onClose,
    };
};
export default usePaywallScreen;
