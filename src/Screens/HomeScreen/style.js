import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex:1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    toggleButtonStyle:{
        width:40,
        height:40,
        borderRadius:20,
        position:'absolute',
        top:100,
        right:25,
        backgroundColor:'white',
        justifyContent:"center",
        alignItems:"center",
    }
   });
   export default styles;