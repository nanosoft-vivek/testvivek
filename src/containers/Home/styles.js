import { StyleSheet } from 'react-native';

// custom modules

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
     alignSelf: 'stretch',
      flexDirection: 'row',
       marginVertical: 10,
          marginHorizontal: 1,
  },
  Textfont: {
    fontSize: 14,
  },
  homeView:{
    flex: 1, 
    alignSelf: 'stretch'
  },
  HomeTop: {
    flexDirection: 'row' ,
     marginHorizontal:4
  },
  HomeBottom: {
    flex: 1, 
    justifyContent:'center'
  }
  
});

export default styles;
