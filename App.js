import React from "react";
import { Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Icon from "react-native-vector-icons/FontAwesome";

import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Add from "./component/Add";

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
			tabBarIcon: <Icon name="home" size={24} color="#cc5500" />,
        },
	},
	// Add:{
	// 	screen:()=>null,
	// 	navigationOptions:{
	// 		tabBarIcon:<Add/>
	// 	}
	// },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
			tabBarIcon: <Icon name="info-circle" size={24} color="red" />,
        },
    },
},
{
	tabBarOptions:{
		showLabel:false
	}
});

export default createAppContainer(TabNavigator);
