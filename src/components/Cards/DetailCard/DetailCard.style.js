import {Dimensions, StyleSheet} from 'react-native';
const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
   
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    
    margin: 5,
    padding: 5,
  },
  image: {
    flex:1,
    backgroundColor:'black',
    width: 370,
    height: deviceSize.height / 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#B21A02',
  },
  area: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#B21A02',
  },
  seperator: {
    borderWidth: 0.8,
    borderBottomColor: 'gray',
    opacity: 0.5,
  },
  body_container: {
    flex: 1,
    justifyContent: 'center',
    margin: 3,
    padding: 3,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
  },
  instructions: {
    fontSize: 13,
  },

  button: {
    backgroundColor: 'red',
    height: 40,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop:10,
  },
  button_text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
