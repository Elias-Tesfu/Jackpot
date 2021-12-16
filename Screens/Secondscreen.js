import React from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { DATA } from '../Data/DATA';

export default function Secondscreen() {
    const handleError = (e) => {
        console.log(e.nativeEvent.error);
    };

    return (
        <ImageBackground style={{ width: 'null', height: 'null' }} onError={handleError} resizeMode='cover' source={require('../Images/Frame.jpg')}>
            <View style={ styles.container }>
                <FlatList 
                    data={DATA}
                    renderItem={({item}) => 
                        <View>
                            <Image source={{uri: item.image}} resizeMode="cover" style={{ width: 340, height: 400, borderRadius: 5 }} />
                            <Text>{item.title}</Text>
                            <Text>{item.descriprion}</Text>
                        </View>
                    }
                    keyExtractor={item => item.id}
                />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: '#f1a30b',
        width: 'null',
        padding: 5,
        marginVertical: 4,
    },
    title: {
        fontSize: 32,
    },
})
