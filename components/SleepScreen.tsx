import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SleepScreen = (props: any) => {

  //console.warn(props.route.params);
  const { id, title, heading, subHeading } = props.route.params;

  if(id == 1){
    return(
      <View style={styles.container}>
      <View style={{ padding: 20 }}>
        <Image style={styles.containerImg}
          source={{ uri: "https://images.pexels.com/photos/4132327/pexels-photo-4132327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }} />
      </View>

      <Text style={styles.heading}>{title}</Text>
        
      <View style={styles.para}>

        <Text style={{ color: 'white', fontSize:20, marginBottom:10 }}>
        {heading}
        </Text>

        <Text style={{ color: 'gray', fontSize:18 }}>
        {subHeading}
        </Text>

      </View>

    </View>
    )
  }

  if(id == 2){
    return(
      <View style={styles.container}>
      <View style={{ padding: 20 }}>
        <Image style={styles.containerImg}
          source={{ uri: "https://images.pexels.com/photos/2277923/pexels-photo-2277923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }} />
      </View>

      <Text style={styles.heading}>{title}</Text>
        
      <View style={styles.para}>

        <Text style={{ color: 'white', fontSize:20, marginBottom:10 }}>
        {heading}
        </Text>

        <Text style={{ color: 'gray', fontSize:18 }}>
        {subHeading}
        </Text>

      </View>

    </View>
    )
  }

  if(id == 3){
    return(
      <View style={styles.container}>
      <View style={{ padding: 20 }}>
        <Image style={styles.containerImg}
          source={{ uri: "https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }} />
      </View>

      <Text style={styles.heading}>{title}</Text>
        
      <View style={styles.para}>

        <Text style={{ color: 'white', fontSize:20, marginBottom:10 }}>
        {heading}
        </Text>

        <Text style={{ color: 'gray', fontSize:18 }}>
        {subHeading}
        </Text>

      </View>

    </View>
    )
  }

  if(id == 4){
    return(
      <View style={styles.container}>
      <View style={{ padding: 20 }}>
        <Image style={styles.containerImg}
          source={{ uri: "https://images.pexels.com/photos/4741847/pexels-photo-4741847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }} />
      </View>

      <Text style={styles.heading}>{title}</Text>
        
      <View style={styles.para}>

        <Text style={{ color: 'white', fontSize:20, marginBottom:10 }}>
        {heading}
        </Text>

        <Text style={{ color: 'gray', fontSize:18 }}>
        {subHeading}
        </Text>

      </View>

    </View>
    )
  }

  if(id == 5){
    return(
      <View style={styles.container}>
      <View style={{ padding: 20 }}>
        <Image style={styles.containerImg}
          source={{ uri: "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }} />
      </View>

      <Text style={styles.heading}>{title}</Text>
        
      <View style={styles.para}>

        <Text style={{ color: 'white', fontSize:20, marginBottom:10 }}>
        {heading}
        </Text>

        <Text style={{ color: 'gray', fontSize:18 }}>
        {subHeading}
        </Text>

      </View>

    </View>
    )
  }

  if(id == 6){
    return(
      <View style={styles.container}>
      <View style={{ padding: 20 }}>
        <Image style={styles.containerImg}
          source={{ uri: "https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }} />
      </View>

      <Text style={styles.heading}>{title}</Text>
        
      <View style={styles.para}>

        <Text style={{ color: 'white', fontSize:20, marginBottom:10 }}>
        {heading}
        </Text>

        <Text style={{ color: 'gray', fontSize:18 }}>
        {subHeading}
        </Text>

      </View>

    </View>
    )
  }

  return (
    // <View style={styles.container}>
    //   <View style={{ padding: 20 }}>
    //     <Image style={styles.containerImg}
    //       source={{ uri: "https://images.pexels.com/photos/4132327/pexels-photo-4132327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }} />
    //   </View>

    //   <Text style={styles.heading}>{title}</Text>
        
    //   <View style={styles.para}>

    //     <Text style={{ color: 'white', fontSize:20, marginBottom:10 }}>
    //     Start With The Basics......
    //     </Text>

    //     <Text style={{ color: 'gray', fontSize:18 }}>
    //     Get organised, write down your next days priorities, which tasks can you delegate, 
    //     jot down what's on your mind and then set it aside for tomorrow and even write down 
    //     three things you're grateful for that day.

    //     </Text>

    //   </View>

    // </View>
    <Text>
      404 : Page Not Found
    </Text>
  )
}

export default SleepScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#020925',
    height: "100%",
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  containerImg: {
    height: 180,
    width: 180,
    borderRadius: 100,
  },
  heading: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  para:{
    padding:20,
    width:350,
    marginTop:50
  }
})