import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Animated } from 'react-native';
import { View } from 'react-native';
import { COLORS } from '../../../constants/styles';
import Routes from '../../../navigation/routes';
import FoodScreen from '../FoodScreen';
import useStyles from '../styles';

const Tab = createMaterialTopTabNavigator();


//custome tabs to display food list
function MyTabBar({ state, descriptors, navigation, position }) {
    const styles = useStyles();
    return (

        <View style={styles.tabView}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const inputRange = state.routes.map((_, i) => i);
                const opacity = position.interpolate({
                    inputRange,
                    outputRange: inputRange.map(i => (i === index ? 1 : 0)),
                });

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                    >
                        <Animated.Text style={[styles.tabBarLabelStyle, { borderBottomWidth: isFocused ? 3 : 0, borderBottomColor: COLORS.primary, color: isFocused ? COLORS.primary : 'gray' }]} >
                            {label}
                        </Animated.Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}



// only display food list 
export default function FoodTabs() {
    const styles = useStyles();
    return (
            <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
                <Tab.Screen
                    name={Routes.FoodScreen}
                    component={FoodScreen}
                    options={{
                        title: "Foods",
                        tabBarLabelStyle: styles.tabBarLabelStyle
                    }}
                />
                <Tab.Screen
                    name={"Drink"}
                    component={FoodScreen}
                    options={{
                        title: "Drinks",
                        tabBarLabelStyle: styles.tabBarLabelStyle
                    }}
                />

                <Tab.Screen
                    name={"Snack"}
                    component={FoodScreen}
                    options={{
                        title: "Snacks",
                        tabBarLabelStyle: styles.tabBarLabelStyle
                    }}
                />

            </Tab.Navigator>
    );
}