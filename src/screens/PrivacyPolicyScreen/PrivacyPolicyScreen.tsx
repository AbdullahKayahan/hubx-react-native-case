import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@/components';
import { useNavigation } from '@react-navigation/native';
import { ExternalStackParamList } from '@navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const PrivacyPolicyScreen = () => {
    const { goBack } = useNavigation<NativeStackNavigationProp<ExternalStackParamList>>();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Privacy Policy</Text>
            <Button label="Go Back" onPress={() => goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
});

export default PrivacyPolicyScreen;
