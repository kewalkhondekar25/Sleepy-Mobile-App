import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import LottieView from 'lottie-react-native';
import playing from '../assets/anime/playing.json'


const MusicTrackPlay = (props: any) => {

  const { title, trackOne, trackTwo,
    trackThree, trackFour, trackOneSrc, trackTwoSrc,
    trackThreeSrc, trackFourSrc, url1, url2, url3, url4 } = props.route.params;

  const audioFiles = [
    { title: `${trackOne}`, uri: `${trackOneSrc}`, src: `${url1}` },
    { title: `${trackTwo}`, uri: `${trackTwoSrc}`, src: `${url2}` },
    { title: `${trackThree}`, uri: `${trackThreeSrc}`, src: `${url3}` },
    { title: `${trackFour}`, uri: `${trackFourSrc}`, src: `${url4}` },

  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState<number | undefined>(undefined);
  const sound = useRef(new Audio.Sound());
  const navigation = useNavigation();

  useEffect(() => {
    const loadAudio = async () => {
      try {
        if (sound.current._loaded) {
          await sound.current.unloadAsync();
        }
        await sound.current.loadAsync({ uri: audioFiles[currentTrackIndex].uri });
        setIsPlaying(false);

        const status = await sound.current.getStatusAsync();
        if (status.isLoaded) {
          setDuration(status.durationMillis);
        } else {
          console.error('Audio is not loaded properly');
        }
      } catch (error) {
        console.error('Error loading audio:', error);
      }
    };

    loadAudio();
  }, [currentTrackIndex]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      if (sound.current._loaded) {
        sound.current.stopAsync();
      }
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const updateSliderPosition = async () => {
      const status = await sound.current.getStatusAsync();
      if (status.isLoaded) {
        setPosition(status.positionMillis);
      }
    };

    const interval = setInterval(updateSliderPosition, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);


  const playAudio = async () => {
    try {
      if (!isPlaying) {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        await sound.current.playAsync();
      } else {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        await sound.current.pauseAsync();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  const nextTrack = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (currentTrackIndex < audioFiles.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    }
  };

  const previousTrack = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    }
  };

  const onSliderValueChange = (value: any) => {
    setPosition(value);
    sound.current.setPositionAsync(value);
  };


  return (
    <View style={styles.container}>
      <View style={styles.album}>
        <Text style={styles.albumTitle}>{title}</Text>
        {
          
        <LottieView
        autoPlay
        loop
        source={playing}
        style={styles.play}
      />
      }
      </View>
      
      <Image
        source={{ uri: `${audioFiles[currentTrackIndex].src}` }}
        style={styles.trackPreview}
      />
      <View >
        <Text style={styles.trackTitle}>{audioFiles[currentTrackIndex].title}</Text>
        
        <View style={styles.sliderComp}>
          <Slider
            style={{ width: '100%'}}
            value={position}
            maximumValue={duration}
            onValueChange={onSliderValueChange}
          />
        </View>
        <View style={styles.controlCenter}>
          <View style={styles.controlCenterBody}>

            <Pressable onPress={previousTrack}>
              <MaterialCommunityIcons name="skip-previous-circle" size={50} color="#6D2AAB" />
            </Pressable>
            <Pressable onPress={playAudio} >
              {
                isPlaying ? <AntDesign name="pausecircle" size={50} color="#6D2AAB" /> : <AntDesign name="play" size={50} color="#6D2AAB" />
              }
            </Pressable>

            <Pressable onPress={nextTrack}>
              <MaterialCommunityIcons name="skip-next-circle" size={50} color="#6D2AAB" />
            </Pressable>
          </View>

        </View>
      </View>
    </View>
  )
}

export default MusicTrackPlay

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#020925',
    height: '100%'
  },
  album: {
    position: 'absolute',
    top: 50,
  },
  albumTitle:{
    color:'white',
    textTransform:'capitalize',
    fontSize:15
  },
  trackPreview: {
    // position:'absolute',
    // top:150,
    height: 300,
    width: 325,
    borderRadius: 10,
    marginBottom:90
  },
  trackTitle:{
    color:'white',
    fontSize:20,
    textTransform:'capitalize',
    fontWeight:'500',
    position:'absolute',
    bottom:150,

  },
  sliderComp: {
    width: 300,
    marginBottom:20
  },
  controlCenter: {
    height: 60,
    width: 300
  },
  controlCenterBody: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    //backgroundColor: '#151F50',
    //borderRadius:50
  },
  play:{
    position:'absolute',
    top:10,
    left:18,
    height:30,
    width:30
  }
})