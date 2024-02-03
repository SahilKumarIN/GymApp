import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {

    const navigation = useNavigation();
    const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);

    return (
        <View style={{
            flex: 1,
            //  alignItems: 'center', 
            //  justifyContent: 'center' 
        }}>
            <Image style={{
                width: '100%',
                height: '100%'
            }}
                source={{
                    uri: 'https://img.freepik.com/free-photo/athletic-shirtless-young-male-fitness-model-holds-dumbbell-with-light-isolated-dark-background_613910-20.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706659200&semt=ais'
                }} />
            <LinearGradient
                colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0.7)']}
                style={{
                    height: '100%',
                    width: '100%',
                    position: 'absolute'
                }}
            />
            <View style={{
                position: 'absolute',
                bottom: 20,
                marginLeft: 20,
            }}>
                <Animatable.Text style={{
                    color: 'white',
                    fontSize: 30,
                    fontWeight: '600',
                    letterSpacing: 2
                }} animation={'slideInUp'}>{'Get Fit,\nGet Strong,\nGet Healthy.'}</Animatable.Text>
                <Animatable.Text style={{
                    color: 'gray',
                    fontSize: 16,
                    fontWeight: 400,
                    marginTop: 10
                }} animation={'slideInUp'}>{'The hard days are the best because that’s when champions are made, so if you push through, you can push through anything.'}
                </Animatable.Text>
                <AnimatedBtn style={{
                    width: '90%',
                    height: 55,
                    alignSelf: 'center',
                    backgroundColor: '#43a047',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    marginTop: 30
                }} 
                animation={'slideInLeft'}
                onPress={()=>{
                    navigation.replace('Home')
                }}
                >
                    <Text style={{
                        color: 'white',
                        fontSize: 16,
                        fontWeight: '600'
                    }}>Get Started</Text>
                </AnimatedBtn>
            </View>
        </View>
    )

}

export default SplashScreen