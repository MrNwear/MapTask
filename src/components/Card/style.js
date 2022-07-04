import {StyleSheet} from 'react-native';
const styles=StyleSheet.create({
    Container:{
        flexDirection:'row',
        position:'absolute',
        right:25,
        left:25,
        bottom:100,
        borderRadius:25,
        height:120,
        padding:10
    },
    imageStyle:{
        height:80,
        width:80,
        borderRadius:20,
        margin:8,
    },
    TextWrapper:{
        justifyContent:'space-evenly',
        flex:1,
        marginVertical:10,
    },
   titleStyle:{
    fontWeight:'700',
    fontSize:22
   }
});
export default styles;