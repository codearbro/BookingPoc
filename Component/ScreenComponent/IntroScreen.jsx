import { Image, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'

const IntroScreen = ({logo, content, deskImg, pressed, arrow}) => {
  return (
    <View style={style.screen}>
        <View style={style.main}>
            <Image source={logo} />
            <Image source={deskImg} />
            <Image source={content} />
            <Pressable onPress={pressed}>
                <Image source={arrow}/>
            </Pressable>
        </View>
    </View>
  )
}

export default IntroScreen

const style = StyleSheet.create({
    screen: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
        height: '70%',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
  })