import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import small_logo from '../assets/splash-screen-1/small-logo.png'
import over_text from '../assets/splash-screen-1/over-text.png' 
import over_tag from '../assets/splash-screen-1/over-tag.png'
import over_desk from '../assets/splash-screen-1/over-desk.png'
import LoginBtn from '../ScreenComponent/LoginBtn'

const Overview = ({navigation}) => {
    function navigationToNext() {
        navigation.navigate('Login');
    }
  return (
    <View style={style.screen}>
      <View style={style.main}>
        <Image source={small_logo} />
        <View style={[style.main,{height: '80%'}]}>
            <Image source={over_text}/>
            <Image source={over_tag}/>
            <Image source={over_desk}/>
            {/* <Pressable style={style.btn} onPress={navigationToNext}>
                <Text style={style.text}>Admin</Text>
            </Pressable>
            <Pressable style={[style.btn, {backgroundColor: 'white'}]} onPress={navigationToNext}>
                <Text style={[style.text, {color: 'black'}]}>User</Text>
            </Pressable> */}
            <LoginBtn navigationToNext={navigationToNext}>Admin</LoginBtn>
            <LoginBtn navigationToNext={navigationToNext} backgroundColor={'white'} textcolor={'black'}>User</LoginBtn>
        </View>
      </View>
    </View>
  )
}

export default Overview

const style = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    main: {
        width: '100%',
        height: '70%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    // btn: {
    //     width: 350,
    //     height: 50,
    //     backgroundColor: '#00B8E4',
    //     borderRadius: 10,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    // text: {
    //     fontSize: 20,
    //     color: 'white'
    // }
})