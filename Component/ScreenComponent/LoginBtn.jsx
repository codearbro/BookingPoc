import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { constant } from '../assets/constants'

const LoginBtn = ({children, navigationToNext, backgroundColor, textcolor, width}) => {
  return (
    <Pressable style={[style.btn, backgroundColor && {backgroundColor}, width && {width}]} onPress={navigationToNext}>
        <Text style={[style.text, textcolor && {color: textcolor}]}>{children}</Text>
    </Pressable>
  )
}

export default LoginBtn

const style = StyleSheet.create({
    btn: {
        width: 350,
        height: 50,
        backgroundColor: constant.blue,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: 'white'
    }
})