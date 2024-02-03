import { View, Text,Image } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'


const ModalCard = (props) => {

  const {image , name , description} = props.data ;
  return (
    <Animatable.View
      style={{
        width: '90%',
        height: '60%',
        backgroundColor: 'white',
        borderRadius: 30,
        overflow: 'hidden'
      }}
      animation={'zoomIn'}
    >
      
      <Image source={{
        uri: image
      }}
      style={{
        height: '60%',
        width: '100%',
      }}
      />
      <Text style={{
        fontWeight: '800',
        fontSize: 28,
        color: 'black',
        marginTop: 10
      }}>{name}</Text>
      <Text style={{
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 10
      }}>{description}</Text>

     
    </Animatable.View>
  )
}

export default ModalCard