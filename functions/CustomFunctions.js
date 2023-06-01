import { StyleSheet} from 'react-native'
import { showMessage, hideMessage } from "react-native-flash-message"
import themes from '../constants/theme'

// show alert message 
const showAlertMessage = (type, title, message) => {
        showMessage({
        type: type,
        style: styles.alertContainer,
        textStyle: styles.textStyle,
        message: title,
        description: message,
        position: "top",
        duration: 2500,
        icon: "auto"
    });
}

// get the current meal time 
const getCurrentMeal = () => {
    const today = new Date()
    const curHr = today.getHours()
    let currentMeal = null;

    // check if the current hours is above 12 
    if (curHr < 12) {
        currentMeal = "breakfast recipe";
    }
    
    // return lunch recipes 
    else if (curHr < 18) {
        currentMeal = "lunch recipe";
    }

    // return dinner recipe 
    else {
        currentMeal = "dinner recipe";
    }
    return currentMeal
}


// put all functions into one place 
const CustomFunctions = {showAlertMessage, getCurrentMeal} 
export default CustomFunctions

// alert message styles 
const styles = StyleSheet.create({
    alertContainer: {
        paddingTop: 70,
    }, 
    textStyle: {
        fontSize: 15,
        marginTop: 5,
    }
})