
import { StyleSheet,Dimensions } from 'react-native';
// custom modules
import {responsiveHeight, responsiveWidth } from '../../constants/dimensions';
// intreface style for no data found components
const styles = StyleSheet.create({

    mainComponent:{
        flex:1,
        height:Dimensions.get('window').height,
        width:Dimensions.get('window').width
    },
    firstView:{
        flex:0
    },
    secondView:{
        flex:0
    },
    lastView:{
        flex:0
    },
    Logo:{
        
    },
    usernameView:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        backgroundColor:'#fff',
       marginVertical:responsiveHeight(3),
        padding:10,
        marginHorizontal:responsiveWidth(8),
        borderRadius:20,
        borderColor:'#000',
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 20,
    },
    userIcons:{
        flex:1,
        height:responsiveHeight(2.5),
        width:responsiveWidth(5)
    },
    userTextInput:{
       
        flex:4
    },
    SinupButton:{
        backgroundColor:'#5ec8d9',
        marginVertical:responsiveHeight(2.5),
        marginHorizontal:responsiveHeight(4),
        padding:responsiveHeight(1),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        borderColor:'#000',
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 20,
      },
      SinupText:{
          fontSize:20,
          color:'#fff'
      },
      SinupTextAc:{
          textAlign:'center',
          margin:responsiveHeight(1),
          fontSize:16
      },
      OhmView:{
          marginTop:responsiveHeight(10),
          marginBottom:responsiveHeight(3),
          backgroundColor:'#FFF',
          padding:responsiveHeight(2),
          alignItems:'center', 
          justifyContent:'center',
        alignSelf:'center',
          borderColor:'#000',
          shadowColor: '#000000',
          shadowOffset: {
          width: 0,
          height: 3
          },
          shadowRadius: 5,
          shadowOpacity: 1.0,
          elevation: 20,
          borderRadius: 50,
            width: 100,
            height: 100, 
           
      },
      OhmText:{
          color:'#fff',
          fontSize:28,
          fontStyle:'italic'

      },
     
});

export default styles;
