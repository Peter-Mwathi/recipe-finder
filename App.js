// import react and react native packages here 
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';

// import screens 
import {SplashScreen, Login, IntroductionScreen, HomeScreen} from './Screens'

// import navigation packages, Fonts, and Splash screen
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from "expo-font";
import * as expoSplashScreen from "expo-splash-screen";

// Global variables 
const Stack = createNativeStackNavigator();


// export the main component 
export default function App() {
  const [fontsLoaded] = useFonts({
    "Flowers": require("./assets/fonts/Flowers.ttf"),
    "BrushFont": require("./assets/fonts/Brush-Font.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await expoSplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  // load fonts here
  if (!fontsLoaded) {
    return undefined;
  } else {
    expoSplashScreen.hideAsync();
  }

  // return the component 
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* the main screen  */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Introduction"
          component={IntroductionScreen}
        ></Stack.Screen>

        {/* splash screen  */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="SplashScreen"
          component={SplashScreen}
        ></Stack.Screen>

        {/* home screen  */}
         <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        ></Stack.Screen>


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
