import Text from '@components/Text/Text';
import { WHITE, WHITE_70 } from '@theme/colors';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { paywallImages } from '@/assets';

export interface IPaywallFeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const FeatureCard: React.FC<IPaywallFeatureCardProps> = ({ title, description, icon }) => {
    return (
        <View style={styles.container}>
            <Image source={paywallImages.cardBackground} style={styles.backgroundImage} />
            {icon}
            <View style={styles.textContent}>
                <Text variant="primaryMedium" fontSize={20} color={WHITE} style={styles.titleText}>
                    {title}
                </Text>
                <Text variant="primaryRegular" fontSize={13} color={WHITE_70} style={styles.descriptionText}>
                    {description}
                </Text>
            </View>
        </View>
    );
};
export default FeatureCard;

const styles = StyleSheet.create({
    container: {
        width: 156,
        aspectRatio: 156 / 130,
        padding: 16,
        borderRadius: 14,
        justifyContent: 'space-between',
        overflow: 'hidden',
    },
    textContent: {
        rowGap: 4,
    },
    titleText: {
        lineHeight: 24,
    },
    descriptionText: {
        lineHeight: 18,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 156,
        aspectRatio: 156 / 130,
    },
});
