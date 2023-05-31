import {View, StyleSheet} from 'react-native'
import React from 'react'
import ShimmerItem from './ShimmerItem';
  
// home/explore page shimmer item 
const ShimmerHomeProgress = () => {
    return (
        <View>
            <ShimmerItem style="ml-10 rounded-full" height={120} width={120}/>
        </View>
    )
}

// export home/explore shimmer layout
export default ShimmerHomeProgress

// create a stylesheet 
const Styles = StyleSheet.create({})