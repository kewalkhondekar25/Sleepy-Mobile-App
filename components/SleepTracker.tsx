import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native';
import HabitTracker from '../assets/anime/HabbitTracker.json'

const SleepTracker = () => {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        source={HabitTracker}
        style={styles.play}
      />
      <Text style={styles.title}>stay tuned, under development</Text>
    </View>
  )
}

export default SleepTracker

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#020925',
    height:'100%'
  },
  title:{
    color:'white',
    textTransform:'capitalize',
    fontWeight:'bold'
  },
  play:{
    height:250,
    width:250
  }
})