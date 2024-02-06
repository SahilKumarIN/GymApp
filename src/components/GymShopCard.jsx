import { View, Text, Image } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
const GymShopCard = (props) => {
    const {itemName , itemDescription , itemImage , itemPrice} = props.data;
    const {index} = props ;
  return (
    <Animatable.View style={{
        width: '95%',
        // height: 100,
        backgroundColor: 'gray',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 20,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    }}
    animation={'zoomIn'}
    duration={(1000+(index*200))}
    key={index+"GymShopItem"}
    >
        <View style={{
            marginRight: 10,
            width: 80,
            height: 80,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            borderRadius: 10
        }}>
            <Image source={{
                uri: itemImage
            }}
            style={{
                width: 60,
                height: 60,
                aspectRatio: 1
            }}
            />
        </View>
        <View style={{
            gap: 2,
            width: '80%'
        }}>
      <Text style={{
        fontSize: 22,
        fontWeight: '800',
        color: 'white'
      }}>{itemName}</Text>
      <Text style={{
        fontSize: 16,
        fontWeight: '500',
        color: '#dadada',
        width: '90%'
      }} 
      numberOfLines={3}>{itemDescription}</Text>
      <Text style={{
        fontSize: 20,
        fontWeight: '900',
        color: 'white',
        fontFamily: 'cursive'
      }}>{itemPrice}</Text>
      
      </View>
    </Animatable.View>
  )
}

export default GymShopCard