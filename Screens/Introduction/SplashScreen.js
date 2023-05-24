import { StatusBar, Animated, Text, Image, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import * as React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('screen'); 

const bgs = ['orange', '#DDBEFE', '#FF63ED', '#B98EFF'];
const DATA = [
  {
    "key": "3571572",
    "title": "Multi-lateral intermediate moratorium",
    "description": "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
    "image": "https://www.wallpaperflare.com/static/211/4/925/food-burgers-burger-white-background-wallpaper.jpg"
  },
  {
    "key": "3571747",
    "title": "Automated radical data-warehouse",
    "description": "Use the optical SAS system, then you can navigate the auxiliary alarm!",
    "image": "https://cdn-icons-png.flaticon.com/128/3571/3571665.png"
  },
  {
    "key": "3571680",
    "title": "Inverse attitude-oriented system engine",
    "description": "The ADP array is down, compress the online sensor so we can input the HTTP panel!",
    "image": "https://cdn-icons-png.flaticon.com/128/3571/3571970.png"
  },
  {
    "key": "3571603",
    "title": "Monitored global data-warehouse",
    "description": "We need to program the open-source IB interface!",
    "image": "https://cdn-icons-png.flaticon.com/128/3571/3571963.png"
  }
]


const SplashScreen = () => {

  const scrollX = React.useRef(new Animated.Value(0)).current;

  // indicator buttons 
  const Indicator = ({scrollX}) => {
    return (
      <View style={{position: 'absolute', bottom: 100, flexDirection: 'row'}}>
        {DATA.map((_, i)=>{

        // input range 
        const inputRange = [(i - 1) * width, i * width, (i +1 ) * width];

        // change the size of the current indicator 
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8]
        })

        // change the opacity of the current and previous Indicators 
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 0.9, 0.6]
        })

          return (
            <Animated.View
            key={`indicator-${i}`}
            style={{
              height: 10,
              width: 10, 
              borderRadius: 5,
              margin:10,
              backgroundColor: "#fff",
              opacity,
              transform: [
                {
                  scale
                }
              ]
            }}
            >
            </Animated.View>
          )
        })}
      </View>
    )
  }

  // return the backdrop object 
  const Backdrop = ({scrollX}) => {
    const backgroundColor = scrollX.interpolate({
      inputRange: bgs.map((_,i)=> i * width),
      outputRange: bgs.map((bgs) => bgs)
    })
    return (
      <Animated.View style={[StyleSheet.absoluteFillObject,{backgroundColor: backgroundColor}]}/>
    )
  }

  // the white square that adds the shaped background 
  const Square = ({scrollX}) => {
    const YOLO = Animated.modulo(Animated.divide(
      Animated.modulo(scrollX,width), 
      new Animated.Value(width)
    ),1);

    const rotate = YOLO.interpolate({
      inputRange: [0, .5, 1],
      outputRange: ['35deg', '-35deg','35deg' ]
    })

    return (
      <Animated.View
      style={{
        width: height, 
        height: height, 
        backgroundColor: "#fff", 
        borderRadius: 96,
        position: "absolute",
        top: -height * 0.6,
        left: -height * 0.3, 
        transform: [
          {
            rotate,
          }
        ]
      }}
      />
    )
  }


  // return main body 
  return (
    <View style={styles.container}>
      <Backdrop scrollX={scrollX}/>
      <Square scrollX={scrollX}/>
      <Animated.FlatList data = {DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: false}
        )}
        keyExtractor={item=> item.key}
        pagingEnabled
        contentContainerStyle= {{paddingBottom: 100}}
        renderItem={({item}) => {
          return (
            <View style={{width: width, justifyContent: "center", alignItems:"center", padding: 20}}>
              <View style={{flex: 0.7, justifyContent: "center" }}>
                <Image 
                source={{uri: item.image}}
                style={{width: width, height: width/2, resizeMode: 'contain'}}
                />
              </View>
              <View style={{flex: 0.3}}>
                <Text style={{fontWeight: "800", fontSize: 24, marginBottom: 10, color: 'white', textAlign: "center"}}>{item.title}</Text>
                <Text style={{fontWeight: '300', color: 'white', textAlign: "center"}}>{item.description}</Text>
              </View>
            </View>
          )
        }}
      />

      <Indicator scrollX={scrollX}/>
    </View>
  )
}

export default SplashScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})