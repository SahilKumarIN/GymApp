import { View, Text , Image } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
const HeaderComponent = () => {
  return (
    <View style={{
        width: '95%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 10
      }}>
        <View>
          <Animatable.Text style={{
            color: '#a2a2a2',
            fontSize: 16,
          }}
            animation={'slideInLeft'}
          >Hello {'User'} ,</Animatable.Text>
          <Animatable.Text style={{
            color: 'white',
            fontSize: 20,
            fontWeight: '500'
          }}
            animation={'slideInLeft'}
          >Welcome Back!</Animatable.Text>
        </View>
        <Animatable.View style={{
          backgroundColor: 'gray',
          borderRadius: 25,
          width: 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center'
        }}
          animation={'slideInRight'}
        >
          <Image source={{
            uri: 'https://cdn-icons-png.freepik.com/512/6645/6645163.png'
          }}
            style={{
              width: '50%',
              height: '50%',
              tintColor: 'white'
            }}
          />
        </Animatable.View>
      </View>
      
  )
}

export default HeaderComponent