import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Users from "../screens/Users";
import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";
import { Image } from "react-native";
import React from "react";
import Colors from "../constants/colors";
import Styles from "./styles";
import { moderateScale as ms } from "react-native-size-matters"; 

const UsersNavigator = createStackNavigator(
    {
        Users: Users,
        Profile: Profile
    }, { headerMode: "none" }
)

const FavoritesNavigator = createStackNavigator(
    {
        Favorites: Favorites,
        Profile: Profile
    }, { headerMode: "none" }
)

const TabNavigator = createBottomTabNavigator({
    Users: UsersNavigator,
    Favorites: FavoritesNavigator
}, {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconSource;

        if (routeName === 'Users') {
            if(focused)
                iconSource = require("../assets/icons/user_focused.png");
            else
                iconSource = require("../assets/icons/user_unfocused.png");
        } else if (routeName === 'Favorites') {
            if(focused)
                iconSource = require("../assets/icons/star_focused.png");
            else
                iconSource = require("../assets/icons/star_unfocused.png");
        }

        return <Image style={{ height: ms(20), width: ms(20), marginTop: ms(5) }} source={iconSource} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: Colors.darkBlue,
      inactiveTintColor: "#CDCDCD",
      labelStyle: {
          paddingBottom: ms(1)
      },
    },
  }
);

export default createAppContainer(TabNavigator);