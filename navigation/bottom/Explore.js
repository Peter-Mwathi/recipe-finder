import { useState } from "react";
import { StyleSheet, Animated, ScrollView, View, TouchableOpacity} from 'react-native'
import * as React from 'react'
import Recipes from './data/Recipes'
import { SIZES, COLORS } from '../../constants/theme'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { CustomBoldText, CustomRegularText } from "../../components/texts/CustomTexts";
import TopFlatlistItem from "../../components/explore/TopFlatlistItem";
import { TopHomeNavigationStatements } from "./data/Statements";
import ShimmerHomeProgress from "../../components/progress/ShimmerHomeProgress";


const Explore = ({navigation}) => {

  // this will track the current slide 
  const scrollX = React.useRef(new Animated.Value(0)).current;


  const [recipesCount, setRecipesCount] = useState(0)
  const [isFetching, setIsFetching] = useState(true)
  const [recipeList, setRecipesList] = useState({})

  // get first object 
  const extractRecipesData = Recipes[Object.keys(Recipes)[1]]
  const firstObject = Object.values(extractRecipesData)[6]
  const firstRecipeSlideItems = Object.values(extractRecipesData).slice(17, 34)

  // navigate to search page 
  const navigateToSearch = (navigation) => {
    navigation.navigate("Search")
  }


  // Top recipe flatlist scroll indicator 
  const TopRecipeListIndicator = ({scrollX}) => {
    const width = SIZES.width
    return (
      <View className="flex-row justify-center mt-3">
        {firstRecipeSlideItems.map((_, i)=>{

        // input range 
        const inputRange = [(i - 1) * width, i * width, (i +1 ) * width];

        // change the opacity of the current and previous Indicators 
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.7, 1, 0.7]
        })

        return (
          <Animated.View 
            key={`indicator-${i}`}
            style={{
              height: 8,
              width: 8, 
              borderRadius: 4,
              margin:3,
              opacity,
              backgroundColor: COLORS.defaultGreen
            }}
          >
          </Animated.View>
        )
        })}
      </View>
    )
  }

  return (
    <View className="bg-white">

        {/* explore page header  */}
        <View className="flex-row justify-center items-center pt-16 pb-3 px-4" style={styles.topNavigationBar}>
          <Ionicons name="search-circle-outline" size={24} color={COLORS.defaultGreen} />
          <CustomBoldText styles="ml-1" customStyles={{color: COLORS.defaultGreen}} size={20} title="Recipe finder"/>
          
          {/* the search bar on the right  */}
          <TouchableOpacity 
            onPress={()=> navigateToSearch(navigation)}
            activeOpacity={0.8} 
            className="grow flex-row items-center justify-start px-4 ml-4"
            style={{
              height: 40,
              borderRadius: 20,
              backgroundColor: "#e8f0f7",
            
            }}
          >
            <Ionicons name="search-outline" size={18} color="black" />
            <CustomRegularText styles="ml-3" title="Search recipes, diets"/>
          </TouchableOpacity>
        </View>


        {/* main scrollView  */}
        <ScrollView className="h-full w-full pt-2">
          {/* loaded after getting content  */}
          <View className="flex-1 justify-center mb-11 items-center">


            {/* Explore item | Slide flat list */}
            <View className="mt-5">
              <Animated.FlatList
                data = {firstRecipeSlideItems}
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={32}
                pagingEnabled
                onScroll={Animated.event(
                  [{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: false}
                )}
                keyExtractor={item=> item.id}
                renderItem={({item, index}) => {
                  return (
                    <TopFlatlistItem description={TopHomeNavigationStatements[index]} item={item}/>
                  )
                }}
              />
            <TopRecipeListIndicator scrollX={scrollX}/>
            </View>

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
    elevation: 5,
  }, 
  homeTopSearchBar: {

  }
})