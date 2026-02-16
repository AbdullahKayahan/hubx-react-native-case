import Text from '@components/Text/Text';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { CARD_BORDER } from '@theme/colors';

type Props = {
    title: string;
    image: string;
};

const HomeCategoryCard: React.FC<Props> = ({ title, image }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.container}>
            <Image style={styles.image} source={{ uri: image }} />
            <Text variant="primaryMedium" fontSize={16} style={styles.titleText}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};
export default HomeCategoryCard;

const styles = StyleSheet.create({
    container: {
        height: 152,
        flex: 0.5,
        borderWidth: 0.5,
        borderColor: CARD_BORDER,
        borderRadius: 12,
        overflow: 'hidden',
    },
    titleText: {
        letterSpacing: -0.32,
        lineHeight: 21,
        position: 'absolute',
        top: 16,
        left: 16,
        width: '65%',
    },
    image: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        height: '100%',
        aspectRatio: 1,
    },
});
