import React from "react";
import { View,Text,Image,  TouchableWithoutFeedback } from "react-native";
import style from './MealsCard.style'
const MealsCard =({item,onPress})=>{
    
    return(
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={style.container}>
            <Image style={style.image}
            source={{uri:item.strMealThumb }}
            />
            <View style={style.body_container}>

            <Text style={style.text}>{item.strMeal}</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}
export default MealsCard;