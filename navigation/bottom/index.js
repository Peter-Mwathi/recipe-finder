import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Text, View} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Feather from "react-native-vector-icons/Feather"
import Entypo  from "react-native-vector-icons/Entypo"
import {CustomRegularText} from "../../components/texts/CustomTexts"

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
                let iconSize = 25;
                let iconName;
                let rn = route.name;

                // home/Explore icon 
                if (rn === explore) {
                    iconName = focused ? "home" : "home-outline";
                    // home icon  
                    return <Ionicons name={iconName} size={iconSize} color={color} />;
                } 
                // search tab icon
                else if (rn === search) {
                   {return focused ? <FontAwesome5 name="search" size={iconSize} color={color} />: <AntDesign name="search1" size={iconSize} color={color} />;}
                }
                // shopping icon 
                else if (rn === shoppingList) {
                    {return focused ? <Entypo name="shopping-bag" size={iconSize} color={color} />:<Feather name="shopping-bag" size={iconSize} color={color} />;}
                }
                // account icon 
                else if (rn === account) {
                    {return focused ? <FontAwesome name="user" size={iconSize} color={color} />:<AntDesign name="user" size={iconSize} color={color} />;}
                }
            },
            tabBarIconStyle:{
                fontSize: 30,
            },
            headerShown: false,
            tabBarLabel: ({ focused }) => {
                return <Text style={{fontSize: 14, fontWeight: '600', color: focused ? "black": "gray"}}>{route.name}</Text>
              },
            tabBarInactiveTintColor: "gray",
            tabBarActiveTintColor:"black",
            tabBarLabelStyle: {
                textTransform: "uppercase"
            },
            tabBarStyle: {
                height: 70,
                position: 'absolute',
                bottom: 0,
                backgroundColor: "white",
                padding: 10,
                paddingBottom: 10,
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
