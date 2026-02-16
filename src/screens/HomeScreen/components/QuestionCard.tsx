import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from '@components/Text/Text';
import { WHITE } from '@theme/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { InternalStackParamList } from '@/navigation/types';
import { Screens } from '@/navigation/constants';

type Props = {
    title: string;
    image: string;
    blogUrl: string;
};

const HomeQuestionCard: React.FC<Props> = ({ title, image, blogUrl }) => {
    const { navigate } = useNavigation<NativeStackNavigationProp<InternalStackParamList>>();

    const onPress = () => {
        console.log(blogUrl);
        navigate(Screens.ARTICLE_DETAIL, { blogUrl: blogUrl });
    };

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={onPress}>
            <Image style={StyleSheet.absoluteFill} source={{ uri: image }} />
            <View style={styles.titleContainer}>
                <Text variant="primaryMedium" fontSize={15} color={WHITE} style={styles.titleText}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
export default HomeQuestionCard;

const styles = StyleSheet.create({
    container: {
        width: 240,
        aspectRatio: 240 / 164,
        borderRadius: 12,
        overflow: 'hidden',
    },
    titleContainer: {
        position: 'absolute',
        bottom: 13,
        left: 14,
        right: 14,
        height: 40,
    },
    titleText: {
        letterSpacing: -0.24,
        lineHeight: 20,
    },
});
