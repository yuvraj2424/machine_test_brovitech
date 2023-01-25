import React, { useCallback } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import useStyle from "./styles";

const RNButton = (props) => {
    const styles = useStyle();
    return (
        <TouchableOpacity style={[styles.container,{backgroundColor:props.backgroundColor}]} onPress={props.onPress}>
            <Text style={[styles.textStyles,{color:props.color}]}>{props.label}</Text>
        </TouchableOpacity>
    )
}

export default React.memo(RNButton);