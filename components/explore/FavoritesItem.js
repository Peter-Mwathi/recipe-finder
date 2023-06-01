import { StyleSheet, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {SIZES} from "../../constants/theme"
import { CustomRegularText } from '../texts/CustomTexts'

const FavoriteItem = ({item, navigation, navMethod}) => {
  return (
    <TouchableOpacity  onPress={()=> navMethod(navigation, item.name)} activeOpacity={0.8} className="mr-3">
      
      {/* favorite image  */}
      <Image className="rounded-lg" source={item.image} style={{ height: SIZES.height * 0.15, width: SIZES.height * 0.15}}/>

      {/* image title   */}
      <View className="absolute items-center justify-center w-full bottom-2">
        <CustomRegularText size={16} customStyles={{color: item.color}} styles="font-bold" title={item.name}/>
      </View>
      
    </TouchableOpacity>
  )
}

export default FavoriteItem

const styles = StyleSheet.create({})