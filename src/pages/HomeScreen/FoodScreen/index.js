import React, { useState } from "react";
import { FlatList, Image, View } from "react-native";
import { Text } from "react-native-paper";
import useStyles from "../styles";
import { FoodData } from "../../../DummyData/foods";

//render food list using dummy data
const FoodScreen = () =>{

    const styles =useStyles();

    const [data,setData] = useState(FoodData); //store dummy data

    //return list
    const renderItem = ({item}) =>{
        return(
            <View style={styles.foodContainer}>
                <Image source={item.img} style={styles.foodImg}/>
                <Text style={styles.foodName}>{item.name}</Text>
                <Text style={styles.priceStyle}>{item.price}</Text>
            </View>
        )
    };

    return(
        <FlatList 
            data={data}
            horizontal
            renderItem={renderItem}
            keyExtractor={(item,index)=>index}
        />
    )
}

export default React.memo(FoodScreen)