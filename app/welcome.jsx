import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Pressable} from 'react-native';
import React,{useState} from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ScreenWrapper from '../components/ScreenWrapper';
import { StatusBar } from 'expo-status-bar';
import {Octicons} from "@expo/vector-icons";
import {hp,wp} from '../helpers/common';
import { theme } from '../constants/theme';
import { useReducer } from 'react';
import Button from '../components/Button';
import { useRouter } from 'expo-router';


const WelcomPage=()=>{
    const router=useRouter();
    return(
       <ScreenWrapper bg={'white'}>
        <StatusBar style='dark'/>
        <Image style={styles.welcomeImage} resizeMode="contain" source={require('../assets/images/welcome.png')}/>

      

       </ScreenWrapper>
    )
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: 'white',
      paddingHorizontal: wp(5)
    },
    welcomeImage: {
      height: hp(30),
      width: wp(100),
      alignSelf: 'center',
    },
    title: {
      color: theme.colors.text,
      fontSize: hp(4),
      textAlign: 'center',
      fontWeight: theme.fonts.extraBold
    },
    punchline: {
      textAlign: 'center',
      paddingHorizontal: wp(10),
      fontSize: hp(1.7),
      color: theme.colors.text
    },
    footer: {
      gap: 30,
      width: '100%',
    },
   
    bottomTextContainer:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 5,
    },
    loginText: {
      textAlign: 'center',
      color: theme.colors.text,
      fontSize: hp(1.6)
    },
  })
export default WelcomPage