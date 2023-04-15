import React from "react";
import {SafeAreaView,Text,TextInput, View} from 'react-native';
import styles from './Input.style'

const Input = ({label,onChangeText,placeholder})=>{
    return(
      <View style={styles.container}> 
            <Text style={styles.label}>{label}</Text>
           <View style={styles.input_container}>
            <TextInput placeholder={placeholder} onChangeText={onChangeText} placeholderTextColor='black'/>
            </View>
            </View>
    )
}
export default Input;