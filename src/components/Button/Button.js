import React from "react";
import{TouchableOpacity,Text} from 'react-native';
import style from './Button.style'
const Button = ({text,onPress})=>{
   return(
   <TouchableOpacity style={style.container}
   onPress={onPress}>
        <Text style={style.text}>{text}</Text>
    </TouchableOpacity>
   )
}
export default Button;