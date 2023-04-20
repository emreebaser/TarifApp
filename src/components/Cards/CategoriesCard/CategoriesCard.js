import React from "react";
import{View,Text,TouchableWithoutFeedback, Image, TouchableOpacity}from 'react-native';
import styles from './CategoriesCard.style'

const CategoriesCard = ({title,onSelect})=>{
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container}>
         
            <Image source={{uri:title.strCategoryThumb}} style={styles.image}/>
            <View style={styles.body_container}>
            <Text style={styles.text}>{title.strCategory}</Text>
            </View>
          
        </View>
        </TouchableWithoutFeedback>
    )
}
export default CategoriesCard;