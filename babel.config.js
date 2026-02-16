module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                alias: {
                    '^@/(.+)': './src/\\1',
                    '@components': './src/components',
                    '@theme': './src/theme',
                    '@assets': './src/assets',
                    '@screens': './src/screens',
                    '@navigation': './src/navigation',
                    '@api': './src/api',
                    '@store': './src/store',
                    '@services': './src/services',
                },
                root: ['./src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.android.js', '.android.tsx', '.ios.js', '.ios.tsx'],
            },
        ],
        'react-native-worklets/plugin',
    ],
};
