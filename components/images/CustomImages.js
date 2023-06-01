import {Image} from 'react-native'
import React, {useState, useEffect} from 'react'
import { SIZES } from '../../constants/theme'


// custom image to be used in various sections 
const CustomImage = ({imageUrl, placeholder, defaultImage, styles, style}) => {
    
    const [imageFailed, setIMageFailed] = useState(false)
    const [image, setImage] = useState(defaultImage)

    // check if the image has an error 
    const checkImageStatus = () => {
        setImage(imageFailed ? defaultImage: {uri: imageUrl})
    }

    // if the new image has an error 
    useEffect(() => {
        checkImageStatus()
    },[imageFailed])

    return (
        <Image  
            source={image}
            style={style}
            onError={()=> setIMageFailed(true)}
            className={styles}
        />
    )
}

// export custom image 
export default CustomImage