import React, { useCallback } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Text, TextInput } from 'react-native-paper';
import useStyle from "./styles";

const TextField = (props) => {
    const styles = useStyle();

    return (
        <View style={styles.container}>
            <TextInput
                label={props.label}
                value={props.value}
                style={styles.inputBox}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                secureTextEntry={props.secureTextEntry}
            />
            {
                props.error && <Text style={styles.errorText}>{props.error}</Text>
            }
        </View>

    );
}

export default React.memo(TextField);