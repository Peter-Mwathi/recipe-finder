import { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import Recipes from './data/Recipes'


// create shimmer gradient for loading 
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

const recipeLink = "https://recipe-scrap.vercel.app/"

const Explore = ({navigation}) => {

  const [recipesCount, setRecipesCount] = useState(0)
  const [isFetching, setIsFetching] = useState(true)


  // fetch recipes 
  const fetchRandomRecipes =() => {
    console.log(Recipes)
  }


  // get recipes on initial load 
  useEffect(()=>{
    fetchRandomRecipes("keto")
  }, [])


  return (
    <View className="flex-1 justify-center items-center">
        <Text>Currently, there are: {recipesCount} recipes</Text>
        <Text>{isFetching ? "Fetching...": "Completed"}</Text>
    </View>
  )
}

export default Explore

const styles = StyleSheet.create({
  shimmer: {

  }
})