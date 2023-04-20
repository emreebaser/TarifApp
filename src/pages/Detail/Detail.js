import React from "react";
import{FlatList, SafeAreaView,ScrollView,StyleSheet,Text, View} from 'react-native';

import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error/Error";
import DetailCard from "../../components/Cards/DetailCard/DetailCard";
const Detail=({route})=>{
    const strMeal=route.params.idMeal;
    const {data,loading,error} =useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${strMeal}`)
    
    if(loading){
        return <Loading/>
    };
    if(error){
        return <Error/>
    }
    return(
       
        <SafeAreaView style={style.container}>
     <FlatList data={data.meals} renderItem={({item})=><DetailCard detail={item}/>}  />
     </SafeAreaView>
  
    )
}
export default Detail;
const style=StyleSheet.create({
    container:{
        
        justifyContent:'center',
        alignItems:'center',
        
    }
})