import React from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView, Linking} from 'react-native';
import styles from './DetailCard.style';
const DetailCard = ({detail}) => {
  return (
   
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: detail.strMealThumb}} />
      <Text style={styles.title}>{detail.strMeal}</Text>
      <Text style={styles.area}>{detail.strArea}</Text>
      <View style={styles.seperator}></View>
      <View style={styles.body_container}>
      <Text style={styles.instructions}>{detail.strInstructions}</Text>
      
      <TouchableOpacity style={styles.button} onPress={()=>Linking.openURL(detail.strYoutube)}>
        <Text style={styles.button_text}>Watch on Youtube</Text>
      </TouchableOpacity>

      </View>
   
    </View>
   
  );
};
export default DetailCard;
