import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '@/components/Text/Text';

const MyGardenScreen = () => {
    return (
        <View style={styles.container}>
            <Text variant="secondaryBold" fontSize={24} style={styles.title}>
                Terms of Use
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

export default MyGardenScreen;
