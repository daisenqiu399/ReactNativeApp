import {View,Text} from 'react-native'
import React from 'react'
import Avatar from '../../components/Avatar'
import { useAuth } from '../../contexts/AuthContext'
import { hp, wp } from '../../helpers/common'
import { theme } from '../../constants/theme'

const profiy=()=>{
    const {user, setAuth} = useAuth();
    return (
        <View>
        <Text>home</Text>
        <Text>home</Text>
        <Text>home</Text>
        <Text>home</Text>
        <Text>home</Text>
        <Text>home</Text>
        <Text>home</Text>
        <Text>homejcjhcbjhcbh</Text>
        <Avatar 
                uri={user?.image} 
                size={hp(4.3)}
                rounded={theme.radius.sm}
                style={{borderWidth: 2}}
              />
    </View>
    )
   
}

export default profiy;