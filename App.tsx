import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeIcon from './assets/anime/home.json'
import PodcastIcon from './assets/anime/audio.json'
import TrackerIcon from './assets/anime/track.json'
import LottieView from 'lottie-react-native';
import * as Haptics from 'expo-haptics';
import Home from './components/Home';
import SleepTracker from './components/SleepTracker';
import ListenPodcasts from './components/ListenPodcasts';
import SleepScreen from './components/SleepScreen';
import MusicTrackPlay from './components/MusicTrackPlay';
import MeditationTrackPlayer from './components/MeditationTrackPlayer';



export default function App() {
  const stack = createStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{ 
          headerStyle: { backgroundColor: '#6007F0' }, 
          headerTintColor: 'white' }}
        >
        <stack.Screen 
          name='Back' 
          component={Bottom}
          options={{
            headerShown: false,
          }} />
        <stack.Screen name='Home' component={Home} />
        <stack.Screen name='Sleep' component={SleepScreen} />
        <stack.Screen name="Player" component={MusicTrackPlay}/>
        <stack.Screen name="Meditation" component={MeditationTrackPlayer}/>
      </stack.Navigator>

    </NavigationContainer>
  );
}

export const Bottom = () => {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={
        { tabBarStyle: { backgroundColor: '#160B5C' } }

      }
    >
      {/* <Tab.Screen
          name='Stack'
          component={Stack}
        /> */}

      <Tab.Screen
        name="Home"
        component={Home}
        listeners={{
          tabPress: () => {Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)}
        }}
        options={{
          
          headerShown: false,
          tabBarActiveBackgroundColor: '#1D1476',
          tabBarActiveTintColor: 'white',
          tabBarIcon: () => (
            <LottieView
              autoPlay
              loop
              source={HomeIcon}
            />
          )
        }}
      />

      <Tab.Screen
        name="Podcasts"
        component={ListenPodcasts}
        listeners={{
          tabPress: () => {Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)}
        }}
        options={{
          headerStyle:{backgroundColor:'#6007EF'},
          headerTintColor:'white',
          //headerShown:false,
          tabBarActiveBackgroundColor: '#1D1476',
          tabBarActiveTintColor: 'white',
          tabBarIcon: () => (
            <LottieView
              autoPlay
              loop
              source={PodcastIcon}
              style={styles.podcastIcon}
            />
          )
        }}
      />

      <Tab.Screen
        name="Habit"
        component={SleepTracker}
        listeners={{
          tabPress: () => {Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)}
        }}
        options={{
          //headerShown:false,
          headerStyle:{backgroundColor:'#6007EF'},
          headerTintColor:'white',
          tabBarActiveBackgroundColor: '#1D1476',
          tabBarActiveTintColor: 'white',
          tabBarIcon: () => (
            <LottieView
              autoPlay
              loop
              source={TrackerIcon}
            //style={styles.podcastIcon}
            />
          )
        }}
      />

    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  podcastIcon: {
    height: 35,
    width: 35,
  }
});
