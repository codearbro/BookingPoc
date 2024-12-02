import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProfilePage = () => {
  return (
    <SafeAreaView style={style.screen}>
      <Text>ProfilePage</Text>
    </SafeAreaView>
  )
}

export default ProfilePage

const style = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white'
    }
})