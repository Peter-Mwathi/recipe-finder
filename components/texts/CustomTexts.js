import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// custom regular text 
const CustomRegularText = (props) => {
  return (
    <View>
      <Text style={[{fontSize: props.size}, styles.regularText, props.customStyles]} className={props.styles}>{props.title}</Text>
    </View>
  )
}

// custom bold text 
const CustomBoldText = (props) => {
    return (
      <View>
        <Text className={props.styles} style={[styles.boldText, props.customStyles, {fontSize: props.size}]}>{props.title}</Text>
      </View>
    )
  }
  
// export both custom regular and bold text 
export  {CustomRegularText, CustomBoldText}
const styles = StyleSheet.create({
    boldText: {
      fontWeight: 800
    },
    regularText: {

    }
})