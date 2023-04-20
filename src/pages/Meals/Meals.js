import React from 'react';
import {SafeAreaView, Text, Button, FlatList, View} from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import MealsCard from '../../components/Cards/MealsCard/MealsCard';

const Meals = ({navigation, route}) => {
  const {id} = route.params;
  const {data, loading, error} = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`,
  );

  const goDetail = idMeal => {
    navigation.navigate('Detail', {idMeal});
  };
  const renderItem = ({item}) => (
    <MealsCard item={item} onPress={() => goDetail(item.idMeal)} />
  );
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
  <View style={{backgroundColor:'#ffa500',flex:1}}>
  <FlatList data={data.meals} renderItem={renderItem} />
  </View> 
  )
};
export default Meals;
