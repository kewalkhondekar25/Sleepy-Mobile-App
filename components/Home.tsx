import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Header from './Header'
import Podcasts from './Podcasts'
import Musics from './Musics'
import React from 'react'
import TipsForSleep from './TipsForSleep'
import Meditation from './Meditation'

const Home = (props:any) => {
  return (
    <View style={styles.backLight}>
    <ScrollView>
          <View >
            <Header />
            <Podcasts />
            <Musics props={props} />
            {/* <StatusBar style="auto" /> */}
            <TipsForSleep props={props}/>
            <Meditation props={props}/>
          </View>
        </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
      },
      backLight: {
        //backgroundColor: '#160B5C',
        backgroundColor:'#020925',
        height:'100%'
      }
})