import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../pages/HomeScreen';
import Routes from '../routes';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                
                tabBarLabelStyle:{display:'none'}
            }}
        >
            <Tab.Screen
                name={Routes.HomeScreen}
                component={HomeScreen}
                options={{
                    headerShown: false ,
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="home" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name={Routes.LikeScreen}
                component={HomeScreen}
                options={{
                    headerShown: false ,
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="hearto" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name={Routes.UserScreen}
                component={HomeScreen}
                options={{
                    headerShown: false ,
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name={Routes.HistoryScreen}
                component={HomeScreen}
                options={{
                    headerShown: false ,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="history" color={color} size={25} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}