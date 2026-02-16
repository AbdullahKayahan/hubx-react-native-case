import React from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

import { PRIMARY_GREEN, TEXT_SECONDARY, WHITE } from '@theme/colors';
import Text from '@components/Text/Text';

type Props = {
    onPress: () => void;
    label: string;
    style?: ViewStyle;
    loading?: boolean;
};

const Button: React.FC<Props> = ({ label, onPress, style, loading = false }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={[styles.container, style]} onPress={onPress}>
            <Text
                variant="primaryMedium"
                fontSize={16}
                color={WHITE}
                style={{ opacity: Number(!loading), lineHeight: 24 }}>
                {label}
            </Text>
            {loading && <ActivityIndicator color={TEXT_SECONDARY} style={styles.loadingIndicator} />}
        </TouchableOpacity>
    );
};
export default Button;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: PRIMARY_GREEN,
        height: 56,
    },

    loadingIndicator: {
        position: 'absolute',
    },
});
