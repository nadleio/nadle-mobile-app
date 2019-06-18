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
import Feed from "./views/feed";
import Feed2 from "./views/feed2";
import MarkdownView from "./views/markdown";
import MarkdownEditor from "./views/MarkdownEditor";

export const TabNavigator = createBottomTabNavigator(
  {
    Feed: {
      screen: Feed,
      navigationOptions: () => ({
        tabBarIcon: () => <Images height={21} width={21} source={FEED} />
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
      screen: MarkdownEditor,
      navigationOptions: () => ({
        tabBarIcon: () => (
          <Images height={21} width={21} source={NOTIFICATION} />
        )
      })
    },

    Profile: {
      screen: Feed,
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
      showIcon: true
      // activeTintColor: "#4E4E4E",
      // inactiveTintColor: "grey"
    },
    tabBarPosition: "bottom"
  }
);

export const Root = createStackNavigator(
  { TabNavigator },
  {
    header: null,
    headerMode: "none"
  },
  {
    Login: { screen: Login },
    Register: { screen: Register },
    InputEmail: { screen: InputEmail },
    SendCode: { screen: SendCode },
    ResetPassword: { screen: ResetPassword }
    // Feed: { screen: Feed }
  }
);

export const NotLoginRoot = createStackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
  InputEmail: { screen: InputEmail },
  SendCode: { screen: SendCode },
  ResetPassword: { screen: ResetPassword }
  // Feed: { screen: Feed }
});

export const AppContainer = (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        NotLoginRoot: { screen: NotLoginRoot },
        Root: { screen: Root }
      },

      { initialRouteName: signedIn ? "Root" : "NotLoginRoot" }
      // { initialRouteName: false ? "NotLoginRoot" : "NotLoginRoot" }
    )
  );
