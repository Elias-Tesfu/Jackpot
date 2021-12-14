import React, { useState } from 'react'
import { Image, Button, ImageBackground, SafeAreaView, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import CountDown from 'react-native-countdown-component';
import TeleBirr from '../Images/TeleBirr.png';

export default function Homescreen() {
    const [randomNumber, setRandomNumber] = useState(0);


    const handleError = (e) => {
        console.log(e.nativeEvent.error);
    };

    const randomNumberGenerator = () => {
        const randomNumber = Math.floor((Math.random() * 1000000000) + 1);
        setRandomNumber(randomNumber);
        console.log("The Random Number Generated is - " + randomNumber);
    };

    return (
        <ImageBackground style={{ width: '100%', height: '100%' }} onError={handleError} resizeMode='stretch' source={require('../Images/Frame.jpg')}>
            <SafeAreaView>
                <View style={styles.container}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, height: 100 }}>
                                <Text style={ styles.jackpot }>JACKPOT</Text>
                                <Text style={ styles.textGoesHere }>Text goes here</Text>
                            </View>
                            <View style={{  height: 100 }}>
                                <MaterialCommunityIcons name="account-circle-outline" size={50} color="white" />
                            </View>
                        </View>

                        <View style={{ paddingVertical: 25 }}>
                            <CountDown
                                until={60 * 100 * 60} 
                                size={40}
                                onFinish={() => Alert.alert('JACKPOT', 'Finished')}
                                digitStyle={{backgroundColor: '#FFF'}}
                                timeToShow={['D', 'H', 'M']}
                                onPress={() => Alert.alert('JACKPOT', 'Created by Elias Tesfu') }
                            />
                        </View>

                        <View style={{ alignItems: 'center', paddingVertical: 15 }}>
                            <View style={ styles.lottoNum }>
                                <Text style={{ fontSize: 25, letterSpacing: 3 }}>{randomNumber} | <TouchableOpacity onPress={randomNumberGenerator}><FontAwesome name="repeat" size={24} color="white" /></TouchableOpacity> </Text>
                            </View>

                            <View style={ styles.Birr }>
                                <Text style={{ fontWeight: 'bold', fontSize: 23, letterSpacing: 3.5 }}> <FontAwesome5 name="coins" size={18} color="yellow" /> 1,000,000 ብር</Text>
                            </View>
                        </View>

                        <View style={{ alignSelf: 'center', width: 100, marginBottom:20 }}>
                            <Button
                                title="Buy"
                                color="#2196F3"
                                
                            />        
                        </View>

                        <View style={{ alignItems: 'center', marginBottom: 45 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, letterSpacing: -1, color: '#FFF' }}>Sponsored By</Text>
                            <Image source={TeleBirr} style={{ width: 100, height: 100, alignSelf: 'center' }} />
                        </View>

                        <View style={{ alignItems: 'flex-end', paddingRight: 15 }}>
                            <Text style={{ color: 'white' }}>Tell your friends about us</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <MaterialCommunityIcons name="twitter" size={24} color="white" />
                                <MaterialCommunityIcons name="telegram" size={24} color="white" style={{ paddingHorizontal: 7 }} />
                                <MaterialCommunityIcons name="whatsapp" size={24} color="white" style={{ paddingHorizontal: 7 }} />
                                <MaterialCommunityIcons name="facebook-messenger" size={24} color="white" style={{ paddingRight: 15 }} />
                            </View>
                        </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop: 55,
        paddingHorizontal: 10
      },
      jackpot: { 
        color:'white', 
        fontWeight: 'bold', 
        fontSize: 25, 
        textAlign: 'center', 
        textTransform: 'uppercase', 
        paddingTop: 10,
        letterSpacing: 1.5, 
    },
    textGoesHere: { 
        color:'white', 
        fontWeight: '400', 
        textAlign: 'center',  
        fontSize: 20, 
        letterSpacing: 2.5, 
        paddingTop: 10 
    },
    countDown: { 
        paddingBottom: 15,
    },
    lottoNum: { 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 15 },
        shadowOpacity: 0.7, 
        shadowRadius: 16, 
        borderRadius: 2, 
        backgroundColor: '#e6e6e6', 
        opacity: 0.9, 
        alignItems: 'center',
        justifyContent: 'center', 
        marginBottom: 25, 
        width: 260, 
        height: 40 
    },
    Birr: { 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 15 },
        shadowOpacity: 0.7,
        elevation: 5, 
        shadowRadius: 30, 
        borderRadius: 5, 
        backgroundColor: '#ff3333', 
        opacity: 0.6, 
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: 25, 
        width: 280, 
        height: 45 
    }
})
