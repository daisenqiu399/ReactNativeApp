import { View, Text, StyleSheet, Pressable, ActivityIndicator } from 'react-native'
import React from 'react'
import { hp } from '../helpers/common'
import { theme } from '../constants/theme'
import Loading from './Loading'

const Button = ({
    buttonStyle,
    textStyle,
    title = '',
    onPress = () => { },
    loading = false,
    hasShadow = true,
}) => {
    const shadowStyle = {
        shadowStyleColor: theme.colors.dark,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4
    }
    if (loading) {
        return (
            <View style={[styles.button, buttonStyle, { backgroundColor: 'white' }]}>
                <Loading />
            </View>
        )
    }
    return (
        <View>
            <Pressable onPress={onPress} style={[styles.button, buttonStyle, hasShadow && shadowStyle]}>
                <Text style={[styles.text, textStyle]}>{title}</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.primary,
        height: hp(0.6),
        justifyContent: 'center',
        borderCurve: 'continous',
        boderRadius: theme.radius.xl,
    },
    text: {
        fontSize: hp(2.5),
        color: 'white',
        fontWeight: theme.fonts.bold
    }
})
export default Button;