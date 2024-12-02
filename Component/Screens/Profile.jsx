import { ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../ScreenComponent/HomeHeader';
import HomeTopBoxes from '../ScreenComponent/HomeTopBoxes';
import HomeMember from '../ScreenComponent/HomeMember';
import HomeWorkspace from '../ScreenComponent/HomeWorkspace';
import HomeOffices from '../ScreenComponent/HomeOffices';

const Profile = ({navigation}) => {
  function openData() {
    console.log('clicked');
  }
  function testing() {
    navigation.navigate('ProfilePage');
  }
  function goToProfile() {
    console.log('go to profile');
  }
  function goToWorkspace() {
    console.log('go to workspace');
  }
  function goToOffice() {
    console.log('go to office');
  }
  return (
    <SafeAreaView style={style.screen}>
      <ScrollView>
        <HomeHeader testing={testing} />
        <HomeTopBoxes openData={openData} />
        <HomeMember goToProfile={goToProfile} />
        <HomeWorkspace goToWorkspace={goToWorkspace} />
        <HomeOffices goToOffice={goToOffice} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile

const style = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: 'white'
    },
})