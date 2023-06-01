import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect }from 'react'

const Search = ({route, navigation}) => {

  const {searchQuery} = route.params
  const [hasSearch, setHasSearch] = useState(false)
  const [isSearching, setIsSearching] = useState(false)

  return (
    <View className="flex-1 justify-center items-center">
      <Text>{searchQuery}</Text>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})