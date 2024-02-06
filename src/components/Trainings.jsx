import { View, Text, FlatList, Image,  Modal,  TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import BigCard from '../components/BigCard'
import popularTrainingData from '../data/PopularTrainingData'
import muscleBuildingData from '../data/MuscleBuildingExerciseData'
import Card from '../components/Card'
import LinearGradient from 'react-native-linear-gradient'
import ModalCard from '../components/ModalCard'
import { useNavigation } from '@react-navigation/native'

const Trainings = () => {
    const navigation = useNavigation();
    const [modalVisibility, setModalVisibility] = React.useState(false);
    const [modalData, setModalData] = React.useState(null);

    const handleModalClick = (data) => {
        setModalData(data)
        setModalVisibility(true)
    }

    return (
        <View >


            <Modal
                visible={modalVisibility}
                transparent

            >
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <LinearGradient colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.8)']}

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
                        onPress={() => {
                            setModalVisibility(false)
                            setModalData(null)
                        }}
                    >
                        <Text style={{
                            color: 'red',
                            fontSize: 30,
                            fontWeight: '800',
                            alignSelf: 'flex-end'
                        }}>X</Text>
                    </TouchableOpacity>
                    <ModalCard data={modalData} />
                </View>

            </Modal>

            
            <Animatable.View style={{
                alignItems: 'center',
                flexDirection: 'row',
                gap: 10,
            }}
                animation={'slideInRight'}
            >
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
                onPress={()=>navigation.navigate('Home')}
                >
                    <Text style={{
                        color: 'white',
                        fontWeight: '600'
                    }}>💪Trainings</Text>
                </TouchableOpacity>
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
                onPress={()=>navigation.navigate('Shop')}
                >
                    <Text style={{
                        color: 'white',
                        fontWeight: '600'
                    }}>🛍️ Shop</Text>
                </TouchableOpacity>
            </Animatable.View>
            <View
                style={{
                    marginTop: 10,
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
                marginTop: 10,
                marginLeft: 10
            }}>
                <Animatable.Text style={{
                    color: 'white',
                    fontWeight: '500',
                    fontSize: 24,
                    marginBottom: 5
                }}
                    animation={'slideInUp'}
                >Muscle Building Trainings 💪</Animatable.Text>

                <FlatList
                    style={{
                        height: '47%'
                    }}
                    data={muscleBuildingData}
                    renderItem={({ item, index }) => (
                        <Pressable onPress={() => handleModalClick(item)}>
                            <Card data={item} index={index} />
                        </Pressable>
                    )}
                    keyExtractor={(item, index) => `${index}muscleBuilding`}
                />
            </View>
        </View>
    )

}

export default Trainings