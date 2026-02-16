import Text from '@components/Text/Text';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { ArrowRightIcon, homeImages } from '@/assets';
//import { useAppSelector } from '@store/hooks';
import { useNavigation } from '@react-navigation/native';
import { BANNER_BG, BANNER_MESSAGE_TEXT, BANNER_CTA_LABEL_TEXT } from '@theme/colors';
import { Screens } from '@/navigation/constants';
import { InternalStackParamList } from '@/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppSelector } from '@/store/hooks';

type Props = { style?: ViewStyle };

const PlusBanner: React.FC<Props> = ({ style }) => {
    const { navigate } = useNavigation<NativeStackNavigationProp<InternalStackParamList>>();
    const isSubscriber = useAppSelector((state) => state.subscription.status === 'plus');

    const onPress = () => {
        navigate(Screens.INTERNAL_PAYWALL);
    };

    if (isSubscriber) {
        return null;
    }

    return (
        <TouchableOpacity activeOpacity={0.8} style={[styles.container, style]} onPress={onPress}>
            {<Image style={styles.icon} source={homeImages.envelop} />}
            <View style={styles.textContent}>
                <Text variant="secondaryBold" fontSize={16} color={BANNER_MESSAGE_TEXT} style={styles.messageText}>
                    FREE Premium Available
                </Text>
                <Text
                    variant="secondaryRegular"
                    fontSize={13}
                    color={BANNER_CTA_LABEL_TEXT}
                    style={styles.ctaLabelText}>
                    Tap to upgrade your account!
                </Text>
            </View>
            <ArrowRightIcon />
        </TouchableOpacity>
    );
};
export default PlusBanner;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: BANNER_BG,
        paddingRight: 12,
        paddingLeft: 20,
        paddingVertical: 13,
        columnGap: 16,
        borderRadius: 12,
    },
    textContent: {
        rowGap: 1,
        flex: 1,
    },
    messageText: {
        lineHeight: 21,
        letterSpacing: -0.32,
    },
    ctaLabelText: {
        letterSpacing: 0,
        lineHeight: 16,
    },
    icon: {
        aspectRatio: 4 / 3,
        width: 40,
    },
});
