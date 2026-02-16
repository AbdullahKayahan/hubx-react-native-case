import React from 'react';
import { Alert, Image, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Text from '@components/Text/Text';
import { MAIN_TEXT_COLOR_70, WHITE } from '@theme/colors';
import onboardingImages from '@assets/onboarding';
import Button from '@components/Button/Button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Screens } from '@navigation/constants';
import { ExternalStackParamList } from '@navigation/types';
import { FontStyles } from '../../components/Text/type';
import { ParsedText } from '../../components';

const OnboardingWelcomeScreen: React.FC = () => {
    const { bottom: bottomInset, top: topInset } = useSafeAreaInsets();
    const { navigate } = useNavigation<NativeStackNavigationProp<ExternalStackParamList>>();

    const onButtonPress = () => {
        navigate(Screens.ONBOARDING_CAROUSEL);
    };

    const renderHeader = () => (
        <View style={[styles.header]}>
            <ParsedText
                variant="primaryRegular"
                fontSize={28}
                style={styles.headerText}
                parse={[
                    {
                        pattern: /\*(.*?)\*/,
                        style: [FontStyles['primarySemiBold'], { fontSize: 28 }],
                        renderText: (matchingString) => matchingString.replace(/\*/g, ''),
                    },
                ]}>
                Welcome to *PlantApp*
            </ParsedText>

            <Text variant="primaryRegular" fontSize={16} style={styles.descriptionText} color={MAIN_TEXT_COLOR_70}>
                Identify more than 3000+ plants and 88% accuracy.
            </Text>
        </View>
    );

    const renderFooter = () => (
        <View style={[styles.footer, { paddingBottom: bottomInset }]}>
            <Button onPress={onButtonPress} label="Get Started" />
            <ParsedText
                variant="primaryRegular"
                fontSize={11}
                style={styles.agreementsDescriptiontext}
                color={MAIN_TEXT_COLOR_70}
                parse={[
                    {
                        pattern: new RegExp('Terms of Use'),
                        style: [{ textDecorationLine: 'underline' }],
                        renderText: (str) => str,
                        onPress: () => {
                            navigate(Screens.EXTERNAL_TERMS);
                        },
                    },
                    {
                        pattern: new RegExp('Privacy Policy'),
                        style: [{ textDecorationLine: 'underline' }],
                        renderText: (str) => str,
                        onPress: () => {
                            navigate(Screens.EXTERNAL_PRIVACY);
                        },
                    },
                ]}>
                {`By tapping next, you are agreeing to PlantID${'\n'}Terms of Use & Privacy Policy.`}
            </ParsedText>
        </View>
    );

    return (
        <View style={[styles.container, { paddingTop: topInset }]}>
            <View style={styles.backgroundImageWrapper}>
                <Image source={onboardingImages.welcomeScreenBackground} style={styles.image} />
            </View>
            {renderHeader()}
            <View style={styles.body}>
                <Image source={onboardingImages.welcomeScreenImage} resizeMode="cover" style={styles.bodyImage} />
            </View>
            {renderFooter()}
        </View>
    );
};
export default OnboardingWelcomeScreen;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: WHITE },
    backgroundImageWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        aspectRatio: 375 / 812,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    header: {
        marginLeft: 24,
        marginTop: 12,
    },
    headerText: {
        marginBottom: 8,
        letterSpacing: 0.07,
        width: 300,
    },
    descriptionText: {
        letterSpacing: 0.07,
        lineHeight: 22,
        width: 300,
    },
    body: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    bodyImage: {
        aspectRatio: 375 / 499,
        width: '100%',
    },
    footer: { paddingHorizontal: 24 },
    agreementsDescriptiontext: {
        marginTop: 17,
        marginBottom: 8,
        textAlign: 'center',
        lineHeight: 15,
        letterSpacing: 0.07,
    },
    underlineText: {
        textDecorationLine: 'underline',
    },
});
