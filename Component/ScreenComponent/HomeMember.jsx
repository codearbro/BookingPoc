import { View, Text, Pressable, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { constant } from '../assets/constants'

const HomeMember = ({goToProfile}) => {
    const memberData = [
    {
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw3gciP11YCy0W5LtYw1vX2e&ust=1732969890921000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICtj4jGgYoDFQAAAAAdAAAAABAE',
        name: 'Yash Gupta',
        position: 'Software Developer'
    },
    {
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw3gciP11YCy0W5LtYw1vX2e&ust=1732969890921000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICtj4jGgYoDFQAAAAAdAAAAABAE',
        name: 'Suraj Verma',
        position: 'Software Developer'
    },
    {
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw3gciP11YCy0W5LtYw1vX2e&ust=1732969890921000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICtj4jGgYoDFQAAAAAdAAAAABAE',
        name: 'Shivam Kountey',
        position: 'Software Developer'
    },
    {
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw3gciP11YCy0W5LtYw1vX2e&ust=1732969890921000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICtj4jGgYoDFQAAAAAdAAAAABAE',
        name: 'Prashant Kumar',
        position: 'Software Developer'
    },
    {
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw3gciP11YCy0W5LtYw1vX2e&ust=1732969890921000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICtj4jGgYoDFQAAAAAdAAAAABAE',
        name: 'Vaibhav Yadav',
        position: 'Software Developer'
    },
]
  return (
    <View>
    <View style={style.member}>
      <Text style={style.title}>Members</Text>
      <View style={style.content}>
        <Text style={style.contentLines}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <Pressable>
          <Text style={style.contentLink}>View All</Text>
        </Pressable>
      </View>
    </View>
    <ScrollView horizontal={true} style={style.members}>
        {
            memberData.map((ele, index) => (
                <Pressable key={index} style={style.memberBox} onPress={goToProfile} >
                    <Image style={style.image} source={ele.image} />
                    <Text style={style.name}>{ele.name}</Text>
                    <Text style={style.position}>{ele.position}</Text>
                </Pressable>
            ))
        }
    </ScrollView>
    </View>
  )
}

export default HomeMember

const style = StyleSheet.create({
    title: {
      fontSize: 30,
      fontWeight: 'bold'
    },
    content: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10
    },
    contentLines: {
      width: '60%',
      fontSize: 17
    },
    contentLink: {
      fontSize: 17,
      color: constant.blue, 
      textDecorationLine: 'underline'
    },
    memberBox: {
        width: 200,
        height: 250,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 28
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 60,
      borderWidth: 2,
      borderColor: '#007AFF',
      marginBottom: 15
    },
    name: {
        fontSize: 20
    },
    position: {
        fontSize: 18
    }
})