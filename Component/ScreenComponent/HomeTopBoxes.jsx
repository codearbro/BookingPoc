import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { constant } from '../assets/constants'

const HomeTopBoxes = ({openData}) => {
  return (
    <View style={style.boxArea}>
      <Pressable onPress={openData} style={[style.box,{width: '55%'}]}>
        <Text style={style.boxNum}>50</Text>
        <Text style={style.boxName}>customers ˅</Text>
      </Pressable>
      <Pressable onPress={openData} style={[style.box,{width: '40%'}]}>
        <Text style={style.boxNum}>20</Text>
        <Text style={style.boxName}>Staff ˅</Text>
      </Pressable>
    </View>
  )
}

export default HomeTopBoxes

const style = StyleSheet.create({
    boxArea: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginVertical: 37,
    },
    box: {
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: 'space-around',
      backgroundColor: constant.blueBackground,
      paddingVertical: 25,
      borderRadius: 15
    },
    boxNum: {
      fontSize: 50,
      fontWeight: 'bold',
      color: constant.blue
    },
    boxName: {
      fontSize: 22,
      fontWeight: 'medium'
    },
})