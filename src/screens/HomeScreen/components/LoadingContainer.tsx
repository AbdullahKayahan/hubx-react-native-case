import { MAIN_COLOR, WHITE } from '@theme/colors';
import React from 'react';
import { View, ActivityIndicator, StyleSheet, ViewStyle } from 'react-native';

type Props = {
    style?: ViewStyle;
};

const LoadingContainer: React.FC<Props> = ({ style }) => (
    <View style={[styles.loadingContainer, style]}>
        <ActivityIndicator color={MAIN_COLOR} size="large" />
    </View>
);

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WHITE,
    },
});

export default LoadingContainer;
