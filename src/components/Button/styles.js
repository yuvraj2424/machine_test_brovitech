import React from "react";  
import { StyleSheet } from "react-native";
import { FONT_FAMILY } from "../../constants/styles";

const useStyle =()=> StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        width:'90%',
        height:60,
        alignSelf:'center',
        borderRadius:30,
        marginVertical:20,
        elevation:5
    },
    textStyles:{
        fontFamily:FONT_FAMILY.fontFamily300,
        fontSize:17,
    }
})

export default useStyle;