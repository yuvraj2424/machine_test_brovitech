import React, { useEffect } from 'react';
import {
    NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
    MD2DarkTheme,
    MD2LightTheme,
    Provider as PaperProvider
} from 'react-native-paper';
import RootNav from './navigation';
import { PreferencesContext } from './contexts/PreferencesContext';
import { COLORS } from './constants/styles';
import { navigationRef } from './utility/NavigationService';
import { SafeAreaView } from 'react-native';

const CombinedDefaultTheme = {
    ...MD2LightTheme,
    ...NavigationDefaultTheme,
    colors: {
        ...MD2LightTheme.colors,
        ...NavigationDefaultTheme.colors,
        primary: COLORS.primary
    },
};
const CombinedDarkTheme = {
    ...MD2DarkTheme,
    ...NavigationDarkTheme,
    colors: {
        ...MD2DarkTheme.colors,
        ...NavigationDarkTheme.colors,
        primary: COLORS.primary
    },
};

const AppRootNavigation = () => {

    const [isThemeDark, setIsThemeDark] = React.useState(false);

    let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme; // this is use for the change color theme

    const toggleTheme = React.useCallback(() => {
        return setIsThemeDark(!isThemeDark);
    }, [isThemeDark]);

    //create context for the theme
    const preferences = React.useMemo(
        () => ({
            toggleTheme,
            isThemeDark,
        }),
        [toggleTheme, isThemeDark]
    );

    return (
        <PreferencesContext.Provider value={preferences}>
            <PaperProvider theme={theme}>
                <NavigationContainer theme={theme}  ref={navigationRef}>
                    <RootNav />
                </NavigationContainer>
            </PaperProvider>
        </PreferencesContext.Provider>
    )
}

export default AppRootNavigation;