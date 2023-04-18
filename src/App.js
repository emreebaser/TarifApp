import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import UserCard from './components/UserCard/UserCard';
const App = () => {
  const [loading, setLoading] = useState(true);
  const [userList, setUserList] = useState([]);
  const fecthData = async () => {
    
/*     const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users', // await kullanarak veri çekme
    );
    setLoading(false);
    setUserList(response.data); */

    axios.get('https://jsonplaceholder.typicode.com/users') .then(response =>{ //then kullanarak veri çekme
      setLoading(false); 
      setUserList(response.data); 
    })
  };
  const renderUser = ({item}) => (
    <UserCard name={item.name} email={item.email} username={item.username} />
  );
  useEffect (()=>{
     fecthData();
  },[])
  return (
    <SafeAreaView>
      <View>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList data={userList} renderItem={renderUser} />
        )}

       
      </View>
    </SafeAreaView>
  );
};
export default App;
