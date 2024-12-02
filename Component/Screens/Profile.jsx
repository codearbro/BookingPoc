import { Text, StyleSheet, View, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = ({navigation}) => {
    function testing() {
        navigation.navigate('ProfilePage');
    }
  return (
    <SafeAreaView style={style.screen}>
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
    </SafeAreaView>
  )
}

export default Profile

const style = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'white'
        // backgroundColor: '#f8f9fa', 
        // borderBottomWidth: 1,
        // borderBottomColor: '#ddd',
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
      }
})