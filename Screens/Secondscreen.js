import React from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { DATA } from '../Data/DATA';

export default function Secondscreen() {
    const handleError = (e) => {
        console.log(e.nativeEvent.error);
    };

    return (
        <ImageBackground style={ styles.imagebackground } onError={handleError} resizeMode='cover' source={require('../Images/Frame.jpg')}>
            <View style={ styles.container }>
                <FlatList 
                    data={DATA}
                    renderItem={({item}) =>
                        <View style={ styles.item }>
                            <Image source={{ uri: item.image }} resizeMethod='scale' style={ styles.image }/>
                            <Text style={ styles.title }>{ item.title }</Text>
                            <Text style={ styles.descriprion }>{ item.descriprion }</Text>
                        </View>
                    }
                />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imagebackground: {
        width: 'null',
        height: 'null'
    },
    container: {
        paddingHorizontal: 5,
    },
    item: {
        backgroundColor: '#FFFFFF99',
        marginVertical: 5,
        paddingBottom: 15,
        borderRadius: 15,
    },
    image: {
        width: 'null',
        height: 400,
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
        marginBottom: 10,
    },
    title: {
        fontSize: 32,
        fontWeight: '800',
        paddingHorizontal: 7,
        marginBottom: 10,
    },
    descriprion: {
        paddingHorizontal: 7,
    }
})
