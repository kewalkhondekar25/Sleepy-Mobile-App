import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { data } from '../constant/constants';
import * as Haptics from 'expo-haptics';


const Musics = ({props}: any) => {

    // const data = [
    //     {
    //         title: "the sounds of rain",
    //         trackOne:'light rain',
    //         trackOneSrc:'https://res.cloudinary.com/ddhgokvc1/video/upload/v1697809538/Sleepy/audio/Rain/Light_Rain_bsmiuf.mp3',
    //         trackTwo:'heavy rain',
    //         trackTwoSrc:'https://res.cloudinary.com/ddhgokvc1/video/upload/v1697809547/Sleepy/audio/Rain/Rain_Heavy_Loud_hybotn.mp3',
    //         trackThree:'rain on roof',
    //         trackThreeSrc:'https://res.cloudinary.com/ddhgokvc1/video/upload/v1697809538/Sleepy/audio/Rain/Rain_On_Roof_wiabht.mp3',
    //         trackFour:'thunderstorm',
    //         trackFourSrc:'https://res.cloudinary.com/ddhgokvc1/video/upload/v1697809569/Sleepy/audio/Rain/Thunderstorm_iyfucj.mp3',
    //         url1: `https://images.pexels.com/photos/1530423/pexels-photo-1530423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    //         url2: `https://images.pexels.com/photos/1105534/pexels-photo-1105534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    //         url3: `https://images.pexels.com/photos/2929287/pexels-photo-2929287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    //         url4: `https://images.pexels.com/photos/1686961/pexels-photo-1686961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,

    //     },
    //     {
    //         title: "journey to the stars",
    //         trackOne:'cosmos: a space time odyssey',
    //         trackOneSrc:'https://res.cloudinary.com/ddhgokvc1/video/upload/v1697811568/Sleepy/audio/Stars/Cosmos_Main_Title_-_Cosmos_A_SpaceTime_Odyssey_qmtowc.mp3',
    //         trackTwo:'space ambient',
    //         trackTwoSrc:'https://res.cloudinary.com/ddhgokvc1/video/upload/v1697811678/Sleepy/audio/Stars/Ringing_Ambient_Background_mu6qat.mp3',
    //         trackThree:'moon wandering',
    //         trackThreeSrc:'https://res.cloudinary.com/ddhgokvc1/video/upload/v1697842519/Sleepy/audio/Stars/_Moon_Walk_from_First_Man___by_Justin_Hurwitz_dexblh.mp3',
    //         trackFour:'nordlys',
    //         trackFourSrc:'https://res.cloudinary.com/ddhgokvc1/video/upload/v1697843469/Sleepy/audio/Stars/Nordlys_ah8kmf.mp3',
    //         url1: "https://images.pexels.com/photos/8145023/pexels-photo-8145023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         url2: "https://images.pexels.com/photos/753994/pexels-photo-753994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         url3: "https://images.pexels.com/photos/399946/pexels-photo-399946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         url4: "https://images.pexels.com/photos/1938348/pexels-photo-1938348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     },
    //     {
    //         title: "motion is tranquility",
    //         trackOne:"beethoven moonlight sonata",
    //         trackOneSrc:"https://res.cloudinary.com/ddhgokvc1/video/upload/v1697845164/Sleepy/audio/Tranquility/moonlightSonata_qlzbon.mp3",
    //         trackTwo:'mozart adagio in e major',
    //         trackTwoSrc:'https://res.cloudinary.com/ddhgokvc1/video/upload/v1697845162/Sleepy/audio/Tranquility/Adagio_in_E_Major_K._261_Extract_Arr._for_Solo_Violin_ynem2z.mp3',
    //         trackThree:'chopin etude op 25 no 5',
    //         trackThreeSrc:'https://res.cloudinary.com/ddhgokvc1/video/upload/v1697845164/Sleepy/audio/Tranquility/zen_yhp27y.mp3',
    //         trackFour:'Frédéric Chopin ballade',
    //         trackFourSrc:'https://res.cloudinary.com/ddhgokvc1/video/upload/v1697845824/Sleepy/audio/Tranquility/ballade_eruzoi.mp3',
    //         url1: "https://images.pexels.com/photos/16999360/pexels-photo-16999360/free-photo-of-woman-and-man-hands-playing-piano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         url2: "https://images.pexels.com/photos/7097472/pexels-photo-7097472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         url3: "https://images.pexels.com/photos/312839/pexels-photo-312839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         url4: "https://images.pexels.com/photos/753426/pexels-photo-753426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     },
    //     {
    //         title: "campfire and woods",
    //         trackOne:"gypsy wildfire",
    //         trackOneSrc:"https://res.cloudinary.com/ddhgokvc1/video/upload/v1697846499/Sleepy/audio/CampFire/HeavyFire_jre8zz.mp3",
    //         trackTwo:'bonefire nights',
    //         trackTwoSrc:'https://res.cloudinary.com/ddhgokvc1/video/upload/v1697846479/Sleepy/audio/CampFire/BoneFire_wwenut.mp3',
    //         trackThree:'a spring day in forest',
    //         trackThreeSrc:'https://res.cloudinary.com/ddhgokvc1/video/upload/v1697846499/Sleepy/audio/CampFire/Spring_Day_Forest_lpnygh.mp3',
    //         trackFour:'voices of woods',
    //         trackFourSrc:'https://res.cloudinary.com/ddhgokvc1/video/upload/v1697846486/Sleepy/audio/CampFire/voicesOfWoods_wln0dp.mp3',
    //         url1: "https://images.pexels.com/photos/772207/pexels-photo-772207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         url2: "https://images.pexels.com/photos/6623918/pexels-photo-6623918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         url3: "https://images.pexels.com/photos/2291427/pexels-photo-2291427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         url4: "https://images.pexels.com/photos/5876245/pexels-photo-5876245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     }
    // ]

    return (
        <View>
            <Text style={styles.heading} >Expertly crafted mixes</Text>
            <ScrollView horizontal={true}>
                {
                    data.map(items => {
                        const { url1, url2, url3, url4, title, trackOne, trackTwo, 
                        trackThree, trackFour, trackOneSrc, trackTwoSrc,
                        trackThreeSrc, trackFourSrc } = items;
                        return (
                            <View key={title} style={styles.body}>
                                <TouchableOpacity
                                    onPress={() => {Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light), props.navigation.navigate("Player", {title, url1, trackOne, url2, trackTwo, 
                                        url3, trackThree, url4, trackFour, trackOneSrc, trackTwoSrc,
                                        trackThreeSrc, trackFourSrc})}}>
                                    <View style={styles.container} >
                                        <View style={styles.card}>
                                            <Image source={{ uri: `${url1}` }} style={styles.icons} />
                                            <Image source={{ uri: `${url2}` }} style={styles.icons} />
                                            <Image source={{ uri: `${url3}` }} style={styles.icons} />
                                            <Image source={{ uri: `${url4}` }} style={styles.icons} />
                                        </View>
                                    </View>
                                    <Text style={styles.title}>
                                        {title}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
            {/* <Image style={{ height: 100, width: 100 }} source={require('../assets/todo/diary.svg')} /> */}
        </View>
    )
}

export default Musics

const styles = StyleSheet.create({
    body: {
        padding: 5
    },
    heading: {
        color: 'white',
        textTransform: 'capitalize',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 12
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'pink',
        height: 160,
        width: 160,
        backgroundColor: '#00113F',
        borderRadius: 20,

    },
    card: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        //padding:20,

    },
    icons: {
        height: 64,
        width: 64,
        borderRadius: 10,
        margin: 8,
    },
    title: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
        padding: 5,
    }
})