import React, { useCallback, useContext, useEffect, useState } from "react";
import { Alert, Image, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import useStyle from "../styles";
import { useDispatch } from "react-redux";
import actions from "../../../redux/actions";
import { COLORS } from "../../../constants/styles";
import RNButton from "../../../components/Button";
import TextField from "../../../components/TextField";
import { formValidation } from "../../../utility/validations";
import { NetworkContext } from "../../../utility/NetworkProvider";

const LoginScreen = () => {
    const { isConnected } = useContext(NetworkContext);
    const styles = useStyle();
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (!isConnected) {
            Alert.alert("", "Please check internet connection");  //check intternet connection
            return;
        }
    }, [])


    const onContinue = useCallback(() => {
        const params = {
            "Username": username,
            "Password": password
        }

        setErrors(formValidation(params));  //check validation if empty then show error
        if (formValidation(params) && formValidation(params).length > 0) {
            return;
        }

        dispatch(actions.storeIsLoggedIn(true)) // redirect to home page
    }, [username, password])

    return (
        <View style={styles.loginContainer}>
            <TextField
                label={"Email Address"}
                value={username}
                error={errors && errors.length > 0 && errors.find((obj) => obj.name == "Username").value}
                onChangeText={(text) => setUsername(text)}
            />
            <TextField
                label={"Password"}
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder={"********"}
                error={errors && errors.length > 0 && errors.find((obj) => obj.name == "Password").value}
            />
            <Text style={styles.forgotPassText}>Forgot passcode?</Text>
            <RNButton onPress={onContinue} backgroundColor={COLORS.primary} color={COLORS.secondary} label={"Login"} />
        </View>
    )
}

export default React.memo(LoginScreen)

