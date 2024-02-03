import { View, Text, FlatList, Image,  Modal,  TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import BigCard from '../components/BigCard'
import popularTrainingData from '../data/PopularTrainingData'
import muscleBuildingData from '../data/MuscleBuildingExerciseData'
import Card from '../components/Card'
import LinearGradient from 'react-native-linear-gradient'
import ModalCard from '../components/ModalCard'

const HomeScreen = () => {

  const [modalVisibility, setModalVisibility] = React.useState(false);
  const [modalData , setModalData] = React.useState(null);

  const handleModalClick = (data)=>{
    setModalData(data)
    setModalVisibility(true)
  } 

  return (
    <View style={{
      backgroundColor: 'black',
      flex: 1
    }}>


      <Modal
        visible={modalVisibility}
        transparent

      >
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <LinearGradient colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0.7)']}

            style={{
              width: '100%',
              height: '100%',
              position: 'absolute'
            }}
          />
          <TouchableOpacity 
          style={{
            width: '80%'
          }}
            onPress={()=>{
              setModalVisibility(false)
              setModalData(null)
            }}
          >
            <Text style={{
              color: 'red',
              fontSize: 34,
              fontWeight: '800',
              alignSelf: 'flex-end'
            }}>X</Text>
          </TouchableOpacity>
          <ModalCard data={modalData} />
        </View>

      </Modal>

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
      <Animatable.View style={{
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
      }}
        animation={'slideInRight'}
      >
        <View style={{
          backgroundColor: '#43a047',
          padding: 10,
          minWidth: 80,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          marginTop: 10,
          marginLeft: 20
        }}>
          <Text style={{
            color: 'white',
            fontWeight: '600'
          }}>💪Trainings</Text>
        </View>
        <View style={{
          backgroundColor: 'gray',
          padding: 10,
          minWidth: 80,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          marginTop: 10,
          marginLeft: 20
        }}>
          <Text style={{
            color: 'white',
            fontWeight: '600'
          }}>🛍️ Shop</Text>
        </View>
      </Animatable.View>
      <View
        style={{
          marginTop: 20,
          marginLeft: 10
        }}>
        <Animatable.Text style={{
          color: 'white',
          fontWeight: '500',
          fontSize: 24
        }}
          animation={'slideInUp'}
        >Popular Trainings 🔥</Animatable.Text>
        <FlatList
          horizontal={true}
          data={popularTrainingData}
          renderItem={({ item, index }) => (
            <Pressable onPress={() => handleModalClick(item)}>
              <BigCard data={item} index={index} />
            </Pressable>
          )}
          keyExtractor={(item, index) => `${index}popularTraining`}
        />



      </View>
      <View style={{
        marginTop: 20,
        marginLeft: 10
      }}>
        <Animatable.Text style={{
          color: 'white',
          fontWeight: '500',
          fontSize: 24
        }}
          animation={'slideInUp'}
        >Muscle Building Trainings 💪</Animatable.Text>

        <FlatList
          style={{
            height: '50%'
          }}
          data={muscleBuildingData}
          renderItem={({ item, index }) => (
            <Pressable onPress={()=>handleModalClick(item)}>
            <Card data={item} index={index} />
            </Pressable>
          )}
          keyExtractor={(item, index) => `${index}muscleBuilding`}
        />
      </View>
    </View>
  )
}

export default HomeScreen