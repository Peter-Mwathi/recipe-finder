import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// custom regular text 
const CustomRegularText = (props) => {
  return (
    <View>
      <Text style={{fontSize: props.size}} className={props.styles}>{props.title}</Text>
    </View>
  )
}

// custom bold text 
const CustomBoldText = (props) => {
    return (
      <View>
        <Text>Custom bold text </Text>
      </View>
    )
  }
  
// export both custom regular and bold text 
export  {CustomRegularText, CustomBoldText}
const styles = StyleSheet.create({
    regularText: {},
    boldText: {}
})