// make imports for packages
import { StyleSheet, Text, View, ScrollView} from 'react-native'
import React, {useState, useEffect}from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import CustomFunctions from '../../functions/CustomFunctions'


// Make imports for variables 

// Return the search component 
const Search = ({route, navigation}) => {

  const {searchQuery} = route.params

  const [hasSearch, setHasSearch] = useState(false)
  const [recentItems, setRecentItems] = useState([]) 
  const [isSearching, setIsSearching] = useState(false)

  // save searches to recent activities 
  const saveSearchInRecentSearches = async (query) => {

    // if the search query is not empty and is longer than three characters 
    if (query.length > 3) {
      const recentSearchData = await AsyncStorage.getItem("recentSearches");
      
      // if there are no recent searches saved 
      if(!recentSearchData){
        const searchArray = [query]
        const initialSearchData = {
          lastItem: searchQuery, 
          items: searchArray
        }

        // save initial search query 
        try {
          await AsyncStorage.setItem(
            "recentSearches",
            JSON.stringify(initialSearchData)
          );
        } catch (e) {
          //CustomFunctions.showAlertMessage("danger", "Error", `Filed to set the current items for recent searches`)
        }
      }
      
      // if recent searches were found 
      else 
      {

        // create a new item 
        let currentItems = JSON.parse(recentSearchData).items
        let newItemsArray = []
        for (let index = 0; index < currentItems.length; index++) {
          const item = currentItems[index];
          if(item != query){
            newItemsArray.push(item)
          }
          
        }

        // set recent items 
        setRecentItems(newItemsArray)
        newItemsArray.push(query)

        // update the new array 
        try {
          await AsyncStorage.setItem(
            "recentSearches",
            JSON.stringify({
              lastItem: query, 
              items: newItemsArray
            })
          );
        } catch (e) {
          //CustomFunctions.showAlertMessage("danger", "Error", `Could not update the current recent search items`)
        }
        
      }
      
    }
  }

  // call these methods if the search query changes
  useEffect(()=>{
    saveSearchInRecentSearches(searchQuery)
  }, [searchQuery])

  // Return the search view 
  return (
    <View className="flex-1 justify-center items-center">
     <Text>Text</Text>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})