import { MAIN_TEXT_COLOR } from '@theme/colors';
import React from 'react';
import { StyleProp, StyleSheet, Text } from 'react-native';
import { CustomTextProps, FontStyles } from './type';

const UIText: React.FC<CustomTextProps> = ({ variant, children, color, style, fontSize, ...otherProps }) => {
    return (
        <Text style={[FontStyles[variant], styles.text, style, { color, fontSize }]} {...otherProps}>
            {children}
        </Text>
    );
};
export default UIText;

const styles = StyleSheet.create({
    text: { color: MAIN_TEXT_COLOR },
});
