import { View, Text, Pressable, ToastAndroid } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image } from 'react-native-animatable';
import * as Animatable from 'react-native-animatable'

import RazorpayCheckout from 'react-native-razorpay';
const ShopItemScreen = () => {
  const route = useRoute();
  const { itemName, itemDescription, itemImage, itemPrice } = route.params.data.item;

  const navigation = useNavigation();
  return (
    <View style={{
      flex: 1,
      // justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#dadada'
    }}>
      <Animatable.View style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        flexDirection: 'row',
        backgroundColor: 'black',
        width: '90%',
        height: 50,
        alignSelf: 'center',
        borderRadius: 30,
        position: 'absolute',
        top: 10,
        left: 20,
        zIndex: 99
      }}
        animation={'slideInDown'}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={{
            uri: "https://cdn-icons-png.flaticon.com/512/93/93634.png"
          }}
            style={{
              width: 30,
              height: 30,
              tintColor: 'white'
            }}
          />
        </Pressable>
        <Text style={{
          color: 'white',
          fontSize: 22,
          fontWeight: '700',
          alignSelf: 'center',
          width: '70%'
        }}>My Gym Store</Text>
      </Animatable.View>
      <View style={{
        width: '100%',
        height: '55%',
        backgroundColor: 'white',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Animatable.Image source={{
          uri: itemImage
        }}
          style={{
            width: '90%',
            height: '70%',
            aspectRatio: 1,
            alignItems: 'center'
          }}
          animation={'zoomIn'}
        /></View>
      <View style={{
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
        gap: 5
      }}>
        <Animatable.Text style={{
          color: 'black',
          fontSize: 24,
          fontWeight: '900',
          alignSelf: 'flex-start'
        }}
          animation={'slideInLeft'}
          duration={1600}
        >{itemName}</Animatable.Text>
        <Animatable.Text style={{
          color: '#388e3c',
          backgroundColor: '#a5d6a7',
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderRadius: 20,
          fontSize: 14,
          fontWeight: '600',
          alignSelf: 'flex-start'
        }}
          animation={'slideInLeft'}
          duration={1800}
        >{'MyGym - Exclusive Merchandise'}</Animatable.Text>
        <Animatable.Text style={{
          fontSize: 24,
          fontWeight: '800',
          color: '#1b5e20'
        }}
          animation={'slideInLeft'}
          duration={2000}
        >{itemPrice}</Animatable.Text>
        <Animatable.Text style={{
          color: 'black',
          fontSize: 16,
        }}
          animation={'slideInLeft'}
          duration={2200}
        >{itemDescription}</Animatable.Text>
      </View>
      <Animatable.View style={{
        width: '100%',
        position: 'absolute',
        bottom: 20
      }}
        animation={'slideInUp'}
      >
        <Pressable onPress={() => {
          var options = {
            description: 'Payments for MyGym App',
            image:  require("../assets/images/GymApp.png"),
            currency: 'INR',
            key: 'rzp_test_xKAZJf5piaB2NV', // Your api key
            amount: '100',
            name: 'MyGym App',
            prefill: {
              email: 'user@mygym.app',
              contact: '9191919191',
              name: 'User',
            },
            // theme: { color: '#F37254' },
            theme: { color: '#2e7d32' },
          };
          RazorpayCheckout.open(options)
            .then(data => {
              // handle success
              alert(`Success: ${data.razorpay_payment_id}`);
            })
            .catch(error => {
              // handle failure
              alert(`Error: ${error.code} | ${error.description}`);
            });
        }
        }
        >
        <View style={{
          backgroundColor: '#a5d6a7',
          padding: 15,
          width: '90%',
          alignSelf: 'center',
          borderRadius: 30
        }}>
          <Text style={{
            color: '#2e7d32',
            fontWeight: '900',
            fontSize: 20,
            alignSelf: 'center'
          }}>Buy Now @ {itemPrice}</Text>
        </View>
      </Pressable>
    </Animatable.View>
    </View >
  )
}

export default ShopItemScreen