import {View,Text,StyleSheet,ScrollView,Pressable,TextInput,Alert} from 'react-native'
import React,{useEffect,useState} from 'react'
import {hp,wp} from '../../helpers/common'
import { useAuth } from '../../contexts/AuthContext'
import { theme } from '../../constants/theme'
import { Feather,FontAwesome,Ionicons,SimpleLineIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import ScreenWrapper from '../../components/ScreenWrapper'
import BackButton from '../../components/BackButton'
import * as ImagePicker from 'expo-image-picker';
import { updateUser } from '../../services/userServices'
import {getFilePath,getUserImageSrc,uploadFile} from '../../services/imageService'
import { Image } from 'expo-image';
import Header from '../../components/Header'
import Icon from '../../assets/icons'
import Input from '../../components/Input'

const EditProfile=()=>{
    const {user:currentUser,setUserData}=useAuth();
    const router=useRouter();
    const [profileModal,toggleProfileModal]=useState(false);
    const [loading,setLoading]=useState(false);
    const [user,setUser]=useState({
        name:'',
        phoneNumber:'',
        image:null,
        bio:'',
        address:'',
    });
    useEffect(()=>{
        if(currentUser){
            setUser({
                naem:currentUser.name||'',
                phoneNumber:currentUser.phoneNumber||'',
                image:currentUser.address||'',
                bio:currentUser.bio||'',
            });
        }
    },[currentUser]);

    const onPickImage=async()=>{
        let result=await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[4,3],
            quality:0.7,
        });
        if(!result.canceled){
            setUser({...user,image:result.assets[0]});
        }
    };

    const onSubmit=async ()=>{
        let userData={...user};
        let {name,phoneNumber,address,image,bio}=userData;
        if(!name||!phoneNumber||!address||!image||!bio){
            Alert.alert('Profile','Pleasefill all the fields');
            return;
        }
        setLoading(true);
        if(typeof image=='object'){
            let imageResult=await uploadFile('profiles',image?.uri,true);
            if(imageResult.success) userData.image=imageResult.data;
            else userData.image=null;
        }

        const res=await updateUser(currentUser?.id,userData);
        setLoading(false);
        if(res.success){
            setUserData({...currentUser,...userData});
            router.back();
        }
    }
    let imageSource=user.image&&typeof user?.image=='object'?user.image.uri:getUserImageSrc(user.image);
    return (
        <ScreenWrapper bg='white'>
          <View style={styles}>
          <Text>this is editProfile</Text>
          </View>
        </ScreenWrapper>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: wp(4)
    },  
    avatarContainer: {
      height: hp(14),
      width: hp(14),
      alignSelf: 'center'
    },
    avatar: {
      width: '100%', 
      height: '100%', 
      borderRadius: theme.radius.xxl*1.8,
      borderCurve: 'continuous',
      borderWidth: 1,
      borderColor: theme.colors.darkLight
    },
    cameraIcon: {
      position: 'absolute',
      bottom: 0,
      right: -10,
      padding: 8,
      borderRadius: 50,
      backgroundColor: 'white',
      shadowColor: theme.colors.textLight,
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.4,
      shadowRadius: 5,
      elevation: 7
    },
    form: {
      gap: 18,
      marginTop: 20,
    },
    input: {
      flexDirection: 'row',
      borderWidth: 0.4,
      borderColor: theme.colors.text,
      borderRadius: theme.radius.xxl,
      borderCurve: 'continuous',
      padding: 17,
      paddingHorizontal: 20,
      gap: 15
    },
    bio: {
      flexDirection: 'row',
      height: hp(15),
      alignItems: 'flex-start',
      paddingVertical: 15,
    }
  
    
  })
export default EditProfile;