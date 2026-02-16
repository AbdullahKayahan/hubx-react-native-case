import React, { Fragment } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { SvgProps } from 'react-native-svg';

import { PRIMARY_GREEN, WHITE, GRAY_74 } from '@theme/colors';
import { Screens } from './constants';
import Text from '@/components/Text/Text';
import { HomeIcon, DiagnoseIcon, MyGardenIcon, ProfileIcon, ScanIcon } from '@/assets';

const TABBAR_HEIGHT = 50;

const TabBarIconMapper: Partial<Record<Screens, React.FC<SvgProps>>> = {
    [Screens.HOME]: HomeIcon,
    [Screens.DIAGNOSE]: DiagnoseIcon,
    [Screens.MY_GARDEN]: MyGardenIcon,
    [Screens.PROFILE]: ProfileIcon,
};

const Tabbar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
    const { bottom: bottomInset } = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingBottom: bottomInset, height: TABBAR_HEIGHT + bottomInset }]}>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;

                const { options } = descriptors[route.key];
                let label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                let labelText: React.ReactNode;
                if (typeof label === 'function') {
                    labelText = label({
                        focused: isFocused,
                        color: isFocused ? PRIMARY_GREEN : GRAY_74,
                        position: 'below-icon',
                        children: route.name,
                    });
                } else {
                    labelText = label;
                }

                const Icon = TabBarIconMapper[route.name as Screens];
                if (!Icon) return null;

                const color = isFocused ? PRIMARY_GREEN : GRAY_74;
                const shouldInsertTabbarButton = index === 1;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <Fragment key={`tabbarTab_${index}`}>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={[styles.tabContainer]}>
                            <Icon color={color} />
                            <Text variant="primaryRegular" fontSize={10} color={color}>
                                {labelText}
                            </Text>
                        </TouchableOpacity>
                        {shouldInsertTabbarButton && (
                            <View style={styles.tabContainer}>
                                <TouchableOpacity
                                    style={styles.tabbarButton}
                                    activeOpacity={0.9}
                                    onPress={() => navigation.navigate(Screens.SCAN)}>
                                    <ScanIcon />
                                </TouchableOpacity>
                            </View>
                        )}
                    </Fragment>
                );
            })}
        </View>
    );
};
export default Tabbar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: WHITE,
    },
    tabContainer: {
        flex: 0.2,
        justifyContent: 'flex-end',
        rowGap: 4.87,
        alignItems: 'center',
    },
    tabbarButton: {
        marginBottom: 9,
    },
});
