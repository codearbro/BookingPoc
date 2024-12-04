import { View, Text, Pressable, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { constant } from '../assets/constants'
import LoginBtn from './LoginBtn'

const HomeOffices = ({goToOffice}) => {
    const memberData = [
        {
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw3gciP11YCy0W5LtYw1vX2e&ust=1732969890921000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICtj4jGgYoDFQAAAAAdAAAAABAE',
            type: 'Entire House',
            name: 'Hunting beach banglow',
            price: 250,
            rating: 4.65
        },
        {
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw3gciP11YCy0W5LtYw1vX2e&ust=1732969890921000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICtj4jGgYoDFQAAAAAdAAAAABAE',
            type: 'Entire House',
            name: 'Hunting beach banglow',
            price: 250,
            rating: 4.65
        },
        {
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw3gciP11YCy0W5LtYw1vX2e&ust=1732969890921000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICtj4jGgYoDFQAAAAAdAAAAABAE',
            type: 'Entire House',
            name: 'Hunting beach banglow',
            price: 250,
            rating: 4.65
        },
    ]
    function addNewOffice() {
        console.log('add office');
    }
    return (
      <View>
      <View style={style.member}>
        <Text style={style.title}>Offices</Text>
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
                  <Pressable key={index} style={style.memberBox} onPress={goToOffice} >
                      <Image style={style.image} source={ele.image} />
                      <Text style={style.type}>{ele.type}</Text>
                      <Text style={style.name}>{ele.name}</Text>
                      <View style={{width: '100%', paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                      <Text style={style.price}>${ele.price}/Day</Text>
                      <Text style={style.price}>⭐{ele.rating}</Text>
                      </View>
                  </Pressable>
              ))
          }
      </ScrollView>
      <View style={style.addBtnContainer}>
        <LoginBtn navigationToNext={addNewOffice} width={200}>+ Add Office</LoginBtn>
      </View>
      </View>
    )
}

export default HomeOffices

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
        width: 300,
        height: 350,
        justifyContent: 'space-between',
        paddingVertical: 28,
        marginRight: 25,
        marginBottom: 10
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#007AFF',
      marginBottom: 15
    },
    type: {
        fontSize: 19
    },
    name: {
        fontSize: 22
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    addBtnContainer: {
        marginBottom: 20,
        alignItems: 'center'
    }
})