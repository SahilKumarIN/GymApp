import { View, Text, } from 'react-native'
import React from 'react'

import HeaderComponent from '../components/Header'
import Trainings from '../components/Trainings'

const HomeScreen = () => {

  return (
    <View style={{
      backgroundColor: 'black',
      flex: 1
  }}>
    <HeaderComponent />
    <Trainings />
    </View>
  )
    
}

export default HomeScreen