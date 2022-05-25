import React, { useState, useEffect } from 'react'
import { Image, Button, ImageBackground, SafeAreaView, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import CountDown from 'react-native-countdown-component';
import * as SMS from 'expo-sms';

import TeleBirr from '../Images/TeleBirr.png';

//Firebase confiugeration
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyACjAI3CP9W66yWGZ47OPJOBKMzKbo54FI",
    authDomain: "jackpot-3fe0a.firebaseapp.com",
    projectId: "jackpot-3fe0a",
    storageBucket: "jackpot-3fe0a.appspot.com",
    messagingSenderId: "1057779778010",
    appId: "1:1057779778010:web:6303d28dba3660ff1040e3"
};
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

export default function Homescreen({ navigation }) {
    const [randomNumber, setRandomNumber] = useState(0);
    const [used, setUsed] = useState(true);
    const [SMSavailable, setSMSavailable] = useState(false);

    useEffect(() => {
        SMS.isAvailableAsync().then(setSMSavailable)
    }, []);

    //Error Handler
    const handleError = (e) => {
        console.log(e.nativeEvent.error);
    };

    //Random Numnber Generator
    const randomNumberGenerator = () => {
        const randomNumber = Math.floor((Math.random() * 1000000000) + 1);
        setRandomNumber(randomNumber);
        console.log("The Random Number Generated is - " + randomNumber);

        let docRef = lotto_collection.doc(randomNumber.toString());
        docRef.get().then((doc) => {
            if(doc.exists) {
                console.log("This number already exists in the Database");
                console.log("Document data:", doc.data());

                setRandomNumber(0);

                Alert.alert(
                    "Lottery Number Already Used",
                    "Please get a new Lottery Number Again"
                )
            } else {
                console.log("No such Document!");
                setUsed(false)
                setRandomNumber(randomNumber)
            }
        })
    };

    //Firebase database 
    const lotto_collection = firebase.firestore().collection('Lottery_Number')
    const send = async () => {
        try {
            if (randomNumber == 0) {
                console.log("No Lottery Number")
                Alert.alert(
                    "Jackpot",
                    "No Lottery Number, Please get Lottery Number !!!"
                )
            } else {
                if(!used) {
                if (SMSavailable) {
                    console.log('going for it!');
                    await SMS.sendSMSAsync(
                      ['9090'],
                      randomNumber.toString(),
                    );

                    lotto_collection.doc(randomNumber.toString())
                    .set({
                        number: randomNumber
                    });
                    console.log("Successfully added the Lottery Number - "  + randomNumber);
                    setRandomNumber(0);
                } else {
                    console.log("Unfortunetly SMS is not available on this Device");
                    Alert.alert(
                        "Jackpot",
                        "SMS Not Available, Unfortunetly SMS is not available on this Device"
                    )
                    setRandomNumber(0)
                }
            }
            }
        } catch(err) {
            throw err;
        }
    };


    return (
        <ImageBackground style={ styles.imagebackground } onError={handleError} source={require('../Images/Frame.jpg')}>
            <SafeAreaView>
                <View style={styles.container}>

                        {/* Header */}
                        <View style={{ flexDirection: 'row', width: '100%', alignSelf: 'center', marginBottom: '7%' }}>
                            <View style={{ flex: 1, height: '10%' }}>
                                <Text style={ styles.jackpot }>JACKPOT</Text>
                                <Text style={ styles.textGoesHere }>Text goes here</Text>
                            </View>

                            {/* Account setting button  */}
                            <TouchableOpacity onPress={() => navigation.navigate('Second')}>
                                <View style={{ flex: 1, height: '10%' }}>
                                    <MaterialCommunityIcons name="account-circle-outline" size={45} color="white" />
                                </View>
                            </TouchableOpacity>
                        </View>

                        {/* Coutn Down Function with view */}
                        <View style={{ flex: 1, paddingVertical: 15, marginBottom: '5%' }}>
                            <CountDown
                                until={60 * 100 * 60} 
                                size={35}
                                onFinish={() => Alert.alert('JACKPOT', 'Finished')}
                                digitStyle={{backgroundColor: '#FFF'}}
                                timeToShow={['D', 'H', 'M']}
                                onPress={() => Alert.alert('JACKPOT', 'Created by Elias Tesfu') }
                            />
                        </View>

                        <View style={{ flex: 1, alignItems: 'center', paddingVertical: 5, marginBottom: '7%' }}>
                            {/* the random lottery generator  */}
                            <View style={ styles.lottoNum }>
                                <Text style={{ fontSize: 25, letterSpacing: 3 }}>{randomNumber} | <TouchableOpacity onPress={randomNumberGenerator}><FontAwesome name="repeat" size={24} color="white" /></TouchableOpacity> </Text>
                            </View>

                            {/* 1,000,000 birr with red background */}
                            <View style={ styles.Birr }>
                                <Text style={{ fontWeight: 'bold', fontSize: 23, letterSpacing: 3.5 }}> <FontAwesome5 name="coins" size={18} color="yellow" /> 1,000,000 ብር</Text>
                            </View>
                        </View>

                        {/* The buy button */}
                        <View style={{ alignSelf: 'center', width: 100, marginBottom:20 }}>
                            <Button
                                title="Buy"
                                color="#2196F3"
                                onPress={send}
                            />        
                        </View>

                        {/* The sponsored list horizontal  */}
                        <View style={{ alignItems: 'center', marginBottom: 35 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, letterSpacing: -1, color: '#FFF' }}>Sponsored By</Text>
                            <Image source={TeleBirr} style={{ width: 100, height: 100, alignSelf: 'center' }} />
                        </View>

                        {/* contact us section at the bottom */}
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
    imagebackground: {
        flex: 1,
        width: '100%',
        height: '110%',
        resizeMode: 'cover'
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: '5%',
        paddingHorizontal: 10
      },

    jackpot: { 
        flex: 1,
        paddingLeft: '15%',
        color:'white', 
        fontWeight: 'bold', 
        fontSize: 30, 
        textAlign: 'center', 
        letterSpacing: 1.5, 
        textTransform: 'uppercase', 
    },
    
    textGoesHere: { 
        flex: 1,
        paddingLeft: '15%',
        color:'white', 
        fontWeight: '400', 
        fontSize: 20, 
        textAlign: 'center',  
        letterSpacing: 2.5, 
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
        marginBottom: 35, 
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
        width: 280, 
        height: 45 
    }
})
