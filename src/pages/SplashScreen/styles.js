import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY } from "../../constants/styles";

const useStyle = () => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary
    },
    topView: {
        flex: 2,
        margin: 60
    },
    topImageContainer: {
        backgroundColor: COLORS.secondary,
        padding: 10,
        borderRadius: 100,
        height: 80,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontFamily: FONT_FAMILY.fontFamily400,
        fontSize: 50,
        color: COLORS.secondary,

    },
    bottomView: {
        flex: 4,
    },
    bottomImgContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    linearGradient: {
        flex: 1,
    },
    toy1: {
        height: 400,
        width: 200,
        position: 'absolute',
        right: 0,
        zIndex: -1
    },
    toy2: {
        height: 400,
        width: 250
    }
})

export default useStyle;