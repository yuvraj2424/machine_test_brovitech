import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY } from "../../constants/styles";

const useStyles =(theme)=> StyleSheet.create({
    container:{
        flex:1
    },
    topView:{
        height:250,
        margin:40,
    },
    bottomView:{
        flex:1.5,
        marginLeft:40
    },
    headerStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    headerText:{
        fontFamily:FONT_FAMILY.fontFamily400,
        fontSize:40,
        marginVertical:30
    },
    tabView:{
        flexDirection:'row',
        
    },
    tabBarLabelStyle:{
        fontFamily: FONT_FAMILY.fontFamily300,
        textTransform: 'capitalize',
        fontSize: 18,
        width:100,
        textAlign:'center',
        padding:2 
    },
    foodContainer:{
        backgroundColor:"#fff",
        borderRadius:20,
        width:200,
        margin:10,
        height:230,
        top:60,
        justifyContent:'center',
        alignItems:'center'
    },
    foodImg:{
        top:-50,
        borderRadius:100
    },
    foodName:{
        fontFamily:FONT_FAMILY.fontFamily300,
        textAlign:'center',
        fontSize:20,
        flexWrap:'wrap',
        overflow:'hidden'

    },
    priceStyle:{
        fontFamily:FONT_FAMILY.fontFamily300,
        textAlign:'center',
        fontSize:14,
        flexWrap:'wrap',
        color:COLORS.primary
    }
    
});

export default useStyles;