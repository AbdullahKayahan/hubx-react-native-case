import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Text from '@components/Text/Text';
import { SearchIcon, homeImages } from '@/assets';
import { GRAY_69, SEARCH_BORDER_COLOR, WHITE_88 } from '@theme/colors';

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
                        borderColor: SEARCH_BORDER_COLOR,
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
    greetingsText: {
        marginTop: 6,
        lineHeight: 28,
        letterSpacing: 0.35,
    },
    searchBar: {
        marginHorizontal: 24,
        alignSelf: 'center',
        borderRadius: 12,
        flexDirection: 'row',
        columnGap: 12,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginBottom: 14,
        width: 327,
        aspectRatio: 327 / 44,
        backgroundColor: WHITE_88,
        borderColor: SEARCH_BORDER_COLOR,
        borderWidth: 0.2,
    },
    searchPlaceholderText: {
        marginLeft: 12,
    },
    searchBarBackgroundImage: {
        aspectRatio: 327 / 44,
    },
});
