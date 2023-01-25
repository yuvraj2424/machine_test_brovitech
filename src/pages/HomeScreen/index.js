import React, { useCallback, useEffect } from "react";
import { Image, View } from "react-native";
import { Searchbar, Text } from "react-native-paper";
import useStyles from "./styles";
import Menu_Img from "../../assets/images/menu.png";
import AntDesign from "react-native-vector-icons/AntDesign";
import RNSearchBar from "../../components/SearchBar";
import FoodTabs from "./Tabs";
import { useDispatch } from "react-redux";
import actions from "../../redux/actions";

const HomeScreen = () => {
    const styles = useStyles();
    const dispatch = useDispatch();
   
    const [searchQuery, setSearchQuery] = React.useState('');

    useEffect(()=>{
        
    },[])

    //search foods
    const onChangeSearch =useCallback((query)=>{
        setSearchQuery(query);
    },[]) 

    const LogOut = useCallback(()=>{
        dispatch(actions.storeIsLoggedIn(false)) //logout 
    },[])


    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <View style={styles.headerStyle}>
                    <Image source={Menu_Img} />
                    <AntDesign name="shoppingcart" size={30} />
                </View>
                <Text style={styles.headerText}>Delicious {'\n'}food for you</Text>

                <RNSearchBar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={styles.searchStyle}
                />
            </View>
            <View style={styles.bottomView}>
                <FoodTabs/>
            </View>
        </View>
    )
}

export default React.memo(HomeScreen);