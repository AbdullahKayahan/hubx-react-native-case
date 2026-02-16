import Text from '@components/Text/Text';
import { MAIN_COLOR, WHITE, WHITE_30, WHITE_8, WHITE_70 } from '@theme/colors';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { paywallImages } from '@/assets';
import { ParsedText } from '@/components';
import { FontStyles } from '@components/Text/type';

type Props = {
    packageId: string;
    title: string;
    description: string;
    tag?: string;
    isSelected: boolean;
    onSelect: (packageId: string) => void;
    enabled?: boolean;
};

const PackageItem: React.FC<Props> = ({
    packageId,
    title,
    description,
    isSelected = false,
    enabled = true,
    tag,
    onSelect,
}) => {
    const shouldDisplayTag = isSelected && !!tag;
    const containerStyle: ViewStyle = {
        borderWidth: isSelected ? 1.5 : 0.5,
        borderColor: isSelected ? MAIN_COLOR : WHITE_30,
        paddingHorizontal: isSelected ? 13.5 : 14.5,
        paddingVertical: isSelected ? 11.5 : 12.5,
    };

    const onPress = () => onSelect(packageId);

    return (
        <TouchableOpacity
            disabled={!enabled}
            activeOpacity={0.8}
            style={[styles.container, containerStyle]}
            onPress={onPress}>
            <View style={StyleSheet.absoluteFill}>
                <Image
                    source={
                        isSelected ? paywallImages.selectedPackageItemBackground : paywallImages.packageItemBackground
                    }
                    style={styles.backgroundImage}
                />
            </View>
            {!isSelected ? (
                <View style={styles.unselectedIcon} />
            ) : (
                <View style={styles.selectedIcon}>
                    <View style={styles.selectedIconInnerCircle} />
                </View>
            )}
            <View style={styles.textContent}>
                <Text variant="primaryMedium" fontSize={16} color={WHITE} style={styles.titleText}>
                    {title}
                </Text>
                <ParsedText
                    variant="primaryLight"
                    fontSize={12}
                    color={WHITE_70}
                    style={styles.descriptionText}
                    parse={[
                        {
                            pattern: /\*(.*?)\*/,
                            style: [FontStyles['primaryRegular'], { fontWeight: '400', fontSize: 12 }],
                            renderText: (matchingString) => matchingString.replace(/\*/g, ''),
                        },
                    ]}>
                    {description}
                </ParsedText>
            </View>
            {shouldDisplayTag && (
                <View style={styles.tag}>
                    <Text variant="primaryMedium" fontSize={12} color={WHITE} style={styles.tagText}>
                        {tag}
                    </Text>
                </View>
            )}
        </TouchableOpacity>
    );
};
export default PackageItem;

const styles = StyleSheet.create({
    container: {
        borderRadius: 14,
        flexDirection: 'row',
        columnGap: 12,
        alignItems: 'center',
        overflow: 'hidden',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        left: 0,
    },
    textContent: {
        flex: 1,
        rowGap: 1,
    },
    unselectedIcon: {
        width: 24,
        aspectRatio: 1,
        borderRadius: 24,
        backgroundColor: WHITE_8,
    },
    selectedIcon: {
        width: 24,
        aspectRatio: 1,
        borderRadius: 24,
        backgroundColor: MAIN_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedIconInnerCircle: {
        width: 8,
        borderRadius: 8,
        aspectRatio: 1,
        backgroundColor: WHITE,
    },
    titleText: {
        letterSpacing: 0,
        color: WHITE,
    },
    descriptionText: {
        letterSpacing: 0,
        color: WHITE_70,
    },
    tag: {
        position: 'absolute',
        paddingVertical: 4,
        paddingLeft: 12,
        paddingRight: 9,
        top: -1,
        right: 0,
        backgroundColor: MAIN_COLOR,
        borderBottomStartRadius: 20,
    },
    tagText: {
        letterSpacing: 0,
        lineHeight: 18,
    },
});
