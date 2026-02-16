import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { CloseIcon, paywallImages, PaywallScanIcon, SpeedMeterIcon, PlantIcon } from '@/assets';
import { PAYWALL_BACKGROUND, WHITE, WHITE_50, WHITE_52, WHITE_70 } from '@theme/colors';
import Text from '@/components/Text/Text';
import Button from '@components/Button/Button';
import PackageItem from './components/PackageItem';
import FeatureCard, { IFeatureCardProps } from './components/FeatureCard';
import usePaywallScreen from './hooks/usePaywallScreen';
import { ParsedText } from '@/components';
import { Screens } from '@navigation/constants';
import { ExternalStackParamList, InternalStackParamList } from '@navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getActiveStack } from '@navigation/RootNavigation';

const featuresData: IFeatureCardProps[] = [
    { icon: <PaywallScanIcon />, title: 'Unlimited', description: 'Plant Identify' },
    { icon: <SpeedMeterIcon />, title: 'Faster', description: 'Process' },
    { icon: <PlantIcon />, title: 'Detailed', description: 'Plant care' },
];
const PaywallScreen = () => {
    const { navigate } = useNavigation<NativeStackNavigationProp<ExternalStackParamList & InternalStackParamList>>();
    const { top: topInset, bottom: bottomInset } = useSafeAreaInsets();
    const {
        selectedPackageId,
        isPurchasing,
        packageData,
        packageIds,
        handlePackageSelect,
        onClose,
        onPurchasePress,
        onRestorePress,
        freeTrialAvailable,
        freeTrialDays,
    } = usePaywallScreen();

    const onTermsOfUsePress = () => {
        const activeStack = getActiveStack();
        if (activeStack === Screens.ONBOARDING) {
            navigate(Screens.EXTERNAL_TERMS);
            return;
        }
        navigate(Screens.INTERNAL_TERMS);
    };

    const onPrivacyPolicyPress = () => {
        const activeStack = getActiveStack();
        if (activeStack === Screens.ONBOARDING) {
            navigate(Screens.EXTERNAL_PRIVACY);
            return;
        }
        navigate(Screens.INTERNAL_PRIVACY);
    };

    const renderFooter = () => (
        <>
            <Button
                label={freeTrialAvailable ? `Try free for ${freeTrialDays} days` : 'Get Plus'}
                style={styles.ctaButton}
                onPress={onPurchasePress}
                loading={isPurchasing}
            />

            <Text variant="primaryLight" color={WHITE_52} fontSize={9} style={styles.subscriptionExplanationText}>
                After the 3-day free trial period you'll be charged ₺274.99 per year unless you cancel before the trial
                expires. Yearly Subscription is Auto-Renewable
            </Text>
            <ParsedText
                variant="primaryRegular"
                fontSize={11}
                style={styles.termsPrivacyRestoreText}
                color={WHITE_70}
                parse={[
                    {
                        pattern: new RegExp('Terms'),
                        style: {},
                        renderText: (str) => str,
                        onPress: onTermsOfUsePress,
                    },
                    {
                        pattern: new RegExp('Privacy'),
                        style: {},
                        renderText: (str) => str,
                        onPress: onPrivacyPolicyPress,
                    },
                    {
                        pattern: new RegExp('Restore'),
                        style: {},
                        renderText: (str) => str,
                        onPress: onRestorePress,
                    },
                ]}>
                Terms • Privacy • Restore
            </ParsedText>
        </>
    );

    const renderPackages = () => (
        <View style={styles.packagesContainer}>
            {packageIds.map((packageId) => {
                const packageInfo = packageData[packageId];
                return (
                    <PackageItem
                        key={packageId}
                        packageId={packageId}
                        title={packageInfo.title}
                        description={packageInfo.description}
                        isSelected={selectedPackageId === packageId}
                        tag={packageInfo.tag}
                        onSelect={handlePackageSelect}
                        enabled={!isPurchasing}
                    />
                );
            })}
        </View>
    );

    const renderFeaturesSection = () => (
        <View style={styles.featuresScrollContainer}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}>
                {featuresData.map((feature, index) => (
                    <FeatureCard key={`paywall-feature-card-${index}`} {...feature} />
                ))}
            </ScrollView>
        </View>
    );

    const renderHeadline = () => (
        <View style={styles.textWrapper}>
            <Text variant="secondaryExtraBold" fontSize={30} color={WHITE} style={styles.titleText}>
                PlantApp{' '}
                <Text variant="primaryLight" fontSize={27} color={WHITE} style={styles.titleText}>
                    Premium
                </Text>
            </Text>
            <Text variant="primaryLight" fontSize={24} color={WHITE_70} style={styles.descriptionText}>
                Access All Features
            </Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={paywallImages.paywallImage} style={styles.paywallImage} />
                <TouchableOpacity
                    disabled={isPurchasing}
                    style={[styles.closeIconWrapper, { top: topInset + 8 }]}
                    onPress={onClose}>
                    <CloseIcon />
                </TouchableOpacity>
            </View>
            <View
                style={{
                    position: 'absolute',

                    left: 0,
                    right: 0,
                    bottom: bottomInset,
                }}>
                {renderHeadline()}
                {renderFeaturesSection()}
                {renderPackages()}
                {renderFooter()}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PAYWALL_BACKGROUND,
    },
    imageContainer: {
        width: '100%',
        aspectRatio: 375 / 490,
        top: 0,
        left: 0,
        right: 0,
    },
    paywallImage: {
        width: '100%',
        height: '100%',
    },

    termsPrivacyRestoreText: {
        letterSpacing: 0,
        textAlign: 'center',
        marginTop: 10,
        lineHeight: 11,
    },
    subscriptionExplanationText: {
        marginHorizontal: 24,
        textAlign: 'center',
        lineHeight: 9 * 1.32, // Fontsize * 1.32 =132%
        marginTop: 8,
    },
    ctaButton: {
        marginHorizontal: 24,
        marginTop: 26,
    },
    packagesContainer: {
        paddingHorizontal: 24,
        rowGap: 16,
        marginTop: 24,
    },
    featuresScrollContainer: {
        marginTop: 20,
    },
    scrollContent: {
        columnGap: 8,
        paddingLeft: 24,
        paddingRight: 24,
    },
    textWrapper: {
        marginLeft: 24,
    },
    titleText: {
        letterSpacing: 0,

        color: WHITE,
    },
    descriptionText: {
        lineHeight: 24,
    },
    closeIconWrapper: {
        position: 'absolute',
        right: 16,
    },
});

export default PaywallScreen;
