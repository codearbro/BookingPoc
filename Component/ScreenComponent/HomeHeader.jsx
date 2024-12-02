import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'

const HomeHeader = ({testing}) => {
  return (
    <View style={style.container}>
      <View style={style.textContainer}>
        <Text style={style.nameText}>Hi, Yash Gupta</Text>
        <Text style={style.positionText}>Super Admin</Text>
      </View>
      <Pressable onPress={testing}>
      <Image
        source={'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw3gciP11YCy0W5LtYw1vX2e&ust=1732969890921000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICtj4jGgYoDFQAAAAAdAAAAABAE' }
        style={style.image}
        />
      </Pressable>
    </View>
  )
}

export default HomeHeader

const style = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      backgroundColor: 'white'
    },
    textContainer: {
      flex: 1, 
    },
    nameText: {
      fontSize: 24, 
      fontWeight: 'bold',
      color: '#333', 
    },
    positionText: {
      fontSize: 16,
      color: '#666', 
      marginTop: 4, 
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 30,
      borderWidth: 2,
      borderColor: '#007AFF',
    },
})