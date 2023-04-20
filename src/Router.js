import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Categories from './Pages/Categories/Categories';
import Detail from './Pages/Detail';
import Meals from './Pages/Meals';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name='Categories' component={Categories} options={{headerTintColor:'#ffa500'}} />
      <Stack.Screen name="Meals" component={Meals} options={{headerTintColor:'#ffa500'}} />
       <Stack.Screen name="Detail" component={Detail} options={{headerTintColor:'#ffa500'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
