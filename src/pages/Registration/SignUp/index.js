import React, { useCallback } from "react";
import { Image, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import useStyle from "../styles";
import { useDispatch } from "react-redux";
import actions from "../../../redux/actions";
import { COLORS } from "../../../constants/styles";
import RNButton from "../../../components/Button";
import TextField from "../../../components/TextField";

const SignUpScreen = () => {
    const { colors } = useTheme();
    const styles = useStyle();
    const dispatch = useDispatch();

    const onContinue = useCallback(() => {
        dispatch(actions.storeIsLoggedIn(true))
    }, [])

    return (
        <View style={styles.loginContainer}>
            <TextField label={"Email Address"} />
            <TextField label={"Password"} placeholder={"********"} />
            <TextField label={"Confirm Password"} placeholder={"********"} />
            <RNButton backgroundColor={COLORS.primary} color={COLORS.secondary} label={"Sign Up"} />
        </View>
    )
}

export default React.memo(SignUpScreen)

