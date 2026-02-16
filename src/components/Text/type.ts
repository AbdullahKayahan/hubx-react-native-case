import { StyleProp, TextProps, TextStyle } from 'react-native';

export interface ITextVariantKeys {
    primaryLight: string;
    primaryRegular: string;
    primaryMedium: string;
    primarySemiBold: string;
    primaryBold: string;
    primaryExtraBold: string;
    secondaryRegular: string;
    secondarySemiBold: string;
    secondaryBold: string;
    secondaryExtraBold: string;
}
export type ITextFontStyles = {
    [key in keyof ITextVariantKeys]: TextStyle;
};
export const FontStyles: ITextFontStyles = {
    primaryLight: {
        fontFamily: 'Rubik-Light',
    },
    primaryRegular: {
        fontFamily: 'Rubik-Regular',
    },
    primaryMedium: {
        fontFamily: 'Rubik-Medium',
    },
    primarySemiBold: {
        fontFamily: 'Rubik-SemiBold',
    },
    primaryBold: {
        fontFamily: 'Rubik-Bold',
    },
    primaryExtraBold: {
        fontFamily: 'Rubik-ExtraBold',
    },
    secondaryRegular: {
        fontFamily: 'SFProText-Regular',
    },
    secondarySemiBold: {
        fontFamily: 'SFProText-Semibold',
    },
    secondaryBold: {
        fontFamily: 'SFProText-Bold',
    },
    secondaryExtraBold: {
        fontFamily: 'VisbyCF-Heavy',
    },
};
export type CustomTextProps = TextProps & {
    variant: keyof ITextFontStyles;
    fontSize: number;
    color?: string;
    style?: StyleProp<Omit<TextStyle, 'fontFamily' | 'fontWeight' | 'fontSize' | 'color'>>;
};
