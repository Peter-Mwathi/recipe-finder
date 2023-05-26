import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Theme from '../../constants/theme'
import { CustomRegularText } from '../texts/CustomTexts'

const CustomButtonWhite = (props) => {
  return (
    <TouchableOpacity
        style={styles.container}
        activeOpacity={0.8}
        className="justify-center items-center absolute py-5 rounded-lg"
        onPress={props.onClickFunction}
    >
      <CustomRegularText styles="font-semibold" size={17} title={props.title}/>
    </TouchableOpacity>
  )
}

// export the default button 
export default CustomButtonWhite
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        justifyContent: "center",
        bottom: 50,
        width:  (Theme.SIZES.width) - (Theme.SIZES.width * 0.20)
    }
})