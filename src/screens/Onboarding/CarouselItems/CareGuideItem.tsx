import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SHADOW_TEXT } from '@theme/colors';
import { onboardingImages } from '@/assets';
import { ParsedText } from '@/components';
import { FontStyles } from '@components/Text/type';

const CareGuideItem: React.FC = () => {
    const { top: topInset } = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: topInset }]}>
            <View style={styles.imageContainer}>
                <Image
                    source={onboardingImages.careGuideItemBackground}
                    style={styles.backgroundImage}
                    resizeMode="stretch"
                />
            </View>
            <View style={styles.titleTextWrapper}>
                <ParsedText
                    variant="primaryMedium"
                    fontSize={28}
                    style={styles.titleText}
                    parse={[
                        {
                            pattern: /\*(.*?)\*/,
                            style: [FontStyles['primaryExtraBold'], { fontSize: 28 }],
                            renderText: (matchingString) => matchingString.replace(/\*/g, ''),
                        },
                    ]}>
                    {`Get plant *care guides*`}
                </ParsedText>
                <Image source={onboardingImages.careGuideItemBrush} style={styles.brushImage} />
            </View>
        </View>
    );
};
export default CareGuideItem;

const styles = StyleSheet.create({
    container: { flex: 1 },
    titleTextWrapper: {
        marginTop: 12,
        marginLeft: 24,
        alignSelf: 'baseline',
    },
    titleText: {
        textShadowColor: SHADOW_TEXT,
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
        fontWeight: '500',
    },
    brushImage: {
        aspectRatio: 152 / 13,
        width: 152,
        alignSelf: 'flex-end',
        marginRight: 6,
        marginTop: 3,
    },
    imageContainer: {
        position: 'absolute',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        aspectRatio: 375 / 812,
    },
});
