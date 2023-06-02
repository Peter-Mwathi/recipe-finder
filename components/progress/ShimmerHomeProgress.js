import {View, StyleSheet, FlatList, Text} from 'react-native'
import React from 'react'
import ShimmerItem from './ShimmerItem';
import {SIZES} from "../../constants/theme"

// create a standard width 
let width = (SIZES.width - 16)
let height = (SIZES.height)
width = width - 16


// random progress array 
const  randomProgressArray = [
    { id: "RwJ5jCQcYt", name: "Lion" },
    { id: "T7v84aE3Zd", name: "Tiger" },
    { id: "kY39Hs1nVW", name: "Elephant" },
    { id: "i4C2Lt3Dpn", name: "Giraffe" },
    { id: "X5OaDy72fp", name: "Monkey" },
    { id: "Z92tFjK6Oc", name: "Panda" }
  ];
  
// home/explore page shimmer item 
const ShimmerHomeProgress = () => {
    return (
        <View>

            {/* top section  */}
            <View> 
                <ShimmerItem style="rounded-sm mx-4 my-1 mt-5 w-full" height={15} width={width * 0.4}/>
                <ShimmerItem style=" rounded-sm mx-4 my-1 w-full" height={30} width={width * 0.6}/>
                <ShimmerItem style="rounded-lg mx-4 my-2 w-full" height={200} width={width}/>
                
                
                <View className="my-4">
                    <ShimmerItem style="mx-4 my-1 w-full" height={10} width={width}/>
                    <ShimmerItem style="mx-4 my-1 w-full" height={10} width={width * 0.8}/>
                    <ShimmerItem style="mx-4 my-1 w-full" height={10} width={width}/>
                    <ShimmerItem style="mx-4 my-1 w-full" height={10} width={width * 0.6}/>
                </View>
            </View>
            

            {/* Favorites section  */}
            <View className="ml-4" style={{marginEnd: 16}}>
                <View className="mt-5 justify-between flex-row">
                    <ShimmerItem style="rounded-lg my-2 w-full" height={24} width={width * 0.5}/>
                    <ShimmerItem style="rounded-lg my-2 w-full" height={24} width={width * 0.3}/>
                </View>
                <FlatList
                    horizontal
                    data={randomProgressArray}
                    key={item => item.id}
                    renderItem={({item, index}) => {
                        return (
                           <ShimmerItem style="rounded-lg mr-4" width={height * 0.15} height={height * 0.14}/>
                        )
                    }}
                />
            </View>
           
            {/* Favorites section  */}
            <View className="ml-4 mt-6" style={{marginEnd: 16}}>
                <View className="mt-5 mb-4 justify-between flex-row">
                    <ShimmerItem style="rounded-lg my-2 w-full" height={20} width={width * 0.20}/>
                    <ShimmerItem style="rounded-lg my-2 w-full" height={20} width={width * 0.6}/>
                </View>
                <FlatList
                    horizontal
                    data={randomProgressArray}
                    key={item => item.id}
                    renderItem={({item, index}) => {
                        return (
                           <ShimmerItem style="rounded-full mr-4" width={height * 0.10} height={height * 0.10}/>
                        )
                    }}
                />
            </View>


        </View>
    )
}

// export home/explore shimmer layout
export default ShimmerHomeProgress

// create a stylesheet 
const Styles = StyleSheet.create({})