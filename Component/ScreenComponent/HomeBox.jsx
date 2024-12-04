import { Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const HomeBox = ({openData, width}) => {
  return (
    <Pressable onPress={openData} style={[style.box,{width: width}]}>
        <Text style={style.boxNum}>20</Text>
        <Text style={style.boxName}>Staff ˅</Text>
      </Pressable>
  )
}

export default HomeBox

const style = StyleSheet.create({
    box: {},
    boxNum: {},
    boxName: {}
})