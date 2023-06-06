import { useState, useEffect } from "react";
import { StyleSheet, Animated, ScrollView, View, TouchableOpacity, FlatList, Image, Text, ActivityIndicator} from 'react-native'
import * as React from 'react'
import { SIZES, COLORS } from '../../constants/theme'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { CustomBoldText, CustomRegularText } from "../../components/texts/CustomTexts";
import TopFlatlistItem from "../../components/explore/TopFlatlistItem";
import { TopHomeNavigationStatements } from "./data/Statements";
import SelectTime from "../../components/explore/SelectTime";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import views 
import ShimmerHomeProgress from "../../components/progress/ShimmerHomeProgress";
import SectionHeader from "../../components/explore/SectionHeader";
import VerticalRecipeItem from "../../components/explore/VerticalRecipeItem";


// import favorites item to go below the first section 
import FavoriteItem from "../../components/explore/FavoritesItem"


// import data 
import RandomRecipe from './data/Keywords' 
import FavoritesItems from "../../assets/images/favorites/Favorites"; 
import MealTime from "./data/Time"
import CustomFunctions from "../../functions/CustomFunctions";

// variables 
const requestUrl = "https://nursinggator.com/recipe/recipe.json";
// const requestUrl = "https://recipe-scrap.vercel.app/Ii8LhnECbHEMXZWFReHh";

// explore home content 
const Explore = ({navigation}) => {

  // this will track the current slide 
  const scrollX = React.useRef(new Animated.Value(0)).current;


  const [recipesCount, setRecipesCount] = useState(0)
  const [isFetching, setIsFetching] = useState(true)
  const [recipeList, setRecipesList] = useState({})
  const [loadRecipesError, setLoadRecipesError] = useState(false)
  const [firstRecipeSlideItems, setFirstRecipeSlideItems] =  useState([])
  const [recentSearchItems, setRecentSearchItems] = useState([])
  const [isFetchingRecent, setIsFetchingRecent] = useState(true)
  const [lastSearchItem, setLastSearchItem] = useState("")


  // navigate to search page 
  const navigateToSearch = (navigation, searchQuery) => {
    navigation.navigate("Search", {
      searchQuery
    })
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

  // get and set recipe items 
  const getAndSetRecipeItems = () => {

    // reset the recipe error 
    setLoadRecipesError(false)

    // create form data to carry post items 
    let formData = new FormData();
    formData.append("query", RandomRecipe);
    formData.append("count", "5");

    // create request options 
    let requestOptions = { method: 'POST', body: formData, redirect: 'follow'};


    //get recipe data with fetch  -->
    fetch(requestUrl, requestOptions)
    .then(response => response.text())
    // .then(result => console.log(JSON.parse(result).status.message))
    .then(result => {

      // get data from the response 
      const response  = JSON.parse(result)
      const status = response.status.status

      // CustomFunctions.showAlertMessage("danger", "error", e)
      const message = response.status.message
      const data = response.recipeData
      setFirstRecipeSlideItems(Object.values(data).slice(-6))

    })
    .catch((error) => {
      setLoadRecipesError(true)
    })
    .finally(()=>{
      setIsFetching(false)
    });
    
  }


  // get recent searches 
  const getRecentSearches = async () => {

    // update fetched to true 
    setIsFetchingRecent(true)

    // get the recent searches 
    const recentSearchData = await AsyncStorage.getItem("recentSearches");
    const searchItems = JSON.parse(recentSearchData).items
    const searchItemsArray = searchItems.map(item => item)
    const recipe = searchItemsArray[Math.floor(Math.random()*3)];
    setLastSearchItem(recipe)

    // create form data to carry post items 
    let formData = new FormData();
    formData.append("query", recipe);
    formData.append("count", "4");

    // create request options 
    let requestOptions = { method: 'POST', body: formData, redirect: 'follow'};


    //get recipe data with fetch  -->
    fetch(requestUrl, requestOptions)
    .then(response => response.text())
    // .then(result => console.log(JSON.parse(result).status.message))
    .then(result => {

      // get data from the response 
      const response  = JSON.parse(result)
      const status = response.status.status

      // CustomFunctions.showAlertMessage("danger", "error", e)
      const message = response.status.message
      const data = response.recipeData
      setRecentSearchItems(Object.values(data).slice(5,10))
      setIsFetchingRecent(false)

    })
    .catch((error) => {
      console.log(error)
      // CustomFunctions.showAlertMessage("danger", "error", e)
    })
    
  }

  // call this method when the app loads for the first time 
  useEffect(() => {
    // getAndSetRecipeItems()
    setIsFetching(false)
    // getRecentSearches()
  },[])

  return (
    <View className="bg-slate-50">

        {/* explore page header  */}
        <View className="flex-row justify-center items-center pt-16 pb-3 px-4" style={styles.topNavigationBar}>
          <Ionicons name="search-circle-outline" size={24} color={COLORS.defaultGreen} />
          <CustomBoldText styles="ml-1" customStyles={{color: COLORS.defaultGreen}} size={20} title="Recipe finder"/>
          
          {/* the search bar on the right  */}
          <TouchableOpacity 
            onPress={()=> navigateToSearch(navigation, "")}
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
        <ScrollView className="h-full w-full pt-1">

        
        {!isFetching ?
          <View>

              {/* Explore item | Slide flat list */}
              <View className="flex-1 justify-center mb-7 items-center">
                <View className="pt-4 bg-white pb-2 rounded-xl">
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

              {/* favorites section  */}
              <View className="bg-white py-6 mb-7 px-4 rounded-xl">

                {/* section header header  */}
                <SectionHeader search="" title="Favorites collection" navigation={navigation} navigateToSearch={navigateToSearch}/>

                {/* favorites items  */}
                <FlatList
                    horizontal
                    data={FavoritesItems}
                    keyExtractor={item => item.id}
                    renderItem={({item, index}) => {
                      return (
                        <FavoriteItem navMethod={navigateToSearch} navigation={navigation} item={item}/>
                      )
                    }}
                  />
              </View>

              {/* Date and time section  */}
              <View className="bg-white py-6 px-4 rounded-xl">

                {/* section header header  */}
                <SectionHeader search="" title="Meal time" navigation={navigation} navigateToSearch={navigateToSearch}/>
                <FlatList
                  className="pb-3"
                  data={MealTime}
                  keyExtractor={item => item.id}
                  horizontal
                  renderItem={({item, index}) => {
                   return (
                    <SelectTime navigation={navigation} navigateToSearch={navigateToSearch} item={item}/>
                   )
                  }}
                />
               
              </View>
              
              {/* show based on recent searches  */}
              {!isFetchingRecent ? 
                <View>
                  <View className="bg-white py-6 px-4 mt-8 rounded-xl">
                    <SectionHeader search={lastSearchItem} title="From recent activities" navigation={navigation} navigateToSearch={navigateToSearch}/>

                    {/* {recentSearchItems.map((recipe, index) => {
                      return (
                        <VerticalRecipeItem key={index} item={recipe}/>
                      )
                    })} */}

                    <VerticalRecipeItem/>
                  </View>
                </View>:
                <View>
                   <ActivityIndicator className="my-4" size="large" color={COLORS.defaultGreen} />
                </View>
              }
            </View>: 

            // when the explore page is loading 
            <ShimmerHomeProgress/>
          }
          
          <View className="pb-56" ></View>
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