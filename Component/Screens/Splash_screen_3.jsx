import React from 'react'
import logo from '../assets/splash-screen-1/logo.png';
import deskImg from '../assets/splash-screen-1/intro-desk-3.png';
import content from '../assets/splash-screen-1/content-3.png'
import start from '../assets/splash-screen-1/start.png';
import IntroScreen from '../ScreenComponent/IntroScreen';

const Splash_screen_3 = ({navigation}) => {
    function navigationToNext() {
      navigation.navigate("Overview");
    }
  return (
    <IntroScreen logo={logo} content={content} deskImg={deskImg} pressed={navigationToNext} arrow={start} />
  )
}

export default Splash_screen_3