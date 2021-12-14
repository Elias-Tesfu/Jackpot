import React from 'react'
import { Button, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import CountDown from 'react-native-countdown-component';

export default function Homescreen() {
    const handleError = (e) => {
        console.log(e.nativeEvent.error);
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
                            <Text>LOGO</Text>
                        </View>
                    </View>

                    <View style={{ paddingVertical: 15 }}>
                        <CountDown
                            until={60 * 100 * 60} 
                            size={40}
                            onFinish={() => alert('Finished')}
                            digitStyle={{backgroundColor: '#FFF'}}
                            timeToShow={['D', 'H', 'M']}
                        />
                    </View>

                    <View style={{ alignItems: 'center', paddingVertical: 15 }}>
                        <View style={ styles.lottoNum }>
                            <Text style={{ fontSize: 25, letterSpacing: 3 }}>34645345345</Text>
                        </View>

                        <View style={ styles.Birr }>
                            <Text style={{ fontWeight: 'bold', fontSize: 23, letterSpacing: 3.5 }}>1,000,000 ብር</Text>
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
                    </View>

                    <View style={{ alignItems: 'flex-end', paddingRight: 15 }}>
                        <Text>Tell your friends about us</Text>
                    </View>
            </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop: 50,
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
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.7, 
        shadowRadius: 16, 
        borderRadius: 2, 
        backgroundColor: '#e6e6e6', 
        opacity: 0.9, 
        alignItems: 'center', 
        marginBottom: 25, 
        width: 250, 
        height: 40 
    },
    Birr: { 
        shadowColor: "#000", 
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.7, 
        shadowRadius: 16, 
        borderRadius: 5, 
        backgroundColor: '#ff3333', 
        opacity: 0.6, 
        alignItems: 'center', 
        marginBottom: 25, 
        width: 280, 
        height: 38 
    }
})
