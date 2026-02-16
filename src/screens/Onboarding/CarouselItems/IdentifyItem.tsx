import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { onboardingImages } from '@/assets';
import { ParsedText } from '@/components';
import { FontStyles } from '@components/Text/type';

const IdentifyItem: React.FC = () => {
    const { top: topInset } = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: topInset }]}>
            <View style={styles.imageContainer}>
                <Image source={onboardingImages.identifyItemBackground} style={styles.backgroundImage} />
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
                    {`Take a photo to *identify*${'\n'}the plant!`}
                </ParsedText>
                <Image source={onboardingImages.identifyItemBrush} style={styles.brushImage} />
            </View>
        </View>
    );
};
export default IdentifyItem;

const styles = StyleSheet.create({
    container: { flex: 1 },
    titleTextWrapper: {
        marginTop: 12,
        marginLeft: 24,
        alignSelf: 'baseline',
    },
    titleText: {
        letterSpacing: -1,
        fontWeight: '500',
    },
    brushImage: {
        aspectRatio: 139 / 13,
        width: 139,
        position: 'absolute',
        right: -12,
        bottom: '20%',
    },

    imageContainer: {
        position: 'absolute',
        alignSelf: 'center',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        aspectRatio: 375 / 812,
    },
});
