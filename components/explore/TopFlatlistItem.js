import { StyleSheet, View, TouchableOpacity, Image} from 'react-native'
import React, {useState, useEffect} from 'react'
import { SIZES } from '../../constants/theme'
import { CustomRegularText, CustomBoldText } from '../texts/CustomTexts'
import CustomImage from '../images/CustomImages'
import WidePlaceholders from '../../assets/images/placeholders/recipe-wide'

const defaultImage = WidePlaceholders[Math.floor(Math.random() * (3 - 0 + 1) + 0)]
const placeholder = require("../../assets/images/splash/splash-image-red.png")

// top flatlist item 
const TopFlatlistItem = ({item, description}) => {
  const [imageFailed, setIMageFailed] = useState(false)
  const [image, setImage] = useState(defaultImage)

  // check if the image has an error 
  const checkImageStatus = () => {
    setImage(imageFailed ? defaultImage: {uri: item.imageUrl})
  }

  // if the new image has an error 
  useEffect(() => {
    checkImageStatus()
  },[imageFailed])

  // load first after the page has loaded 
  useEffect(()=>{
    setImage(placeholder)
  },[])

  return (
    <TouchableOpacity style={{width: SIZES.width - 32}} activeOpacity={0.8} className="mx-4">

      {/* this is recipe category  */}
      <CustomRegularText styles="text-slate-500 uppercase" size={12} title={item.category}/>

      {/* this is recipe name  */}
      <View style={{maxWidth: SIZES.width, overflow: 'hidden'}}>
        <CustomBoldText styles="mb-3 max-w-full text-slate-800" size={20} title={item.title}/>
      </View>

      {/* this is recipe image  */}
      <CustomImage
        styles="rounded-tr-xl rounded-tl-xl rounded-br-xl w-full"
        style = {{height: SIZES.height * .20}} 
        imageUrl={item.imageUrl}
        placeholder={placeholder}
        defaultImage={defaultImage}
      />

      {/* recipe item descriptions  */}
      <CustomRegularText 
        styles="mt-3 leading-6"
        size={15}
        title={description}
      />

    </TouchableOpacity>
  )
}

export default TopFlatlistItem

const styles = StyleSheet.create({})