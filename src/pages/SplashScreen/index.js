import React, { useCallback, useEffect } from "react";
import { View, Image, ImageBackground } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { useDispatch } from "react-redux";
import useStyle from "./styles";
import BellaLogo from "../../assets/images/BellaLogo.png";
import Toy1_Img from "../../assets/images/toy1.png";
import Toy2_Img from "../../assets/images/toy2.png";
import LinearGradient from "react-native-linear-gradient";
import RNButton from "../../components/Button";
import { COLORS } from "../../constants/styles";
import Routes from "../../navigation/routes";

const SplashScreen = ({navigation}) => {
    const styles = useStyle();

    useEffect(()=>{
        const interval = setTimeout(()=>{
            navigation.navigate(Routes.RegistrationScreen); // after 2second redirect to login page
        },2000);

        return()=>{
            clearTimeout(interval); //clear timeout
        }

    },[]);

    //click on get stated button and got to login page
    const onGetStarted = useCallback(()=>{
        navigation.navigate(Routes.RegistrationScreen);
    },[])
    

    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <View style={styles.topImageContainer}>
                    <Image source={BellaLogo} resizeMode={"contain"} />
                </View>
                <Text style={styles.textStyle}>Food for Everyone</Text>
            </View>
            <View style={styles.bottomView}>
                <ImageBackground source={Toy2_Img} style={styles.toy2} resizeMode={"contain"} >
                    <LinearGradient start={{ x: 1, y: 1 }} locations={[0.3,0.4]} end={{ x: 1, y: 0 }} colors={['#FF470B', '#FF470B1A']} style={styles.linearGradient} />
                </ImageBackground>
                <ImageBackground source={Toy1_Img} style={styles.toy1} resizeMode={"contain"} >
                    <LinearGradient start={{ x: 1, y: 1 }} locations={[0.2,0.6]} end={{ x: 1, y: 0 }} colors={['#FF470B', '#FF470B1A']} style={styles.linearGradient} />
                </ImageBackground>
            </View>
            <RNButton onPress={onGetStarted} backgroundColor={COLORS.secondary} color={COLORS.primary} label={"Get started"}/>
        </View>
    )
}

export default React.memo(SplashScreen);
