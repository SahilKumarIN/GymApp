import { View, Text ,TouchableOpacity, FlatList, Pressable} from 'react-native'
import React from 'react'
import HeaderComponent from '../components/Header'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import GymShopData from '../data/GymShopData'
import Card from '../components/Card'
import GymShopCard from '../components/GymShopCard'


const ShopScreen = () => {

  const navigation = useNavigation();
  return (
    <View style={{
      backgroundColor: 'black',
      flex: 1
  }}>
    <HeaderComponent />
    <Animatable.View style={{
                alignItems: 'center',
                flexDirection: 'row',
                gap: 10,
            }}
                animation={'slideInRight'}
            >
                <TouchableOpacity style={{
                    backgroundColor: 'gray',
                    padding: 10,
                    minWidth: 80,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                    marginTop: 10,
                    marginLeft: 20
                }}
                onPress={()=>navigation.navigate('Home')}
                >
                    <Text style={{
                        color: 'white',
                        fontWeight: '600'
                    }}>💪Trainings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    
                    backgroundColor: '#43a047',
                    padding: 10,
                    minWidth: 80,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                    marginTop: 10,
                    marginLeft: 20
                }}
                onPress={()=>navigation.navigate('Shop')}
                >
                    <Text style={{
                        color: 'white',
                        fontWeight: '600'
                    }}>🛍️ Shop</Text>
                </TouchableOpacity>
            </Animatable.View>
            <Animatable.Text style={{
              color: 'white',
              fontSize: 22,
              fontWeight: '800',
              marginLeft: 10,
              marginTop: 10
            }}>
              {'Shop Our Latest Products😀'}
            </Animatable.Text>
            <FlatList 
              data={GymShopData}
              renderItem={({item , index})=>(
              <Pressable onPress={()=>navigation.navigate('ShopItem' , {data:{item}})}>
                
                <GymShopCard data={item} index={index} />
                </Pressable>
                )}

              keyExtractor={({item,index})=>`${index}GymShopItem`}
            />
    </View>
  )
}

export default ShopScreen