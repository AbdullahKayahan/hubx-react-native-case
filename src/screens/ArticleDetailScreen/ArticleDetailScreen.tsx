import { StaticScreenProps, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

import { CloseIcon } from '@/assets';
import LoadingContainer from '../HomeScreen/components/LoadingContainer';
import { WHITE } from '../../theme/colors';

type Props = StaticScreenProps<{
    blogUrl: string;
}>;

const ArticleDetailScreen: React.FC<Props> = ({ route }) => {
    const { blogUrl } = route.params;
    const { top: topInset } = useSafeAreaInsets();
    const { goBack } = useNavigation();
    const [loading, setLoading] = React.useState(true);

    const onWebviewLoaded = async () => {
        setLoading(false);
    };

    const onWebviewError = () => {
        Alert.alert(
            'Failed to load',
            'Unable to display the blog content. Please try again later.',
            [
                {
                    onPress: goBack,
                },
            ],
            { cancelable: false },
        );
    };

    return (
        <View style={[styles.container]}>
            <WebView
                source={{ uri: blogUrl }}
                style={[styles.container, { paddingTop: topInset }]}
                onLoadEnd={onWebviewLoaded}
                onError={onWebviewError}
            />
            {loading && (
                <View style={styles.loadingOverlay} pointerEvents="box-none">
                    <LoadingContainer />
                </View>
            )}
            <TouchableOpacity style={[styles.closeIconContainer, { top: topInset + 12 }]} onPress={goBack}>
                <CloseIcon />
            </TouchableOpacity>
        </View>
    );
};
export default ArticleDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
    },
    closeIconContainer: {
        position: 'absolute',
        right: 16,
    },
    loadingOverlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
