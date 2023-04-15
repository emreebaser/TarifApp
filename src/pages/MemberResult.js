import React from "react";
import {SafeAreaView,View,Text,StyleSheet} from 'react-native';

const MemberResult =({route})=>{
    const {user}=route.params ;
    return(
 <SafeAreaView>
    <Text style={styles.message}>Kayıt Tamamlandı</Text>
     <Text style={styles.label}>Üye Adı: {user.userName } </Text>
     <Text style={styles.label}>Üye Soyadı:{user.userSurname}</Text>
     <Text style={styles.label}>Üye Yaşı: {user.userAge}</Text>
     <Text style={styles.label}>Üye E-posta: {user.userMail}</Text>
     <Text style={styles.label}>Üye Memleketi: {user.userHometown}</Text>
 </SafeAreaView>
    );
}
const styles= StyleSheet.create({
    label:{
        fontSize:20,
        fontWeight:'bold',
        margin:5
    },
    message:{
        fontSize:50,
       fontWeight:'bold',
       textAlign:'center',

    }
})
export default MemberResult; 