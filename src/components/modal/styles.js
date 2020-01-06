import { StyleSheet } from 'react-native';
// custom modules
import {responsiveHeight, responsiveWidth } from '../../constants/dimensions';
// intreface style for no data found components
const styles = StyleSheet.create({
    mainModal:{
        marginTop:responsiveHeight(7)
    },
    ModalCrossView:{
        marginTop:responsiveHeight(6)
    },
    crossimages:{
        marginLeft:responsiveHeight(3),
        height:responsiveHeight(7),
        width:responsiveWidth(7)
    },
    boxView:{
      alignItems:'center',
      justifyContent:'center'
    },
    boxText:{
     fontSize:20,
     fontWeight:'600',
      justifyContent:'center',
    },
    boxImage:{
        height:responsiveHeight(22),
        width:responsiveWidth(37)
    },
    boxDetails:{
      textAlign:'center',
      fontSize:18,
      paddingTop:responsiveHeight(2),
      paddingHorizontal:responsiveHeight(7)
    },
    inviteTouch:{
        marginTop:responsiveHeight(7),
        padding:responsiveHeight(4),
        backgroundColor:'#484a58',
        width:'80%',
        borderRadius:10
    },
    inviteText:{
        color:'#fff',
        fontSize:24,
        fontWeight:'700',
        textAlign:'center'
    }
});

export default styles;
