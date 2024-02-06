import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'
import SplashScreen from './src/screens/SplashScreen'
import ShopScreen from './src/screens/ShopScreen'
import ShopItemScreen from './src/screens/ShopItemScreen'
const App = () => {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false}}>
        <Stack.Screen  name="Splash" component={SplashScreen} />
        <Stack.Screen  name="Home" component={HomeScreen} />
        <Stack.Screen name='Shop' component={ShopScreen} />
        <Stack.Screen name='ShopItem' component={ShopItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App