import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigation from './src/navigation/RootNavigation';
import { Provider } from 'react-redux';
import Store from '@/store/Store';

function App() {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <Provider store={Store}>
            <SafeAreaProvider>
                <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
                <RootNavigation />
            </SafeAreaProvider>
        </Provider>
    );
}

export default App;
