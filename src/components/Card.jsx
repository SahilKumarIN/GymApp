import { View, Text, Image } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'

const Card = (props) => {

    const index = props.index
    const {name , description , image} = props.data
    return (
        <Animatable.View style={{
            width: '95%',
            minHeight: 100,
            backgroundColor: 'gray',
            alignSelf: 'center',
            marginTop: 10,
            marginBottom: 10,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            padding: 10,
            overflow: 'hidden'
        }}
        key={`${index}muscleBuilding`}
        animation={'zoomIn'}
        duration={(1000+(index*200))}
        >
            <View
            style={{
                width: 80,
                height: 80,
                marginRight: 10
            }}
            >
                <Image
                style={{
                    width: '100%',
                    height: '100%',
                    
                    borderRadius: 10
                }}
                source={{
                    uri: image
                }} />
            </View>
            <View style={{
                width: '70%'
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 22,
                    fontWeight: '600',
                }}>{name}</Text>
                <Text style={{
                    color: '#f1f1f1',
                    fontSize: 16,
                    fontWeight: '500',
                    
                    marginRight: 10
                }}
                numberOfLines={3}
                textBreakStrategy='highQuality'
                >{description.substring(description.indexOf(" ")+1)}</Text>
            </View>
        </Animatable.View>
    )
}

export default Card