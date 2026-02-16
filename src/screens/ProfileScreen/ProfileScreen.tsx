import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useAppDispatch } from '../../store/hooks';
import { resetOnboarding } from '../../store/OnboardingReducer';
import { resetSubscription } from '../../store/SubscriptionReducer';
import Text from '@/components/Text/Text';
import { WHITE } from '../../theme/colors';

const ProfileScreen = () => {
    const dispatch = useAppDispatch();
    const onRemoveStores = () => {
        dispatch(resetOnboarding());
        dispatch(resetSubscription());
        Alert.alert('Stores removed successfully');
    };
    return (
        <View style={styles.container}>
            <Text variant="secondaryBold" fontSize={24} style={styles.title}>
                Profile
            </Text>
            <TouchableOpacity activeOpacity={0.8} onPress={onRemoveStores} style={styles.removeStoresButton}>
                <Text variant="primaryRegular" fontSize={12} style={styles.subtitle}>
                    Remove Stores
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
        fontWeight: 'bold',
        marginBottom: 10,
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

export default ProfileScreen;
