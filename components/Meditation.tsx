import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import LottieView from 'lottie-react-native';
import meditation from '../assets/anime/meditation.json';
import * as Haptics from 'expo-haptics';


const Meditation = ({ props }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>10-Minutes Meditation For Sleep</Text>
      <TouchableOpacity
        onPress={() => {Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy), props.navigation.navigate("Meditation")}}>
        <View style={styles.body}>
          <LottieView
            autoPlay
            loop
            source={meditation}
            style={styles.anime} />
          <View style={styles.button}>
            <Text style={styles.buttonText}>get started</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Meditation

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    width: 200,
    backgroundColor: '#00113F',
    borderRadius: 20
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    //marginLeft: 10,
    marginBottom: 10,
    marginTop: 20
  },
  anime: {
    height: 180,
    width: 180
  },
  button: {
    backgroundColor: '#7227D9',
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    padding: 10,
    textTransform: 'capitalize',
    fontWeight: 'bold'
  }
})