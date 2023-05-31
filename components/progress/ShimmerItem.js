import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import GradientShimmer from 'react-native-gradient-shimmer';

// create a template shimmer item 
const ShimmerItem = ({height, width, style}) => {
    return (
        <GradientShimmer
            className= {style}
            LinearGradientComponent={LinearGradient}
            backgroundColor = "#e5e5e5"
            highlightColor = "#f4f2f2"
            height={height}
            width={width}
         />
    )
}

export default ShimmerItem