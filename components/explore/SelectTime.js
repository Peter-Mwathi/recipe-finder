import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React, {useState, useEffect}from 'react'
import { SIZES } from '../../constants/theme'
import { CustomRegularText } from '../texts/CustomTexts'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import Entypo from "react-native-vector-icons/Entypo"



const itemsWidth = SIZES.height * 0.08


// select time section 
const SelectTime = ({item, navigation, navigateToSearch}) => {

  let timeView = null

  // create time icon based on input 
  switch (item.name) {

    // return breakfast icon 
    case "Breakfast":
      timeView = <View className="absolute bottom-7 items-center justify-center left-1">
        <Feather name="sun" size={18} color="white" />
      </View>
      break;

    // return icon for branch 
    case "Brunch":
      timeView = <View className="absolute items-center justify-center bottom-9 left-3">
      <Feather name="sun" size={18} color="orange" />
      </View>
      break;

    // return icon for the lunch time 
    case "Lunch":
      timeView = <View className="absolute items-center top-3 justify-center w-full">
      <Feather name="sun" size={20} color="yellow" />
      </View>
      break;

    // return icon for breakfast 
    case "Evening Snack":
      timeView = <View className="absolute bottom-10 items-center justify-center left-3">
      <AntDesign name="cloud" size={24} color="white" />
      </View>
      break;

    // return icon for Dinner 
    case "Dinner":
      timeView = <View className="absolute items-center justify-center w-full bottom-1/2">
      <Octicons name="moon" size={24} color="white" />
      </View>
      break;

    // return icon for Dinner 
    case "Late Night":
      timeView = <View className="absolute items-center justify-center w-full bottom-1/2">
      <Entypo name="moon" size={24} color="black" />
      </View>
      break;

    // return default item 
    default:
      timeView = <View className="absolute items-center justify-center w-full bottom-1/2">
      <Octicons name="moon" size={24} color="black" />
      </View>
      break;
  }

  return (
    <View className="items-center mr-5">
      <TouchableOpacity
        style={{ height: itemsWidth, width: itemsWidth}} 
        activeOpacity={0.7}
        onPress={()=>navigateToSearch(navigation, item.name)}
      >


        <Image className="rounded-full" source={require("../../assets/images/time/time-placeholder.png")} 
        style={{ height: itemsWidth, width: itemsWidth}}/>
        {timeView}
      </TouchableOpacity>
      <CustomRegularText styles="mt-3" title={item.name}/>
    </View>
   
  )
}

export default SelectTime

const styles = StyleSheet.create({})