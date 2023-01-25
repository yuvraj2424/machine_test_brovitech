import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY } from "../../constants/styles";

const useStyle = () => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    viewContaint:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:10
    },
    tabBarLabelStyle: {
        fontFamily: FONT_FAMILY.fontFamily300,
        textTransform: 'capitalize',
        fontSize: 18,
        color:"#000",
        width:100,
        textAlign:'center',
        padding:2
    },
    customeTabStyle: {
        backgroundColor: COLORS.secondary,
        height: 300
    },
    tabContainer: {
        flex:0.8,
        backgroundColor: '#fff',
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
    },
    tabView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    loginContainer:{
        flex:1,
        margin:20
    },
    forgotPassText:{
        marginVertical:10,
        fontFamily:FONT_FAMILY.fontFamily300,
        color:COLORS.primary
    }
})

export default useStyle;