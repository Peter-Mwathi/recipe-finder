import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { SIZES } from '../../constants/theme'
import { CustomRegularText, CustomBoldText } from '../texts/CustomTexts'

const TopFlatlistItem = ({item, description}) => {
  return (
    <TouchableOpacity style={{width: SIZES.width - 32}} activeOpacity={0.8} className="mx-4">

      {/* this is recipe category  */}
      <CustomRegularText styles="text-slate-500 uppercase" size={12} title={item.category}/>

      {/* this is recipe name  */}
      <View style={{maxWidth: SIZES.width, overflow: 'hidden'}}>
        <CustomBoldText styles="mb-3 max-w-full text-slate-800" size={20} title={item.title}/>
      </View>

      {/* this is recipe image  */}
      <Image className="rounded-tr-xl rounded-tl-xl rounded-br-xl w-full" style={{height: SIZES.height * .20}} source={{uri: item.imageUrl}}/>
    
      <CustomRegularText 
      styles="mt-3 leading-6"
      size={15}
      title={description}/>
    
    
    </TouchableOpacity>
  )
}

export default TopFlatlistItem

const styles = StyleSheet.create({})