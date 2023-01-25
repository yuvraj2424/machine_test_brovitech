import React from "react";  
import { StyleSheet } from "react-native";
import { FONT_FAMILY } from "../../constants/styles";

const useStyle =()=> StyleSheet.create({
    container:{
        width:'100%',
        marginVertical:10
    },
    inputBox:{
        backgroundColor:'transparent'
    },
    errorText:{
        fontFamily:FONT_FAMILY.fontFamily300,
        fontSize:10,
        color:'red',
        position:'absolute',
        bottom:-12,
    }
})

export default useStyle;