import { StatusBar, Animated, Text, Image, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import * as React from 'react'
import { SplashImages } from '../../assets/images/splash';
import CustomButtonWhite from '../../components/buttons/CustomButtonWhite';
import FlashMessage from 'react-native-flash-message';
import customFunctions from '../../functions/CustomFunctions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('screen');
const bgs = ['#1b591b', '#2b772b', '#F79327', '#ED2B2A'];
const DATA = [
  {
    "key": "3571603",
    "title": "Vast Recipe Collection",
    "description": "Search through over +100,000 recipes. You  can find a diverse range of culinary options, from traditional favorites to international cuisines.",
    "image": SplashImages.green
  },
  {
    "key": "3571680",
    "title": "Intelligent Natural Language Searching",
    "description": "Effortlessly find recipes by simply describing the ingredients you have or the type of dish you desire. Save time and effort in the search for the perfect recipe.",
    "image": SplashImages.deepGreen
  },
  {
    "key": "3571747",
    "title": "Personalized Recommendations",
    "description": "We provide personalized recipe recommendations based on your preferences and past interactions. We analyze your culinary interest to match your preferred taste.",
    "image": SplashImages.orange
  },

  {
    "key": "3571572",
    "title": "Interactive Cooking Experience",
    "description": "With our app, it's not just about finding recipes; it's about becoming part of a thriving community that shares a passion for cooking and exploring new flavors.",
    "image": SplashImages.red
  },
 
]

// export the splash screen 
const SplashScreen = ({navigation}) => {

  // this will track the current slide 
  const scrollX = React.useRef(new Animated.Value(0)).current;

  // indicator buttons 
  const Indicator = ({scrollX}) => {
    return (
      <View style={{position: 'absolute', bottom: 150, flexDirection: 'row'}}>
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
              margin:6,
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

  // get started activity button 
  const triggerGetStarted = async () => {
    const setSplashViewed = {
      progressStatus: "Home",
      userData: {},
    };
    try {
      await AsyncStorage.setItem(
        "isSplashViewed",
        JSON.stringify(setSplashViewed)
      );
      navigation.replace("Home");
    } catch (e) {
      customFunctions.showAlertMessage("danger", "An error occurred", `The following error has occurred: ${e.message}`)
    }
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
                source={item.image}
                style={{width: width, height: width/1.6, resizeMode: 'contain', marginBottom: 50}}
                />
              </View>
              <View style={{flex: 0.3}}>
                <Text className="text-white mb-2 font-extrabold text-2xl text-center">{item.title}</Text>
                <Text className="text-center text-white text-base font-normal">{item.description}</Text>
              </View>
            </View>
          )
        }}
      />
      <Indicator scrollX={scrollX}/>
      <CustomButtonWhite onClickFunction={triggerGetStarted} title="Get started now" />
      <FlashMessage position="top"/>
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
  popStyle: {
    paddingTop: 40
  }
})