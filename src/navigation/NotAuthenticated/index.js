import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationScreen from '../../pages/Registration';
import SplashScreen from '../../pages/SplashScreen';
import Routes from '../routes';

const Stack = createNativeStackNavigator();

//Not Authenticated Routing here

const NotAuthenticated = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name={Routes.SplashScreen}
                component={SplashScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={Routes.RegistrationScreen}
                component={RegistrationScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default NotAuthenticated;