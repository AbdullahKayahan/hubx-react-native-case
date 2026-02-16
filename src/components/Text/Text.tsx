import { TEXT_PRIMARY } from '@theme/colors';
import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';
import { CustomTextProps, FontStyles } from './type';

const Text: React.FC<CustomTextProps> = ({ variant, children, color, style, fontSize, ...otherProps }) => {
    return (
        <RNText style={[FontStyles[variant], styles.text, style, { color, fontSize }]} {...otherProps}>
            {children}
        </RNText>
    );
};
export default Text;

const styles = StyleSheet.create({
    text: { color: TEXT_PRIMARY },
});
