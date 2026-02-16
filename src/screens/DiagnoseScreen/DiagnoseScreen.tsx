import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '@/components/Text/Text';

const DiagnoseScreen = () => {
    return (
        <View style={styles.container}>
            <Text variant="secondaryBold" fontSize={24} style={styles.title}>
                Diagnose
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
    },
});

export default DiagnoseScreen;
