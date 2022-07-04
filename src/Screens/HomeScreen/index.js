import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {View ,TouchableOpacity ,FlatList,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeMode } from "../../redux/reducer";
import styles from "./style";
import {markersList} from '../../utils/dummyData';
import { Card } from "../../components/Card";
export const HomeScreen=()=>{
    const dispatch=useDispatch();
    const isNightMode=useSelector(state=>state.test.isNightMode);
    const handlePress=()=>{
        dispatch(changeMode());
    }
    
    
    const renderMarkers=({item})=>{
        return(
            <Marker coordinate={{
                latitude:item.latitude,
                longitude:item.longitude
            }}/>
        );
    }
    return(
        <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
           latitude: 35.78825,
           longitude: 140.4324,
           latitudeDelta: 0.015,
           longitudeDelta: 0.0121,
        }}
        userInterfaceStyle={isNightMode? 'light':'dark'}
     >
         <FlatList data={markersList} renderItem={renderMarkers} />
     </MapView>
        <TextInput placeholder="search here"  style={ [styles.inputStyle,{backgroundColor:isNightMode?'#000':'#fff'}]} placeholderTextColor={'grey'}/>
        <Card title='Hello' description='Card Component Description' imageURL='https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg'/>
        <TouchableOpacity style={[styles.toggleButtonStyle,isNightMode? {backgroundColor:'black'}:null]} onPress={handlePress}>
            <Icon name={isNightMode? 'cloudy-night':"sunny-outline"} style={{fontSize:20,color:'grey'}}/>
        </TouchableOpacity>
   </View>
    )
}