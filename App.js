import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Overview, Profile, ProfilePage, Splash_screen_1, Splash_screen_2, Splash_screen_3 } from './Component/Screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainProfile() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <>
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Screen_1" component={Splash_screen_1} options={{ headerShown: false }} />
            <Stack.Screen name="Screen_2" component={Splash_screen_2} options={{ headerShown: false }} />
            <Stack.Screen name="Screen_3" component={Splash_screen_3} options={{ headerShown: false }} />
            <Stack.Screen name="Overview" component={Overview} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{headerTitle: 'Login', headerTitleAlign: 'center',}} />
            <Stack.Screen name="App" component={MainProfile} options={{ headerShown: false }} />
            {/* <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} /> */}
            {/* <Stack.Screen name="ProfilePage" component={ProfilePage} options={{headerTitle: 'Name', headerTitleAlign: 'center',}} /> */}
        </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App