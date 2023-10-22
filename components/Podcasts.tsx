import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import mic from '../assets/anime/mic.json'


const Podcasts = () => {
    return (
        <View style={styles.podcast} >
            <View style={styles.container}>
                <View style={styles.podcastLogo}>
                    <LottieView
                        autoPlay
                        loop
                        source={mic} />
                </View>
                <View>
                    <Text style={styles.description}>
                        The Home of Sleep Podcasts
                    </Text>
                    <Text style={styles.description2}>
                        Discover immersive stories and meditations
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Podcasts

const styles = StyleSheet.create({
    podcast: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,

    },
    podcastLogo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        //backgroundColor: '#4F35D6',
        //margin: 10,
        borderRadius: 50,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 300,
        backgroundColor: '#061239',
        borderRadius: 20,
        padding: 15,
    },
    description: {
        color: 'white',
        textTransform: 'capitalize',
        fontWeight: 'bold'
    },
    description2: {
        color: 'grey'
    }
})