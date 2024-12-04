import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProfilePage = () => {
  return (
    <SafeAreaView style={style.screen}>
      <View>
        <Image source={'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw3gciP11YCy0W5LtYw1vX2e&ust=1732969890921000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICtj4jGgYoDFQAAAAAdAAAAABAE'} />
      </View>
    </SafeAreaView>
  )
}

export default ProfilePage

const style = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'red'
    }
})