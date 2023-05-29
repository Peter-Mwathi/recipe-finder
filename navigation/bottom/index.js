import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'

// import Screens here 
import Account from "./Account";
import Search from "./Search";
import ShoppingList from "./ShoppingList";
import Explore from './Explore'

// give the bottom tabs navigation names 
const explore = "Explore";
const search = "Search";
const shoppingList = "Shopping"
const account = "Account"

// create bottom tab navigator 
const BottomTab = createBottomTabNavigator();

// create the bottom navigator 
const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                // console.log(color)
                let iconName;
                let rn = route.name;

                if (rn === explore) {
                    iconName = focused ? "home" : "home-outline";
                } else if (rn === search) {
                    iconName = focused ? "list" : "list-outline";
                } else if (rn === shoppingList) {
                    iconName = focused ? "settings" : "settings-outline";
                } else if (rn === account) {
                    iconName = focused ? "settings" : "settings-outline";
                }

                // return icons based on the above props 
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            headerShown: false,
            tabBarInactiveTintColor: "white",
            tabBarStyle: {
                height: 70,
                position: 'absolute',
                bottom: 0,
                backgroundColor: "tomato",
                padding: 10,
                paddingBottom: 10
            }
        })}

        >
            <BottomTab.Screen name={explore} component={Explore} />
            <BottomTab.Screen name={search} component={Search} />
            <BottomTab.Screen name={shoppingList} component={ShoppingList} />
            <BottomTab.Screen name={account} component={Account} />
        </BottomTab.Navigator>
    )
}

// export the bottom navigation to the home screen 
export default BottomTabNavigator
