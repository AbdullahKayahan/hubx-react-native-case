import React, { useRef } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useSharedValue } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { DOT_INACTIVE, TEXT_PRIMARY } from '@theme/colors';
import { Screens } from '@navigation/constants';
import IdentifyItem from './CarouselItems/IdentifyItem';
import CareGuideItem from './CarouselItems/CareGuideItem';
import Button from '@/components/Button/Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ExternalStackParamList } from '@navigation/types';

const DATA = [...new Array(3)];

const OnboardingWalkthroughScreen: React.FC = () => {
    const { bottom: bottomInset } = useSafeAreaInsets();
    const { navigate } = useNavigation<NativeStackNavigationProp<ExternalStackParamList>>();

    const carouselRef = useRef<ICarouselInstance>(null);
    const progress = useSharedValue<number>(0);

    const onContinuePress = () => {
        if (carouselRef.current?.getCurrentIndex() === 1) {
            navigate(Screens.EXTERNAL_PAYWALL);
            return;
        }

        carouselRef.current?.next();
    };

    const renderFooter = () => (
        <View style={[styles.footer, { paddingBottom: bottomInset + 55 }]}>
            <Button label="Continue" onPress={onContinuePress} />
            <Pagination.Custom
                progress={progress}
                data={DATA}
                dotStyle={styles.dot}
                activeDotStyle={styles.activeDot}
                containerStyle={[
                    styles.pagination,
                    {
                        bottom: bottomInset + 12.5,
                    },
                ]}
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                onProgressChange={progress}
                enabled={false}
                autoPlay={false}
                width={Dimensions.get('screen').width}
                data={DATA}
                renderItem={({ index }) => {
                    if (!index) {
                        return <IdentifyItem />;
                    }

                    return <CareGuideItem />;
                }}
            />
            {renderFooter()}
        </View>
    );
};
export default OnboardingWalkthroughScreen;

const styles = StyleSheet.create({
    container: { flex: 1 },
    footer: {
        position: 'absolute',
        paddingHorizontal: 24,
        bottom: 0,
        left: 0,
        right: 0,
    },
    pagination: {
        position: 'absolute',
        gap: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeDot: {
        borderRadius: 50,
        backgroundColor: TEXT_PRIMARY,
        width: 10,
        height: 10,
    },
    dot: {
        borderRadius: 50,
        backgroundColor: DOT_INACTIVE,
        width: 6,
        height: 6,
    },
});
