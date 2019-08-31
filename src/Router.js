import React from "react";
import { compose } from "redux";
import styled, { css, withTheme } from "styled-components";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  BottomTabBar
} from "react-navigation";

import { withSelf } from "./lib/ContextSelf";

import Icon from "./components/Icon";

// Auth Views
import Login from "./views/login";
import Signup from "./views/signup";
import InputEmail from "./views/ResetPassword/inputEmail";
import SendCode from "./views/ResetPassword/sendCode";
import ResetPassword from "./views/ResetPassword/resetPassword";

// App Views
import Feed from "./views/Feed";
import MarkdownView from "./views/markdown";
import Profile from "./views/Profile";
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
import ShareNadle from "./views/shareNadle";
import Suggestions from "./views/suggestions";

const Picture = styled.Image`
  border-radius: 12;
  height: 24px;
  width: 24px;

  ${props =>
    props.focused &&
    css`
      border: 2px ${props => props.theme.colors.PRIMARY} solid;
    `}
`;

const ProfileTab = compose(withSelf)(({ focused, self }) => {
  return <Picture focused={focused} source={{ uri: self.picture }} />;
});

const IconTab = compose(withTheme)(({ focused, theme, icon }) => {
  return (
    <Icon
      color={focused ? theme.colors.PRIMARY : "#999"}
      size={20}
      name={`${focused ? "solid" : "outline"}-${icon}`}
    />
  );
});

const TabNavigator = createBottomTabNavigator(
  {
    Feed: {
      screen: Feed,
      navigationOptions: () => ({
        tabBarIcon: function TabNewsPaper(props) {
          return <IconTab {...props} icon="newspaper" />;
        },
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
        tabBarIcon: function TabSearch(props) {
          return <IconTab {...props} icon="search" />;
        }
      })
    },

    Add: {
      screen: MarkdownView,
      navigationOptions: () => ({
        tabBarIcon: function TabAddPosts(props) {
          return <IconTab {...props} icon="plus-circle" />;
        }
      })
    },

    Saved: {
      screen: Saved,
      navigationOptions: () => ({
        tabBarIcon: function TabBookedPosts(props) {
          return <IconTab {...props} icon="bookmark" />;
        }
      })
    },

    Profile: {
      screen: compose(withSelf)(Profile),
      navigationOptions: () => ({
        tabBarIcon: ProfileTab
      })
    }
  },

  {
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      animate: true
    },
    tabBarPosition: "bottom",
    tabBarComponent: compose(withTheme)(function TabBarComponent(props) {
      return (
        <BottomTabBar
          {...props}
          style={{
            backgroundColor: props.theme.styled.BOX_BACKGROUND
          }}
        />
      );
    })
  }
);

const Root = createStackNavigator(
  {
    TabNavigator,
    Login: { screen: Login },
    Signup: { screen: Signup },
    InputEmail: { screen: InputEmail },
    SendCode: { screen: SendCode },
    ResetPassword: { screen: ResetPassword },
    SearchProfile: { screen: Profile },
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
    MyOrganizations: { screen: MyOrganizations },
    ShareNadle: { screen: ShareNadle },
    Suggestions: { screen: Suggestions }
  },
  {
    header: null,
    headerMode: "none"
  }
);

export const NotAuthenticatedRoot = createStackNavigator({
  Login: { screen: Login },
  Signup: { screen: Signup },
  InputEmail: { screen: InputEmail },
  SendCode: { screen: SendCode },
  ResetPassword: { screen: ResetPassword },
  SearchProfile: { screen: Profile }
});

export const AppContainer = (authenticated = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        NotAuthenticatedRoot: { screen: NotAuthenticatedRoot },
        Root: { screen: Root }
      },

      { initialRouteName: authenticated ? "Root" : "Root" }
      // { initialRouteName: false ? "NotAuthenticatedRoot" : "NotAuthenticatedRoot" }
    )
  );
