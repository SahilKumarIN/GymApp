import { View, Text, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import * as Animatable from 'react-native-animatable'

const BigCard = (props) => {
    const {name , description , image} = props.data
    const index = props.index
  return (
    <Animatable.View style={{
        width: 300,
        height: 200,
        // alignSelf: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 10,
        marginRight: 10,
        marginLeft: 5
    }}
    key={`${index}popularTraining`}
    animation={'slideInUp'}
    duration={(1000+(index*200))}
    >
        <LinearGradient
            colors={['rgba(255,255,255,0.3)','rgba(255,255,255,0.4)','rgba(255,255,255,0.5)']}
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: 10
            }}
       />
        <Image source={{
            uri: image
        }}
        style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            zIndex: -1,
            borderRadius: 10,
            overflow: 'hidden'
        }} />
        <View style={{
            position: 'absolute',
            bottom: 10
        }}>
      <Text style={{
        color: 'black',
        fontSize: 24,
        fontWeight: '800',
        marginLeft: 5
      }}>{name}</Text>
      <Text style={{
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
        marginLeft: 5
      }}>{description}</Text>
      </View>
    </Animatable.View>
  )
}

export default BigCard