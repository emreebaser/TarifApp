import { Dimensions, StyleSheet } from "react-native";
const deviceSize=Dimensions.get('window')
export default StyleSheet.create({
    container:{
       
        flexDirection:'row',
        borderWidth:2,
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        margin:5,
        padding:5,
        borderColor:'#cabebb',
        backgroundColor:'#eceff1',
        
    },
    image:{
        borderRadius:40,
        height:80,
        width:80,
        resizeMode:'contain'
    },
    body_container:{
        
    justifyContent:'center'
       
    },
    text:{
        fontSize:20,
        alignContent:'center',
        fontStyle:'italic',
        
    }
})