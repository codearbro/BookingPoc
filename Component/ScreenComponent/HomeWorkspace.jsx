import { View, Text, Pressable, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { constant } from '../assets/constants'
import LoginBtn from './LoginBtn'

const HomeWorkspace = ({goToWorkspace}) => {
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
    function addNewLocation() {
        console.log('add new location');
    }
    return (
      <View>
      <View style={style.member}>
        <Text style={style.title}>Workspace Location</Text>
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
                  <Pressable key={index} style={style.memberBox} onPress={goToWorkspace} >
                      <Image style={style.image} source={ele.image} />
                  </Pressable>
              ))
          }
      </ScrollView>
      <View style={style.addBtnContainer}>
        <LoginBtn navigationToNext={addNewLocation} width={200}>+ Add Location</LoginBtn>
      </View>
      </View>
    )
}

export default HomeWorkspace

const style = StyleSheet.create({
    member: {
        paddingVertical: 30
    },
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
        width: 300,
        height: 200,
        marginRight: 20,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#007AFF',
        marginBottom: 15
    },
    image: {
      width: '100%',
      height: '100%',
    },
    addBtnContainer: {
        marginBottom: 20,
        alignItems: 'center'
    }
})