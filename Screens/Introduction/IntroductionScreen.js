import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { COLORS, FONTS } from '../../constants/theme'
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const IntroductionScreen = ({ navigation }) => {

  useEffect(() => {
    checkSplash();
  }, []);

  const checkSplash = async () => {
    //get walk through data
    const getSplashData = await AsyncStorage.getItem("isSplashViewed");
    const splashData = JSON.parse(getSplashData);
    if (splashData == null) {
      //   navigate to walk through screen
      navigation.replace("SplashScreen");

    } else {
      //  go to homepage or login page
      //  check whether the user is login or home
      //  also check if user data exists
      const progressStatus = splashData.progressStatus;
      switch (progressStatus) {
        //go to login if the progress is login
        case "Login":
          navigation.replace("Login");
          //  navigation.replace("Register");
          break;

        // go to home is progress is home
        case "Home":
          navigation.replace("Home");
          break;

        // the default redirect is login
        default:
          navigation.replace("Login");
      }
    }
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  )
}

export default IntroductionScreen

// styles 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  }
})