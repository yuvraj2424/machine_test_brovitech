import React, { useCallback } from "react";
import { Animated, Image, TouchableOpacity, View } from "react-native";
import LoginScreen from "./Login";
import SignUpScreen from "./SignUp"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Routes from "../../navigation/routes";
import { COLORS, FONT_FAMILY } from "../../constants/styles";
import useStyle from "./styles";
import { Text } from "react-native-paper";
import BellaLogo from "../../assets/images/BellaLogo.png";

const Tab = createMaterialTopTabNavigator();

//custome tab navigation
function MyTabBar({ state, descriptors, navigation, position }) {
    const styles = useStyle();
    return (
        <View style={styles.tabContainer}>
            <View style={styles.viewContaint}>
                <Image source={BellaLogo} resizeMode={"contain"} style={{height:100,width:200}}/>
            </View>
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
                            <Animated.Text style={[styles.tabBarLabelStyle,{borderBottomWidth: isFocused ? 3 : 0,borderBottomColor:COLORS.primary}]} >
                                {label}
                            </Animated.Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}



//login and signup tab
function RegistrationScreen() {
    const styles = useStyle();
    return (
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen
                options={{
                    title: "Login",
                    tabBarLabelStyle: styles.tabBarLabelStyle
                }}
                name={Routes.LoginScreen}
                component={LoginScreen} />
            <Tab.Screen
                options={{
                    title: "Sign-up",
                    tabBarLabelStyle: styles.tabBarLabelStyle
                }}
                name={Routes.SignUpScreen}
                component={SignUpScreen} />
        </Tab.Navigator>
    );
}

export default React.memo(RegistrationScreen);


