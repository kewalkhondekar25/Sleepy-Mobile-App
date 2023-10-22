import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import * as Haptics from 'expo-haptics';


const TipsForSleep = ({ props }: any) => {

    const dataCards = [
        {
            id: 1,
            title: "stress-bust before bed",
            logo: "🛌🏿",
            heading: 'Start With The Basics......',
            subHeading: `Get organised, write down your next days priorities, which tasks can you delegate, jot down what's on your mind and then set it aside for tomorrow and even write down three things you're grateful for that day.`

        },
        {
            id: 2,
            title: "set a sleep schedule",
            logo: '⏰',
            heading: 'Consistency is key.........',
            subHeading:`Set aside no less than eight hours for sleep and try to limit the difference in your sleep schedule on weeknights and weekends to no more than one hour. Being consistent reinforces your body's sleep-wake cycle.`
        },
        {
            id: 3,
            title: "let's get physical",
            logo: '🏋🏼',
            heading: 'Did you know.........',
            subHeading:`Deep Sleep is boosted by regular physical activity, especially before midday. It is proven to help you fall asleep and spend more time in a state of deep sleep.`
        },
        {
            id: 4,
            title: "limit the power of your nap",
            logo: '💤',
            heading: 'Long daytime naps can interfere with night-time sleep!...',
            subHeading:`If you choose to nap, limit yourself to up to 30 minutes and avoid taking naps all together late in the day.`
        },
        {
            id: 5,
            title: "be smart on what you eat & drink",
            logo: '🍽️',
            heading: 'Beware the sleep disruptors...',
            subHeading:`Nicotine, caffeine and alcohol must be treated with caution. The stimulating effects of nicotine and caffeine take up to 6 hours to wear off and can wreak havoc on quality sleep.`
        },
        {
            id: 6,
            title: "celebrate your sleepiest wins",
            logo: '⏰',
            heading: 'Yay!...',
            subHeading:`However big or small the steps you make this week are, remember there is NO Failure, only feedback. You have taken the initiative, focusing on the most important aspect of your health, body and mind! Return to these tips from time to time to make sure your new sleep habits stick.`
        },
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>TipsForSleep</Text>
            <ScrollView horizontal={true}>
                {
                    dataCards.map(items => {
                        const { id, title, logo, heading, subHeading } = items;
                        return (
                            <View key={id} style={styles.cardBody}>

                                <TouchableOpacity
                                    style={styles.card}
                                    onPress={() => {Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light), props.navigation.navigate("Sleep", { id, title, heading, subHeading })}}
                                >
                                    <View>
                                        <Text style={styles.cardTitle}>{title}</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 30 }}>{logo}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default TipsForSleep

const styles = StyleSheet.create({
    container: {
        marginTop: 25
    },
    heading: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        //marginBottom: 0,
        marginLeft: 10
    },
    cardBody: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    card: {
        height: 150,
        width: 150,
        backgroundColor: '#00113F',
        borderRadius: 20,
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    cardTitle: {
        color: 'white',
        textTransform: 'capitalize',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        width: 125
    },
    cardImage: {
        height: 120,
        width: 120,
        borderRadius: 50
    }
})