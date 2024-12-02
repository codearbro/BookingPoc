import React from 'react'
import logo from '../assets/splash-screen-1/logo.png';
import deskImg from '../assets/splash-screen-1/intro-desk-1.png';
import content from '../assets/splash-screen-1/content-1.png'
import arrow from '../assets/splash-screen-1/right-arrow.png';
import IntroScreen from '../ScreenComponent/IntroScreen';

const Splash_screen_1 = ({navigation}) => {
    function navigationToNext() {
        navigation.navigate('Screen_2');
    }
  return (
    <IntroScreen logo={logo} content={content} deskImg={deskImg} pressed={navigationToNext} arrow={arrow} />
  )
}

export default Splash_screen_1