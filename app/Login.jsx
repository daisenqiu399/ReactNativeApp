import {View,Text} from 'react-native'
import Icon from '../assets/icons';
import BackButton from '../components/BackButton'
import { useRouter } from 'expo-router';


const Login=()=>{
    const router = useRouter();
    return(
        <View>
            <Text>Login</Text>
            <Text>Login</Text>
            <Text>Login</Text>
            <Text>Login</Text>
            <Text>Login</Text>
            <Icon name="lock" color={'red'} size={26} strokeWidth={1.6} />
            <View>
            <BackButton router={router} />
            </View>
           
        </View>
    )
}
export default Login