import { useState } from "react";
import { StyleSheet, Text, Image, ScrollView, View, TouchableOpacity} from 'react-native'
import React from 'react'
import Recipes from './data/Recipes'
import { SIZES, COLORS } from '../../constants/theme'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { CustomBoldText } from "../../components/texts/CustomTexts";



const Explore = ({navigation}) => {

  const [recipesCount, setRecipesCount] = useState(0)
  const [isFetching, setIsFetching] = useState(true)
  const [recipeList, setRecipesList] = useState({})

  // get first object 
  const extractRecipesData = Recipes[Object.keys(Recipes)[1]]
  const firstObject = Object.values(extractRecipesData)[6]

  return (
    <View className="bg-white">

        {/* explore page header  */}
        <View className="flex-row justify-center items-center pt-16 pb-3" style={styles.topNavigationBar}>
          <Ionicons name="search-circle-outline" size={34} color="black" />
          <CustomBoldText styles="ml-1" size={23} title="Recipe finder"/>
        </View>

        {/* main scrollView  */}
        <ScrollView className="h-full w-full px-5">
          {/* loaded after getting content  */}
          <View className="flex-1 justify-center items-center bg-red-400 px-0 py-0">
            
          </View>


        </ScrollView>
    </View>
    
  )
}

export default Explore

const styles = StyleSheet.create({
  topNavigationBar: {
    backgroundColor: '#fff',
    width: SIZES.width,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    marginBottom: 10,
    elevation: 5,
  }
})