import React from "react";
import {TouchableOpacity ,Text,Image,View} from 'react-native';
import styles from "./style";
import { useSelector } from 'react-redux';

export const Card=(props)=>{
    const {imageURL,title,description}=props;
    const isNightMode=useSelector(state=>state.test.isNightMode);
    return(
        <TouchableOpacity style={[styles.Container,{backgroundColor:isNightMode? '#000':'#fff',}]}>
            <Image source={{uri:imageURL}} style={styles.imageStyle}/>
            <View style={styles.TextWrapper}>
                <Text style={[styles.titleStyle,{color:isNightMode? '#fff':'#000'}]}>{title}</Text>
                <Text style={{color:'grey'}}>{description}</Text>
            </View>
        </TouchableOpacity>
    );
}