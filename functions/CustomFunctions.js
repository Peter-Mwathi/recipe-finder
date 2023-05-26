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

// put all functions into one place 
const customFunctions = {showAlertMessage} 
export default customFunctions

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