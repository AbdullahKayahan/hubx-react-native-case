import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Text from '@components/Text/Text';
import { SearchIcon, homeImages } from '@/assets';
import { GRAY_69, BORDER_SUBTLE, WHITE_88 } from '@theme/colors';

const SearchHeader: React.FC = () => {
    const { top: topInset } = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: topInset }]}>
            <Image source={homeImages.headerBackground} style={styles.backgroundImage} />
            <View style={styles.greetingsMessageWrapper}>
                <Text variant="primaryRegular" fontSize={16} style={styles.greetingsOverlineText}>
                    Hi, plant lover!
                </Text>
                <Text variant="primaryMedium" fontSize={24} style={styles.greetingsOverlineText}>
                    Good Afternoon! ⛅
                </Text>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 24, marginTop: 14 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: WHITE_88,
                        borderRadius: 12,
                        paddingVertical: 12,
                        paddingHorizontal: 16,
                        borderWidth: 0.2,
                        borderColor: BORDER_SUBTLE,
                    }}>
                    <SearchIcon />
                    <Text variant="primaryRegular" fontSize={15.5} color={GRAY_69} style={styles.searchPlaceholderText}>
                        Search for plants
                    </Text>
                </View>
            </View>
        </View>
    );
};
export default SearchHeader;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        aspectRatio: 375 / 175,
    },
    backgroundImage: {
        width: '100%',
        position: 'absolute',
        aspectRatio: 375 / 175,
        bottom: 0,
        left: 0,
        right: 0,
    },
    greetingsMessageWrapper: {
        marginTop: 3,
        marginLeft: 24,
    },
    greetingsOverlineText: {
        letterSpacing: 0.07,
    },
    searchPlaceholderText: {
        marginLeft: 12,
    },
});
