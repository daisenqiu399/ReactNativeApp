import {View,Text,StyleSheet} from 'react-native'
import React,{useRef} from 'react'
import { theme } from '../constants/theme'
import {actions,getContentCSS,RichEditor,RichToolbar} from 'react-native-pell-rich-editor'

const RichTextEditor=({
    initialValue,
    editorRef,
    onChange
})=>{
    return (
        <View styles={{minHeight:285}}>
           <RichToolbar
           actions={[
            actions.setStrikethrough,
            actions.removeFormat,
            actions.setBold,
            actions.setItalic,
            actions.insertOrderedList,
            actions.blockquote,
            actions.alignCenter,
            actions.alignRight,
            actions.code,
            actions.line,
            actions.heading1,
            actions.heading4,

           ]}
           iconMap={{
            [actions.heading1]:({tintColor})=><Text style={{color:tintColor}}>H1</Text>,
            [actions.heading4]:({tintColor})=><Text style={{color:tintColor}}>H4</Text>,
           }}
           style={styles.richBar}
           flatContainerStyle={styles.flatStyle}
           editor={editorRef}
           disabled={false}
           selectedIconTint={theme.colors.primaryDark}
           />
         <RichEditor
         ref={editorRef}
         containerStyle={styles.rich}
         editorStyle={styles.contentStyle}
         placeholder={"what's on your mind"}
         onChange={onChange}
         editorInitializedCallback={()=>{}}
         />
        </View>
    )
}

const styles=StyleSheet.create({
    rich:{
        minHeight:240,
        flex:1,
        borderWidth:1.5,
        borderTopWidth:0,
        borderBottomRightRadius:theme.radius.xl,
        borderBottomLeftRadius:theme.radius.xl,
        borderColor:theme.colors.gray,
        padding:5,
    },
    contentStyle:{
        color:theme.colors.textDark,
        placeholderColor:'gray',
    },
    richBar:{
        borderTopLeftRadius:theme.radius.xl,
        borderTopRightRadius:theme.radius.xl,
        backgroundColor:theme,colors,gray
    },
    flatStyle:{
        paddingHorizontal:8,
        gap:3,
    },
})

export default RichTextEditor;