import React from 'react';
import { TextProps, TextStyle, StyleSheet, StyleProp } from 'react-native';
import ParsedText from 'react-native-parsed-text';
import { CustomTextProps } from '../Text/type';

export type ParseType = {
    pattern: string | RegExp;
    renderText?: (matchingString: string, matches: string[]) => string;
    onPress?: (text: string, index: number) => void;
    onLongPress?: (text: string, index: number) => void;
    style: StyleProp<TextStyle>;
};

export interface IParsedText extends CustomTextProps {
    parse: ParseType[];
    lineHeight?: number;
    childrenProps?: TextProps;
}

const CustomParsedText: React.FC<IParsedText> = (props) => {
    const flattenedStyle = StyleSheet.flatten(props.style);
    const lineHeight = props.lineHeight ?? (flattenedStyle as TextStyle)?.lineHeight;

    return (
        <ParsedText
            style={[props.style, { lineHeight, fontSize: props.fontSize, color: props.color }]}
            childrenProps={props?.childrenProps}
            testID={props.testID}
            parse={props.parse}>
            {props.children}
        </ParsedText>
    );
};

export default CustomParsedText;
