import React from 'react';
import { Image, StyleSheet, Text, View, } from 'react-native';
import LottieView from 'lottie-react-native';
import LightHouse from '../assets/anime/lighthouse.json';
import stars from '../assets/anime/stars1.json';
import shootingStar from '../assets/anime/shootingstars.json';
import boneFire from '../assets/anime/bonfire.json';

const Header = () => {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/display.webp')} />
      </View>
      <LottieView
        autoPlay
        loop
        source={LightHouse}
        style={styles.lightHouseStyle} />
      <LottieView
        autoPlay
        loop
        source={stars}
        style={styles.stars} />
      <LottieView
        autoPlay
        loop
        source={stars}
        style={styles.stars2} />
      <LottieView
        autoPlay
        loop
        source={shootingStar}
        style={styles.shootingStar}/>
      <LottieView
        autoPlay
        loop
        source={boneFire}
        style={styles.boneFire}/>
        <LottieView
        autoPlay
        loop
        source={boneFire}
        style={styles.boneFire2}/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  body: {
    position: 'relative'
  },
  image: {
    flex: 1,
    marginTop: 150,
    height: 100,
    width: 390,
  },
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  lightHouseStyle: {
    position: 'absolute',
    top: 47,
    right: -2,
    height: 70,
    width: 70,
  },
  stars: {
    position: 'absolute',
    top: 10,
    left: 0,
    height: 200,
    width: 300
  },
  stars2: {
    position: 'absolute',
    top: 10,
    right: -10,
    height: 200,
    width: 300
  },
  shootingStar: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  boneFire:{
    position: 'absolute',
    top: 65,
    right: 20,
    height:15,
    width:15
  },
  boneFire2:{
    position: 'absolute',
    top: 70,
    left: 45,
    height:10,
    width:10
  }
})