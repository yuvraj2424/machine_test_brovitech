import React from "react";
import { StyleSheet } from "react-native";
import { FONT_FAMILY } from "../constants/styles";

const useStyles =(theme)=> StyleSheet.create({
    usernameText:{
        fontFamily:FONT_FAMILY.fontFamily400,
        fontSize:18
    },
    dividerStyle:{
        width:'100%',
        backgroundColor: theme.secondary
    }
});

export default useStyles;