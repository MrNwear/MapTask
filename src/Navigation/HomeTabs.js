import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Text,StyleSheet,TouchableOpacity,View} from 'react-native';
import { AccountScreen } from '../Screens/AccountScreen';
import { AddScreen } from '../Screens/AddScreen';
import { HistoryScreen } from '../Screens/HistoryScreen';
import { HomeScreen } from '../Screens/HomeScreen';
import { NotificationScreen } from '../Screens/NotificationScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

const Tab=createBottomTabNavigator();
const CustomButton=({children,onPress})=>{
    return(
        <TouchableOpacity style={{
            top:-30,
            justifyContent:'center',
            alignItems:'center',
            ...styles.shadow
        }}
        onPress={onPress}>
            <View style={{
                width:40,
            height:40,
            borderRadius:20,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'red'}}>
                <Icon name='add' style={{color:'#fff',fontSize:25}}/>
            </View>
        </TouchableOpacity>
    )
}
export const HomeTabs=()=>{
    const isNightMode=useSelector(state=>state.test.isNightMode);
   return(
       <Tab.Navigator
       
       screenOptions={({ route }) => {
            
        const IconName = { Home: 'compass',  History: 'map', Notification: 'notifications',Account:'person' };
        return {
            activeTintColor: '#F60081',
            tabBarStyle: {
              backgroundColor: isNightMode? '#000':'#fff',
              borderTopColor: 'transparent',
              padding:5,
              position:'absolute',
              bottom:25,
              left:25,
              right:25,
              borderRadius:25,
              height:70,
              ...styles.shadow
              
            },
            tabBarShowLabel:false,
            tabBarIcon: ({ focused }) => <Icon name={IconName[route.name]} style={{ color: focused ? 'red' : 'grey', fontSize: 22 }} />,
            }}}>
        <Tab.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
        <Tab.Screen name='History' component={HistoryScreen} options={{ headerShown: false }}/>
        <Tab.Screen name='Add' component={AddScreen}
         options={{ 
             headerShown: false,
             tabBarButton:(props)=><CustomButton {...props}/>
             }}/>
        <Tab.Screen name='Notification' component={NotificationScreen} options={{ headerShown: false }}/>
        <Tab.Screen name='Account' component={AccountScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>
        )
}

const styles=StyleSheet.create({
    shadow:{
        shadowColor:'black',
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    }
});