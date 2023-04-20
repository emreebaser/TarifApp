import React, {useState, useEffect} from 'react';
import {Button, SafeAreaView, Text, FlatList, View, StyleSheet, TextInput} from 'react-native';
import Config from 'react-native-config';


import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import CategoriesCard from '../../components/Cards/CategoriesCard';
import SearchBar from '../../components/SearchBar/SearchBar';


const Categories = ({navigation}) => {
 
  const {loading, data, error} = useFetch(Config.API_URL); 
  const [list,setList]=useState(data)
  useEffect(() => {
    setList(data.categories)
}, [data])

  
  const handlePress =(id)=>{
    navigation.navigate('Meals',{id})
  }  
  const renderItem=({item})=><CategoriesCard title={item} onSelect={()=> handlePress(item.strCategory)} />
  
  
  const handleSearch = (text) => {
 
    const filteredList = data.categories.filter(category =>{
      const searchedText = text.toLowerCase();
      const currentTitle= category.strCategory.toLowerCase();
  
     return currentTitle.indexOf(searchedText) > -1 ; 
    });
    
   setList(filteredList)
   
  };
  
  if (loading) {
    
    return <Loading />;
    
  };
  if (error) {
    return <Error />;
  };
  
  
  

  

 
 
  
  return (
    <View style={style.container}>
     
   <FlatList 
   ListHeaderComponent= {<SearchBar onChangeText={handleSearch} />}
   data={list}
   renderItem={renderItem}
   keyExtractor={item =>(item.idCategory)} 
   />
   </View>
  );
  
};
export default Categories;


const style=StyleSheet.create ({
  container:{
    flex:1,
    backgroundColor:'#ffa500'
  }
})