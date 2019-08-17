import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";

import { Images } from "./assets/styles/Image";
import { Icon } from "./components/Icon";

import Login from "./views/login";
import Signup from "./views/signup";
import InputEmail from "./views/ResetPassword/inputEmail";
import SendCode from "./views/ResetPassword/sendCode";
import ResetPassword from "./views/ResetPassword/resetPassword";
import Feed from "./views/Feed";
import MarkdownView from "./views/markdown";
import Profile from "./views/Profile";
import SearchProfile from "./views/Profile/searchProfile";
import Notifications from "./views/Notifications";
import Post from "./views/Post";
import Search from "./views/Search";
import YoutubeForAndroid from "./views/Post/youtubeForAndroid";
import Subscriptions from "./views/Subscriptions";
import UserPosts from "./views/UserPosts";
import CollectionPosts from "./views/CollectionPosts";
import Saved from "./views/Saved";
import MarkdownForm from "./views/MarkdownForm";
import Comments from "./views/Comments";
import Configuration from "./views/Configuration";
import EditProfile from "./views/EditProfile";
import ChangePassword from "./views/ChangePassword";
import MyOrganizations from "./views/myOrganizations";

export const TabNavigator = createBottomTabNavigator(
  {
    Feed: {
      screen: Feed,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) =>
          tintColor == "grey" ? (
            <Icon color="grey" size={20}>
              
            </Icon>
          ) : (
            <Icon color="#2f5de9" size={20}>
              
            </Icon>
          ),
        tabBarOnPress: tab => {
          if (tab.navigation.isFocused()) {
            tab.navigation.state.params.scrollToTop();
          }
          tab.navigation.navigate("Feed");
        }
      })
    },

    Search: {
      screen: Search,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) =>
          tintColor == "grey" ? (
            <Icon color="grey" size={20}>
              
            </Icon>
          ) : (
            <Icon color="#2f5de9" size={20}>
              
            </Icon>
          )
      })
    },

    Add: {
      screen: MarkdownView,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) =>
          tintColor == "grey" ? (
            <Icon color="grey" size={20}>
              
            </Icon>
          ) : (
            <Icon color="#2f5de9" size={20}>
              
            </Icon>
          )
      })
    },

    Saved: {
      screen: Saved,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) =>
          tintColor == "grey" ? (
            <Icon color="grey" size={20}>
              
            </Icon>
          ) : (
            <Icon color="#2f5de9" size={20}>
              
            </Icon>
          )
      })
    },

    Profile: {
      screen: Profile,
      navigationOptions: () => ({
        tabBarIcon: () => (
          <Images
            height={22}
            width={22}
            radius={11}
            source={{
              uri:
                "https://nadle-assets.nyc3.digitaloceanspaces.com/default.jpg"
            }}
          />
        )
      })
    }
  },

  {
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      animate: false,
      activeTintColor: "black",
      inactiveTintColor: "grey"
    },
    tabBarPosition: "bottom"
  }
);

export const Root = createStackNavigator(
  {
    TabNavigator,
    Login: { screen: Login },
    Signup: { screen: Signup },
    InputEmail: { screen: InputEmail },
    SendCode: { screen: SendCode },
    ResetPassword: { screen: ResetPassword },
    SearchProfile: { screen: SearchProfile },
    Post: { screen: Post },
    YoutubeForAndroid: { screen: YoutubeForAndroid },
    Subscriptions: { screen: Subscriptions },
    UserPosts: { screen: UserPosts },
    CollectionPosts: { screen: CollectionPosts },
    Notifications: { screen: Notifications },
    MarkdownForm: { screen: MarkdownForm },
    Comments: { screen: Comments },
    Configuration: { screen: Configuration },
    EditProfile: { screen: EditProfile },
    ChangePassword: { screen: ChangePassword },
    MyOrganizations: { screen: MyOrganizations }
  },
  {
    header: null,
    headerMode: "none"
  }
);

export const NotLoginRoot = createStackNavigator({
  Login: { screen: Login },
  Signup: { screen: Signup },
  InputEmail: { screen: InputEmail },
  SendCode: { screen: SendCode },
  ResetPassword: { screen: ResetPassword },
  SearchProfile: { screen: SearchProfile }
});

export const AppContainer = (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        NotLoginRoot: { screen: NotLoginRoot },
        Root: { screen: Root }
      },

      { initialRouteName: signedIn ? "Root" : "Root" }
      // { initialRouteName: false ? "NotLoginRoot" : "NotLoginRoot" }
    )
  );
