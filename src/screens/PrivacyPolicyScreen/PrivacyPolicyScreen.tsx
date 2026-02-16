import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ExternalStackParamList } from '@navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { WHITE } from '@/theme/colors';
import Text from '@/components/Text/Text';

const PrivacyPolicyScreen = () => {
    const { goBack } = useNavigation<NativeStackNavigationProp<ExternalStackParamList>>();
    return (
        <View style={styles.container}>
            <Text variant="secondaryBold" fontSize={24} style={styles.title}>
                Privacy Policy
            </Text>
            <TouchableOpacity activeOpacity={0.8} onPress={() => goBack()} style={styles.removeStoresButton}>
                <Text variant="primaryRegular" fontSize={12} style={styles.subtitle}>
                    Go Back
                </Text>
            </TouchableOpacity>
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
        alignSelf: 'center',
    },
    subtitle: {
        fontSize: 16,
    },
    removeStoresButton: {
        marginTop: 20,
        backgroundColor: WHITE,
        padding: 10,
        borderRadius: 8,
    },
});

export default PrivacyPolicyScreen;
