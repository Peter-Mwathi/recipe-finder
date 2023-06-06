import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CustomBoldText, CustomRegularText} from '../texts/CustomTexts'

const SectionHeader = ({ navigation, navigateToSearch, title, search}) => {
  return (
    <View className="mb-4 flex-row  items-center justify-between">
        <CustomBoldText className="text-slate-800 font-bold" size={20} title={title}/>
        <TouchableOpacity onPress={()=> navigateToSearch(navigation, search) } activeOpacity={0.4} className="bg-slate-200 p-3 rounded-full">
            <CustomRegularText title="Search more"/>
        </TouchableOpacity>
        
    </View>
  )
}

export default SectionHeader

const styles = StyleSheet.create({})