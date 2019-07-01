import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";

import FEED from "./assets/img/feed.png";
import NOTIFICATION from "./assets/img/alarm.png";
import SEARCH from "./assets/img/search.png";
import ADD from "./assets/img/add.png";
import PROFILE from "./assets/img/default.jpg";
import { Images } from "./assets/styles/Image";

import Login from "./views/login";
import Register from "./views/register";
import InputEmail from "./views/ResetPassword/inputEmail";
import SendCode from "./views/ResetPassword/sendCode";
import ResetPassword from "./views/ResetPassword/resetPassword";
import Feed from "./views/Feed/feed";
import Feed2 from "./views/feed2";
import MarkdownView from "./views/markdown";
import Profile from "./views/Profile/profile";
import SearchProfile from "./views/Profile/searchProfile";

export const TabNavigator = createBottomTabNavigator(
  {
    Feed: {
      screen: Feed,
      navigationOptions: () => ({
        tabBarIcon: () => <Images height={21} width={21} source={FEED} />,
        tabBarOnPress: tab => {
          if (tab.navigation.isFocused()) {
            tab.navigation.state.params.scrollToTop();
          }
          tab.navigation.navigate("Feed");
        }
      })
    },

    Search: {
      screen: Feed2,
      navigationOptions: () => ({
        tabBarIcon: () => <Images height={21} width={21} source={SEARCH} />
      })
    },

    Add: {
      screen: MarkdownView,
      navigationOptions: () => ({
        tabBarIcon: () => <Images height={22} width={22} source={ADD} />
      })
    },

    Notifications: {
      screen: MarkdownView,
      navigationOptions: () => ({
        tabBarIcon: () => (
          <Images height={21} width={21} source={NOTIFICATION} />
        )
      })
    },

    Profile: {
      screen: Profile,
      navigationOptions: () => ({
        tabBarIcon: () => (
          <Images height={22} width={22} radius={11} source={PROFILE} />
        )
      })
    }
  },

  {
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      animate: false
      // activeTintColor: "#4E4E4E",
      // inactiveTintColor: "grey"
    },
    tabBarPosition: "bottom"
  }
);

export const Root = createStackNavigator(
  {
    TabNavigator,
    Login: { screen: Login },
    Register: { screen: Register },
    InputEmail: { screen: InputEmail },
    SendCode: { screen: SendCode },
    ResetPassword: { screen: ResetPassword },
    SearchProfile: { screen: SearchProfile }
  },
  {
    header: null,
    headerMode: "none"
  }
);

export const NotLoginRoot = createStackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
  InputEmail: { screen: InputEmail },
  SendCode: { screen: SendCode },
  ResetPassword: { screen: ResetPassword },
  SearchProfile: { screen: SearchProfile }

  // Feed: { screen: Feed }
});

export const AppContainer = (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        // NotLoginRoot: { screen: NotLoginRoot },
        Root: { screen: Root }
      },

      { initialRouteName: signedIn ? "Root" : "Root" }
      // { initialRouteName: false ? "NotLoginRoot" : "NotLoginRoot" }
    )
  );
