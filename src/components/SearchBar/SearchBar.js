import React from 'react';
import {View,Text,TextInput, TouchableOpacity} from 'react-native';
import style from './SearchBar.style'
const SearchBar =({onChangeText})=>{
 return(
    
 <View style={style.container}>
   
        <TextInput placeholder='Ara...' placeholderTextColor={'black'}  onChangeText={onChangeText}/>
    </View>
    
 )
}
export default SearchBar;